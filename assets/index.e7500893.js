var D=Object.defineProperty,$=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var y=(t,a,l)=>a in t?D(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,u=(t,a)=>{for(var l in a||(a={}))k.call(a,l)&&y(t,l,a[l]);if(h)for(var l of h(a))j.call(a,l)&&y(t,l,a[l]);return t},p=(t,a)=>$(t,z(a));var E=(t,a)=>{var l={};for(var n in t)k.call(t,n)&&a.indexOf(n)<0&&(l[n]=t[n]);if(t!=null&&h)for(var n of h(t))a.indexOf(n)<0&&j.call(t,n)&&(l[n]=t[n]);return l};import{j as g,I as O,r as o,L as x,a as T,b as M,u as P,R as U,c as _,d as H,H as J,e as G,f as d}from"./vendor.ebc9230d.js";const K=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function l(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(s){if(s.ep)return;s.ep=!0;const c=l(s);fetch(s.href,c)}};K();const e=g.exports.jsx,r=g.exports.jsxs,f=g.exports.Fragment;function m(s){var c=s,{children:t,withIcon:a,black:l}=c,n=E(c,["children","withIcon","black"]);const i=a;return r("button",p(u({className:"group rounded-md w-full sm:w-auto py-2 px-8 flex items-center font-medium tracking-wide "+(l?"!bg-black text-white hover:shadow-xl transition-all duration-500":"border text-neutral-600")},n),{children:[e("span",{className:"mx-auto",children:t}),a&&e(i,{className:"text-white -ml-5 mt-0.5 opacity-0 group-hover:ml-2 group-hover:opacity-100 transition-all duration-100"})]}))}function Q(){return r("header",{className:"relative min-h-screen overflow-hidden flex items-center justify-center",children:[e("div",{className:"absolute w-full h-full grid-effect opacity-70"}),e("div",{className:"absolute -bottom-96 sm:-bottom-1/3 -left-1/3 -right-1/3 h-[35rem] bg-white blur-[3rem] sm:blur-[7rem] filter z-10"}),r("div",{className:"text-center px-8 z-10 children:bg-white children:mx-auto",children:[e("img",{className:"w-32 h-32 object-cover rounded-full mx-auto shadow-md",src:"https://cdn.discordapp.com/attachments/768087687655194675/949965497301106729/66BB0FC6-BA56-46CF-83BD-1305865FEBB8.jpg",alt:""}),e("h1",{className:"font-black text-6xl text-black pt-4",children:"thomas vergne"}),e("p",{className:"text-xl pt-2 pb-10 px-8 text-black text-opacity-60",children:"Concepteur et d\xE9veloppeur de langages de programmation"}),e(m,{black:!0,withIcon:O,children:"D\xE9couvrir mes travaux"})]})]})}const V="https://raw.githubusercontent.com/thomasvergne/thomasvergne.github.io/blog/articles/",X=".md",W="https://raw.githubusercontent.com/thomasvergne/portfolio-experiments/blog/routing.json",B=(t,a)=>window.localStorage.setItem(t,a),L=t=>R(t)!==null,R=t=>window.localStorage.getItem(t),S=async()=>{if(L("articles"))return JSON.parse(R("articles"));const a=await(await fetch(W)).json();return B("articles",JSON.stringify(a)),a};function I(t=a=>a){const[a,l]=o.exports.useState(null),[n,s]=o.exports.useState(!1);return o.exports.useEffect(async()=>{s(!0);const c=await S();l(await t(c)),s(!1)},[]),{articles:a,loading:n}}const b=({children:t})=>r("h2",{className:"font-black justify-center sm:justify-start text-4xl sm:text-5xl text-black flex items-center",children:[t,e("span",{className:"hidden sm:block h-0.5 flex-auto mt-2 ml-16 bg-black opacity-10"})]}),C=({children:t})=>e("h3",{className:"font-black text-xl text-black",children:t}),q=({children:t})=>e("p",{className:"text-lg text-black text-opacity-60",children:t});var Y=[{name:"Quark language",description:"Un langage de programmation bas\xE9 sur le Lisp faiblement et statiquement typ\xE9. Il compile en bytecode pour \xEAtre ensuite interpr\xE9t\xE9 sous une machine virtuelle.",image:"https://github.com/quark-lang/quark/raw/master/assets/logo.png",link:"https://quark-lang.dev/",code:"https://raw.githubusercontent.com/quark-lang/quark/master/tests/facto.qrk"},{name:"Lambda language",description:"Un langage de programmation ayant comme vis\xE9e de davantage int\xE9grer de concepts et outils math\xE9matiques de mani\xE8re explicite en informatique. Il est dot\xE9 d'un puissant syst\xE8me de types disponible \xE0 plusieurs abstractions.",image:"https://raw.githubusercontent.com/lambda-language/.github/main/logo.png",link:"https://github.com/lambda-language",code:"https://raw.githubusercontent.com/lambda-language/specification/main/examples/factorial.lambda"}];function Z(){return r("section",{className:"p-16 px-8 sm:px-16 pt-0 container 2xl:w-2/3 mx-auto",children:[e(b,{children:"mes travaux"}),e("div",{className:"divide-y space-y-16 children:pt-16",children:Y.map((t,a)=>e(ee,{project:t},a))})]})}function ee({project:t}){const{name:a,description:l,image:n,link:s,date:c,code:i}=t,[F,N]=o.exports.useState(null);return o.exports.useEffect(async()=>{if(L(i))return N(window.localStorage.getItem(i));const v=await(await fetch(i)).text();B(i,v),N(v)},[]),e("article",{children:r("div",{className:"grid lg:grid-cols-6 gap-8",children:[e("div",{className:"col-span-6 lg:col-span-1 flex items-center justify-center",children:e("img",{src:n,className:"w-24 h-24 rounded-lg shadow-md",alt:""})}),e("div",{className:"col-span-6 lg:col-span-5 flex items-center justify-center",children:r("div",{className:"text-center lg:text-left",children:[e(C,{children:a}),e(q,{children:l})]})}),r("div",{className:"col-span-6 lg:col-span-5 lg:col-start-2",children:[e("code",{children:e("pre",{className:"max-h-64 whitespace-pre-wrap overflow-auto bg-gray-50 p-4 rounded-xl border font-mono text-neutral-700",children:F})}),r("div",{className:"flex gap-4 mt-4 flex-col md:flex-row justify-center lg:justify-start",children:[e(m,{black:!0,onClick:()=>window.open(s,"_blank"),children:"Explorer le projet"}),e(m,{onClick:()=>alert("Not implemented yet!"),children:"En savoir plus"})]})]})]})})}function te(){const[t,a]=o.exports.useState(null);return o.exports.useEffect(async()=>a(await S()),[]),r("section",{className:"pt-16 px-8 sm:px-16 container 2xl:w-2/3 mx-auto",children:[e(b,{children:"mes articles"}),e("div",{className:"gap-8 gap-y-16 sm:gap-y-8 mt-16 flex flex-wrap children:w-full lg:children:w-[calc(50%-1rem)]",children:t&&t.articles.slice(0,2).map((l,n)=>o.exports.createElement(A,p(u({},l),{key:n})))}),t&&t.articles.length>2&&e("div",{className:"pt-16 flex justify-center",children:e(x,{to:"/blog",className:"inline-block w-max",children:e(m,{children:"En d\xE9couvrir davantage"})})})]})}function A({date:t,description:a,title:l,slug:n,image:s}){return r("article",{id:n,className:"group",children:[e("img",{src:s,className:"grayscale transition-all duration-500 group-hover:grayscale-0 w-full h-64 object-cover rounded-xl shadow",alt:""}),r("div",{className:"py-6 min-h-[8rem]",children:[e(C,{children:l}),e(q,{children:a})]}),r("div",{className:"flex flex-col md:flex-row",children:[e(x,{to:`/blog/${n}`,children:e(m,{black:!0,children:"Lire l'article"})}),r("span",{className:"flex justify-center mb-2 md:mb-0 md:justify-end flex-auto items-center text-neutral-500 order-first md:order-last",children:["R\xE9dig\xE9 le ",e("span",{className:"font-medium ml-1 text-neutral-700",children:new Date(t).toLocaleDateString()})]})]})]})}function ae(){return r(f,{children:[e(Q,{}),e(Z,{}),e(te,{})]})}function w(){return r("nav",{className:"container mx-auto p-8 md:px-0 md:pt-16 flex flex-col md:flex-row items-center 2xl:w-2/3",children:[r("div",{className:"flex flex-initial flex-col md:flex-row items-center text-center md:text-left",children:[e("img",{className:"w-20 h-20 object-cover rounded-full shadow-md",src:"https://cdn.discordapp.com/attachments/768087687655194675/949965497301106729/66BB0FC6-BA56-46CF-83BD-1305865FEBB8.jpg",alt:""}),r("div",{className:"flex flex-col md:ml-4 justify-center",children:[e("h1",{className:"font-black text-2xl text-black",children:"thomas vergne"}),e(x,{to:"/",className:"text-lg -mt-1 text-neutral-500 hover:underline underline-offset-1",children:"Retourner \xE0 la page d'accueil"})]})]}),e("div",{className:"flex flex-auto mt-8 md:mt-0 justify-end",children:r("ul",{className:"flex gap-x-8 children:text-5xl",children:[e("a",{href:"https://github.com/thomasvergne",target:"_blank",children:e(T,{size:30})}),e(M,{size:30})]})})]})}function le(){const{loading:t,articles:a}=I(l=>l.articles);return r(f,{children:[e(w,{}),r("section",{id:"blog-list",className:"container 2xl:w-2/3 mx-auto pt-32",children:[e(b,{children:"mes articles"}),e("div",{className:"flex flex-wrap gap-8 children:w-[calc(50%-1rem)] mt-8",children:!t&&a&&a.map((l,n)=>e(A,u({},l),n))})]})]})}function re(t){const a=t.replace(/\s+/g,"").replace(/```.*?```/g,"").replace(/\#\*/g,"").trim(),l=300/60,n=a.length/l,s=(~~(n/60)+"").padStart(2,"0"),c=(~~(n/60%1*60)+"").padStart(2,"0");return`${s} ${s>0?"minutes":"minute"} et ${c} ${c>0?"secondes":"seconde"}`}function ne(){const{slug:t}=P(),{loading:a,articles:l}=I(async function({articles:n}){const s=n.find(i=>i.slug===t),c=await(await fetch(V+s.slug+X)).text();return document.title=`Thomas Vergne - ${s.title}`,p(u({},s),{content:c})});return r(f,{children:[e(w,{}),!a&&l&&r("section",{id:"article-page",className:"container 2xl:w-2/3 mx-auto pt-16 md:pt-32",children:[e("img",{src:l.image,className:"h-64 w-full object-cover md:rounded-xl",alt:""}),r("div",{className:"flex flex-col md:flex-row items-center my-8 px-8 md:px-0",children:[r("div",{className:"flex-auto text-center md:text-left flex flex-col mt-4 md:mt-0",children:[r("span",{className:"italic text-neutral-500",children:[re(l.content)," de lecture"]}),e("h1",{className:"font-black text-3xl text-black",children:l.title})]}),r("div",{className:"flex flex-col md:flex-row justify-center order-first md:order-last items-center md:justify-end",children:[e("div",{className:"md:mr-4 text-center md:text-right",children:r("p",{className:"text-lg text-neutral-500 leading-5",children:[l.author,e("br",{}),"R\xE9dig\xE9 le ",e("span",{className:"text-neutral-700 font-medium",children:new Date(l.date).toLocaleDateString()})]})}),e("img",{src:`https://github.com/${l.author}.png`,className:"w-16 rounded-full h-16 shadow order-first md:order-last mb-4 md:mb-0",alt:""})]})]}),e("div",{id:"article",className:"px-8 md:px-0",children:e(U,{children:l.content})})]})]})}function se(){return r(f,{children:[e(w,{}),r("section",{id:"error-page",className:"container 2xl:w-2/3 mx-auto pt-32 text-center",children:[e("h1",{className:"font-black text-6xl text-black pt-4",children:"erreur"}),r("p",{className:"text-xl w-1/2 text-black text-opacity-60 mx-auto mt-4",children:["La page demand\xE9e n'a pas \xE9t\xE9 trouv\xE9e ! Si vous pensez qu'il s'agit d'un bug, veuillez ",e("a",{href:"mailto:thomas.vergne@hotmail.com",className:"text-blue-500 hover:underline",children:"me contacter"})]}),e(x,{to:"/",className:"children:mx-auto mt-8 inline-block",children:e(m,{children:"Retourner en lieu s\xFBr"})})]})]})}_.render(e(H.StrictMode,{children:r(J,{children:[r(G,{children:[r(d,{path:"/",children:[e(d,{index:!0,element:e(ae,{})}),r(d,{path:"blog",children:[e(d,{index:!0,element:e(le,{})}),e(d,{path:":slug",element:e(ne,{})})]})]}),e(d,{path:"*",element:e(se,{})})]}),r("footer",{className:"h-[750px] relative overflow-hidden",children:[e("div",{className:"absolute w-full h-full grid-effect opacity-50"}),e("div",{className:"absolute -top-96 sm:-top-1/3 -left-1/3 -right-1/3 h-[35rem] bg-white blur-[3rem] sm:blur-[7rem] filter z-10"})]})]})}),document.getElementById("root"));