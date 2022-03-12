Dans beaucoup des sites de nos jours documentant le Python, on y verra inscrit que Python n'est qu'un langage interprété. Néanmoins, il existe une subtilité à cela qui rend ces propos partiellement corrects. En effet, Python ne passe pas uniquement par une phase d'interprétation avant de pouvoir être exécuté.

### De la compilation dès le début
En effet, le Python compile dans ce qu'on appelle du **bytecode** : c'est une représentation de notre code bas-niveau qui permet de bénéficier de certains avantages non négligeables comme la **linéarisation du code**, la **décomposition du code en instructions** simples à généralement un ou deux arguments...

L'intérêt de cette étape est d'aboutir à une forme très simple et simplifiée et de représenter le code d'une autre manière qu'un simple arbre qui peut s'avérer parfois être très profond ! Les optimisations sont ensuite bien plus simples à effectuer sur ce genre de code plutôt que sur un arbre directement.

> Attention néanmoins, des optimisations peuvent être effectuées sur l'arbre après le parsing comme la suppression de variables mortes, les macros...

Prenons un exemple très simple afin d'illustrer nos propos : 
```py
def hello():
	print('Hello world')
```
Ce code va être compilé en :

```py
# On charge la fonction `print` sur la stack depuis le scope global
0 LOAD_GLOBAL   0 (print)
# On charge le texte 'Hello, World!' depuis la table des constantes
2 LOAD_CONST    1 ('Hello, World!')  
# On appelle la fonction avec un argument
4 CALL_FUNCTION 1
```

#### La stack
La stack est l'endroit où sont stockées globalement tous les retours des instructions et des fonctions : cette dernière prend forme sous la forme d'une liste dans laquelle transitent tout le long de l'exécution du code des valeurs. 

#### Les tables de symboles et de constantes
Il faut se représenter ces tables comme une liste dans laquelle toutes les valeurs sont stockées afin d'y accéder rapidement via l'index à leur position.  Cette méthode permet d'une part de passer des valeurs plus simplement via le fichier de bytecode mais aussi de procéder à une micro-optimisation puisque cela ne nécessite plus de devoir utiliser potentiellement plusieurs fois le même texte mais simplement de viser un endroit où ce texte est contenu :

Imaginons le code suivant :

```py
'Hello'
'World'
'Hello'
```

En bytecode, cela nous donnerait le résultat suivant :
```py
0 LOAD_CONST 0
2 LOAD_CONST 1
4 LOAD_CONST 0
```

Comme vous pouvez le voir ainsi, nous n'avons plus besoin de devoir push sur la stack une nouvelle valeur `'Hello'` à chaque fois mais simplement à viser depuis la table de constantes.


### De la compilation vers l'interprétation
Maintenant que nous avons vu la manière dont était compilée un code Python, nous allons désormais nous intéresser à la manière dont ce bytecode est exécuté.

#### La machine virtuelle (ou VM)
Contrairement à la croyance populaire, une VM n'est pas forcément quelque chose pour faire tourner un système d'exploitation dessus. En effet, ce genre de VM est une VM comme le python en a fondamentalement sauf qu'elle a la possibilité d'émuler une architecture, ce qui lui permet de pouvoir comprendre par extension les systèmes d'exploitation et de pouvoir les faire tourner.

En python, cette VM est simplement conçue pour exécuter bêtement notre bytecode. Cette VM reçoit le bytecode du code Python compilé et exécute instruction par instruction le code machine en question. L'intérêt d'un tel processus est que l'on a un meilleur contrôle sur ce que fait le code et que l'on peut bénéficier d'optimisations non négligeables...

Prenez l'exemple d'une simple fonction factorielle récursive :
```py
def factorial(n):
	return 1 if n == 0 else n * factorial(n - 1)
```

Le souci d'un simple interpréteur serait qu'il aurait dans 99% des cas fait un appel récursif à chaque rappel de la fonction dans elle-même. Cette façon de procéder est vite très coûteuse puisque plus on a de récursions, plus notre callstack croît, ce qui cause ainsi des lenteurs au langage.

Notre VM va se démarquer par un fonctionnement très particulier qui tend à ressembler à celui d'un langage assembleur : il va baser sa position sur ce qu'on appelle un **Instruction Pointer** (ou IP), qui va simplement dire à la VM quelle ligne du bytecode, donc quelle instruction doit-elle exécuter. Cette méthode a l'avantage d'éviter d'utiliser des appels récursifs puisqu'il nous suffit plus que de bouger comme un enfant jouerait à la marelle dans notre bytecode. 

> Attention, cette méthode peut être toutefois coûteuse (même si moins que l'interprétation toute simple) si mal mise en place !

#### Optimisations
Dans beaucoup des bytecodes, les scopes sont éliminés via différents systèmes comme le GC qui consiste à contrôler le temps de vie de nos variables, ou simplement via l'implémentation d'instructions `DROP` pour chaque variable déclarée dans un scope. 

> En quoi cette méthode diffère de celle de l'interprétation ?

Eh bien, là où l'interprétation va dans la plupart des cas simplement procéder à des optimisations comme l'élimination des variables non utilisées, notre compilateur va lui complètement supprimer ce principe explicite de scoping pour n'y laisser qu'une succession de `DROP`. 

Cela nous évite de devoir gérer le système de frames : une frame est un élément d'une stack qui est composée elle-même de plusieurs autres listes qui correspondent au variables scopées : ce système est problématique puisqu'il implique une stack potentiellement très grande et très lourde.

On peut néanmoins considérer la VM comme une phase d'interprétation car en effet cette dernière ne se contente que d'exécuter une représentation simplifiée et linéarisée de notre AST (arbre syntaxique). 

### Conclusion

Une question que beaucoup se posent sûrement : 
> Mais alors, pourquoi les documentations ne précisent pas cela dès le début ?

Je n'aurais pas tellement de réponse à apporter à cette question simplement parce que je ne comprends pas totalement : 
 - Peut-être est-ce l'oeuvre de croyance populaire qui ont influencé les documentations.
 - Peut-être est-ce le fait que la documentation Python elle-même indique que c'est interprété.
 - Peut-être est-ce fait pour simplifier l'apprentissage aux néophytes : *ce sont des notions qui sont selon moi inutiles à connaître lorsqu'on débute dans ce langage et surtout dans la programmation de manière générale.*

Dans tous les cas, j'espère que cet article vous aura été utile dans la compréhension du réel fonctionnement de Python. Je n'aurais bien sûr pas abordé tous les points et spécificités du langage afin de rester général dans mes propos et de ne pas faire durer inutilement l'article.
