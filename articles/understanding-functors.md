# Comprendre les foncteurs en Haskell
De manière générale, un foncteur est un élément faisant parti du principe de la théorie des catégories qui n'est ni plus ni moins que la généralisation des morphismes aux catégories. Cependant, comme vous pouvez vous en rendre compte, cette définition n'est pas forcément adaptée à tout public tant elle se base sur des notions des mathématiques assez avancées. 

C'est pour cela que je vais vous l'expliquer dès à présent dans cet article en me basant sur le Haskell principalement.

**Cet article nécessite des connaissances de base en Haskell telles que :**
	- Fonctions de mapping
	- Principe des typeclasses et types
	- Compréhension de la signature des fonctions
*Il reste néanmoins accessible à toute personne ayant de l'expérience avec la programmation fonctionnelle ou la programmation fortement typée.*

### Un outil que tout développeur a déjà utilisé
Lorsque je vous parle de `map`, vous allez sûrement comprendre de quelle fonction je parle exactement. Le map c'est ni plus in moins qu'un outil permettant **d'itérer sur une liste, de modifier le contenu de l'élément itéré afin de retourner une nouvelle liste**. On peut le représenter par sa définition :
```hs
map :: (a -> b) -> [a] -> [b]
```

Si cela vous paraît encore un peu abstrait, prenons alors un exemple :
```hs
map (\_ -> "test") [1..10] -- ["test", "test", "test"...]
-- ou map (const "test") [1..10]
```
Dans ce code-ci, décomposons notre appel de map afin de réécrire sa définition de fonction dans ce contexte bien précis : on map itère tout d'abord sur une liste de nombres, à chaque élément, nombre de cette liste, on retourne une chaîne de caractère. Nous pouvons donc modéliser cet appel sous cette forme : `map :: (Integer -> String) -> [Integer] -> [String]`. On peut donc plus ou moins considérer les "lettres" dans notre définition plus haut comme le principe de **type générique**.

### Apparition des foncteurs
Imaginons que désormais, je veuille non pas map sur une liste mais sur un tout autre type comme `Maybe` (`data Maybe a = None | Just a`), je me retrouve donc bloqué par le fait que map ne soit défini uniquement que pour les listes. Le principal souci ici est que j'aimerais pouvoir modifier ma valeur de type `a` sans pour autant devoir unwrap puis rewrap à chaque fois que j'ai besoin de la modifier. Il nous faut donc pour solutionner ce problème, généraliser le principe de map afin de pouvoir par la suite, simplement instancier et pouvoir mapper sur mon type. 

C'est là que viennent les foncteurs. En effet, ces derniers sont en Haskell, la généralisation du concept de map que l'on conditionne dans une classe `Functor`. On définit la fonction `fmap` telle que `fmap :: Functor f => (a -> b) -> f a -> f b`. Cette définition est sûrement ambigüe, mais expliquons-là plus en détail afin d'en comprendre son fonctionnement.

En tout premier lieu, on demande à ce que la contrainte `Functor` soit respectée pour le type `f`. C'est-à-dire, que lorsque j'appelle `fmap` pour un certain type, ce dernier doit vérifier une certaine condition qui est qu'il doit instancier la classe `Functor`. Si cela ne vous paraît pas logique, ça l'est pourtant, en effet, comment notre fonction peut se débrouiller pour mapper sur quelque chose qui ne lui dit pas comment mapper ? Il faut que ce quelque chose lui indique la démarche à suivre afin de pouvoir mapper dessus.

Ensuite, on a la lambda `(a -> b)` qui est comme pour le map, quelque chose qui prend en entrée, la valeur qui est actuellement mappée et qui retourne une valeur nouvelle ou modifiée, sachant que là où différence est, est que le type de retour n'est pas forcément le même que celui d'entrée, ce qui fait que l'on peut mapper une liste d'entiers tout en retournant "n'importe quel autre type" comme un texte.

En dernier lieu, la définition la plus compliquée de notre lambda qui est `f a -> f b`. Eh bien, le `f` est le type sur lequel on souhaite mapper, cela peut être `List` (ou `[...]` du coup), mais aussi `Maybe`, le `a` ensuite signifie juste que le type `f` prend un constructeur de type concret `a`, comme `Maybe String`, `Maybe [Integer]`, `List (List Integer)` ou `[[Integer]]`. le `f b` signifie correspond juste à l'élément de type `f` une fois mappé.

Reprenons l'exemple de notre `map` plus haut : `fmap (\_ -> "test") [1..10]`. Dans cet exemple, notre type `f` est `List` ou encore `[...]` (les deux sont équivalents). Notre type concret `a` est `Integer` et notre type concret `b` est `String`. Ça nous donne donc une signature : `fmap :: (Integer -> String) -> List Integer -> List String` (donc initialement `fmap :: (a -> b) -> f a -> f b`). 

### Si jamais `fmap` n'avait pas existé
Imaginons le cas échéant dans lequel la fonction `fmap` n'aurait pas existé. Prenons une valeur quelconque de type `Maybe Integer` comme `Just 8` ou `None`. Comment aurais-je pu faire pour appliquer une fonction sur la valeur ? Il aurait donc fallu que je pattern match dessus pour ensuite retourner un nouveau `Maybe a`, sauf que cette méthode est bien trop longue dans le cas où nous devons effectuer plusieurs fois de suite cette action : 
```hs
addTwo :: Maybe Integer -> Maybe Integer
addTwo (Just x) = Just $ x + 2
addTwo None = None
```

Reconnaissez que devoir faire cela pour chaque action deviendrait vite encombrant et ambigu. Donc peut-être allez-vous me dire de généraliser l'action en la mettant sous la forme d'un callback, ce qui donnerait donc :
```hs
apply action (Just x) = Just $ action x
apply action None = None

addTwo x = apply (+2) x
```

Et bien, sans vous en rendre compte, vous venez en quelque sorte de réécrire la fonction `fmap`. En effet, on applique une fonction sur la valeur imbriquée dans un type et nous en retournons un nouveau avec la valeur modifiée. On peut donc réécrire cela de cette manière :

```hs
addTwo x = fmap (+2) x
-- ou : addTwo x = (+2) <$> x
-- ou pour les amoureux du pointfree : addTwo = fmap (+2)
```
Dans ce cas, `apply (+2) x` ⇔ `fmap (+2) x` et de manière plus générale dans le contexte de `Maybe`, `apply` ⇔ `fmap`.

### Implémentation de `Functor` pour  `Maybe`
Réimplémentons dès à présent la classe `Functor` pour notre constructeur `Maybe`. Rappelons que `Maybe` est défini :
```hs
data Maybe a = None | Just a
```
Et que la classe `Functor` est définie telle que :
```hs
class Functor f where ...
```

Donc si vous avez bien suivi, vous devriez savoir que le `f` correspond donc à notre constructeur de type, donc dans ce cas là, `Maybe`. Cela nous donne donc une base comme cela :
```hs
instance Functor Maybe where ...
```
> Mais pourquoi ne pas préciser le type ?

Tout bêtement parce que la classe n'attend qu'un constructeur et de manière générale parce qu'on ne veut pas forcément généraliser le concept de mapping à un seul type concret mais plutôt à un constructeur, ce qui nous permet ensuite de pouvoir mapper non pas uniquement sur un certain type concret mais sur n'importe lequel tant qu'il est paramètre du constructeur `f` en question.

Reprenons la signature de la fonction `fmap` afin de mieux pouvoir s'y retrouver : 
```hs
fmap :: (a -> b) -> f a -> f b
``` 
Nous devons donc créer une fonction qui doit pouvoir modifier le contenu du `Maybe` quelque soit son type. On va donc réutiliser principalement la fonction `apply` que nous avons déjà définie parce qu'il ne va être là question d'uniquement unwrap, appliquer puis rewrap. Ce qui nous donne le résultat suivant :

```hs
instance Functor Maybe where
  fmap :: (a -> b) -> Maybe a -> Maybe b
  fmap f (Just x) = Just (f x) -- ou Just $ f x
  fmap _ None = None  
```

> Pourquoi avoir mis `_` et non `f` comme au-dessus ?

Tout simplement parce qu'appliquer une fonction sur quelque chose qui n'est pas "défini" retourne forcément quelque chose d'autre qui n'est pas défini, donc nous pouvons omettre cette fonction.

**Implémentons dès à présent notre propre data puis sa propre implémentation de `Functor`.**
Nous allons définir le type suivant qui n'est ni plus ni moins qu'une liste chaînée : 
```hs
data List a = Nil | Cons a (List a)
```
Qui peut être d'ailleurs utilisé de cette manière :
```hs
Cons 5 (Cons 7 Nil)
```

Notre implémentation de `Functor` va donc résulter en mapper sur `Nil` ou sur `Cons a (List a)`, un bel exemple de récursivité mélangé aux foncteurs afin de bien s'imprégner du concept.

Donc afin d'instancier déjà, on va faire comme pour `Maybe` vu que le fonctionnement reste le même peu importe le constructeur : 
```hs
instance Functor List where
  fmap :: (a -> b) -> List a -> List b
```

Commençons par le plus simple en définissant le `fmap` sur `Nil`. `Nil` dans ce contexte, représente quelque chose de vide tout comme le `None` de  `Maybe`. Donc si on map quelque chose sur un `Nil`, le résultat en sera le même, c'est-à-dire `Nil` :
```hs
fmap _ Nil = Nil -- ou : fmap f Nil = Nil si vous avez du mal
```

Cependant, pour `Cons`, c'est tout de suite un peu plus compliqué à vue d'oeil. On pourrait se demander et chercher comment appliquer à la fois sur notre premier `a` puis ensuite rappliquer sur notre `List a`. Eh bien ne cherchez pas loin, lorsque je vous parlais de récursion, c'est justement le cas ici : 

Lorsqu'on doit map sur un `List a`, c'est comme si on devait de nouveau rappliquer un `fmap` avec la même action sur cette valeur. Donc si vous avez bien compris, il nous suffit d'appliquer de manière récursive le `fmap` sur le `List a` pour reconstruire totalement notre liste chaînée :

```hs
fmap f (Cons x xs) = Cons (f x) (fmap xs) 
-- On utilise le pattern matching et notre propre déclaration de fmap
-- x et xs sont des conventions de nommage
```

Donc pour résumer tout cette implémentation, ça nous donne :

```hs
instance Functor List where
  fmap _ Nil = Nil
  fmap f (Cons x xs) = Cons (f x) (fmap xs)
```

### Pour conclure
Comme nous avons pu le voir dans cet article, il faut retenir globalement deux points :
 - Le principe de foncteur en Haskell n'est qu'une généralisation du map rendue possible à tout type qui l'instancie
 - Pour implémenter un foncteur, il est important de regarder et de savoir comment on souhaite que la modification de notre type se passe :
   - A-t-il besoin d'être totalement reconstruit
   - A-t-il besoin de récursion
   - ...
