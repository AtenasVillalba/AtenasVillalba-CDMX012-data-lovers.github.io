# Data Lovers

## Índice

- [1. Preámbulo](#1-preámbulo)
- [2. Resumen del proyecto](#2-resumen-del-proyecto)
- [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
- [4. Consideraciones generales](#4-consideraciones-generales)
- [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
- [6. Hacker edition](#6-hacker-edition)
- [7. Consideraciones técnicas](#7-consideraciones-técnicas)
- [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)

---

## 1. Preámbulo

Según [Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read),
el 90% de la data que existe hoy ha sido creada durante los últimos dos años.
Cada día generamos 2.5 millones de terabytes de datos, una cifra sin
precedentes.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas
grandes cantidades de datos se conviertan en **información** fácil de leer para
los usuarios, necesitamos entender y procesar estos datos. Una manera simple de
hacerlo es creando _interfaces_ y _visualizaciones_.

En la siguiente imagen, podrás ver cómo con la data que que se ve en la parte
izquierda se puede construir una interfaz amigable y entendible por el usuario
al lado derecho.

![json-interfaz](https://lh4.googleusercontent.com/Tn-RPXS26pVvOTdUzRT1KVaJ-_QbFs9SpcGLxSPE43fgbHaXtFgMUInuDt7kV41DkT1j8Tt29V0LxQW7SMtC6digOIhfTXSBKdwI08wUwhD3RAqlwy0hjfmhZ2BFe91mtmCSEqysfgk)

## 2. Resumen del proyecto

En este proyecto **construirás una _página web_ para visualizar un
_conjunto (set) de datos_** que se adecúe a lo que descubras que tu usuario
necesita.

Como entregable final tendrás una página web que permita **visualizar la data,
filtrarla, ordenarla y hacer algún cálculo agregado**. Con cálculo agregado
nos referimos a distintos cálculos que puedes hacer con la data para mostrar
información aún más relevante para los usuarios (promedio, el valor máximo
o mínimo, etc).

Esta vez te proponemos una serie de datos de diferentes _temáticas_ para que
explores y decidas con qué temática te interesa trabajar. Hemos elegido
específicamente estos sets de datos porque creemos que se adecúan bien a esta
etapa de tu aprendizaje.

Una vez que definas tu área de interés, buscar entender quién es tu usuario
y qué necesita saber o ver exactamente; luego podrás construir la interfaz que
le ayude a interactuar y entender mejor esos datos.

Estos son datos que te proponemos:

- [Pokémon](src/data/pokemon/pokemon.json):
  En este set encontrarás una lista con los 251 Pokémon de la región de Kanto
  y Johto, junto con sus respectivas estadísticas usadas en el juego
  [Pokémon GO](http://pokemongolive.com).

  - [Investigación con jugadores de Pokémon Go](src/data/pokemon/README.md)

- [League of Legends - Challenger leaderboard](src/data/lol/lol.json):
  Este set de datos muestra la lista de campeones en una liga del
  juego League of Legends (LoL).

  - [Investigación con jugadores de LoL](src/data/lol/README.md)

- [Rick and Morty](src/data/rickandmorty/rickandmorty.json).
  Este set nos proporciona la lista de los personajes de la serie Rick and
  Morty.

  - [Investigación con seguidores de Rick and Morty](src/data/rickandmorty/README.md)

- [Juegos Olímpicos de Río de Janeiro](src/data/athletes/athletes.json).
  Este set nos proporciona la lista de los atletas que ganaron medallas en las
  olímpiadas de Río de Janeiro.

  - [Investigación con interesados en juegos olímpicos de Río de Janeiro](src/data/athletes/README.md)

- [Studio Ghibli](src/data/ghibli/ghibli.json).
  En este set encontrarás una lista de las animaciones y sus personajes del
  [Studio Ghibli](https://ghiblicollection.com/).
  - [Investigación con seguidores de las animaciones del Studio Ghibli](src/data/ghibli/README.md)

El objetivo principal de este proyecto es que aprendas a diseñar y construir una
interfaz web donde se pueda visualizar y manipular data, entendiendo lo que el
usuario necesita.

## 3. Objetivos de aprendizaje

Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### HTML

- [x] **Uso de HTML semántico**

    <details><summary>Links</summary><p>

  - [HTML semántico](https://curriculum.laboratoria.la/es/topics/html/02-html5/02-semantic-html)
  - [Semantics - MDN Web Docs Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
  </p></details>

### CSS

- [x] **Uso de selectores de CSS**

    <details><summary>Links</summary><p>

  - [Intro a CSS](https://curriculum.laboratoria.la/es/topics/css/01-css/01-intro-css)
  - [CSS Selectors - MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)
  </p></details>

- [x] **Modelo de caja (box model): borde, margen, padding**

    <details><summary>Links</summary><p>

  - [Box Model & Display](https://curriculum.laboratoria.la/es/topics/css/01-css/02-boxmodel-and-display)
  - [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  - [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  - [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
  </p></details>

- [x] **Uso de flexbox en CSS**

    <details><summary>Links</summary><p>

  - [A Complete Guide to Flexbox - CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  - [Flexbox Froggy](https://flexboxfroggy.com/#es)
  - [Flexbox - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
  </p></details>

### Web APIs

- [x] **Uso de selectores del DOM**

    <details><summary>Links</summary><p>

  - [Manipulación del DOM](https://curriculum.laboratoria.la/es/topics/browser/02-dom/03-1-dom-methods-selection)
  - [Introducción al DOM - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  - [Localizando elementos DOM usando selectores - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
  </p></details>

- [x] **Manejo de eventos del DOM (listeners, propagación, delegación)**

    <details><summary>Links</summary><p>

  - [Introducción a eventos - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events)
  - [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
  - [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/removeEventListener)
  - [El objeto Event](https://developer.mozilla.org/es/docs/Web/API/Event)
  </p></details>

- [x] **Manipulación dinámica del DOM**

    <details><summary>Links</summary><p>

  - [Introducción al DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  - [Node.appendChild() - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/appendChild)
  - [Document.createElement() - MDN](https://developer.mozilla.org/es/docs/Web/API/Document/createElement)
  - [Document.createTextNode()](https://developer.mozilla.org/es/docs/Web/API/Document/createTextNode)
  - [Element.innerHTML - MDN](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML)
  - [Node.textContent - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/textContent)
  </p></details>

### JavaScript

- [x] **Diferenciar entre tipos de datos primitivos y no primitivos**

- [x] **Arrays (arreglos)**

    <details><summary>Links</summary><p>

  - [Arreglos](https://curriculum.laboratoria.la/es/topics/javascript/04-arrays)
  - [Array - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/)
  - [Array.prototype.sort() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  - [Array.prototype.forEach() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  - [Array.prototype.map() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  - [Array.prototype.filter() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  - [Array.prototype.reduce() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
  </p></details>

- [x] **Objetos (key, value)**

    <details><summary>Links</summary><p>

  - [Objetos en JavaScript](https://curriculum.laboratoria.la/es/topics/javascript/05-objects/01-objects)
  </p></details>

- [x] **Variables (declaración, asignación, ámbito)**

    <details><summary>Links</summary><p>

  - [Valores, tipos de datos y operadores](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/01-values-variables-and-types)
  - [Variables](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/02-variables)
  </p></details>

- [x] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

    <details><summary>Links</summary><p>

  - [Estructuras condicionales y repetitivas](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/01-conditionals-and-loops)
  - [Tomando decisiones en tu código — condicionales - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals)
  </p></details>

- [x] **Uso de bucles/ciclos (while, for, for..of)**

    <details><summary>Links</summary><p>

  - [Bucles (Loops)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/02-loops)
  - [Bucles e iteración - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)
  </p></details>

- [x] **Funciones (params, args, return)**

    <details><summary>Links</summary><p>

  - [Funciones (control de flujo)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/03-functions)
  - [Funciones clásicas](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/01-classic)
  - [Arrow Functions](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/02-arrow)
  - [Funciones — bloques de código reutilizables - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions)
  </p></details>

- [-] **Pruebas unitarias (unit tests)**

    <details><summary>Links</summary><p>

  - [Empezando con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/getting-started)
  </p></details>

- [x] **Módulos de ECMAScript (ES Modules)**

    <details><summary>Links</summary><p>

  - [import - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import)
  - [export - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export)
  </p></details>

- [x] **Uso de linter (ESLINT)**

- [x] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

- [-] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

### Control de Versiones (Git y GitHub)

- [x] **Git: Instalación y configuración**

- [x] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [-] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [ ] **GitHub: Despliegue con GitHub Pages**

    <details><summary>Links</summary><p>

  - [Sitio oficial de GitHub Pages](https://pages.github.com/)
  </p></details>

- [ ] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

### user-centricity

- [x] **Diseñar un producto o servicio poniendo a la usuaria en el centro**

### product-design

- [x] **Crear prototipos de alta fidelidad que incluyan interacciones**

- [x] **Seguir los principios básicos de diseño visual**

### research

- [x] **Planear y ejecutar testeos de usabilidad de prototipos en distintos niveles de fidelidad**

## Criterios de aceptación mínimos del proyecto :)
Si deseas visualizar el producto final, lo puedes hacer accediendo a cualquiera de los siguientes links:
* https://atenasvillalba.github.io/CDMX012-data-lovers-Pokemon/

* https://monzerratbanuelos.github.io/CDMX012-data-lovers-Pokemon/


### Definición del producto

Nuestro proceso de diseño =>
Se basó directamente en las necesidades e inquietudes del usuario sobre la información y
datos que queria visualizar en nuestra interfaz, para poder recabar la información se realizó una investigación mediante un formulario, el cual puedes visualizar en el siguiente link:
(https://forms.gle/LZEnSEK8vwdLAENo7).

### Historias de usuario

HISTORIA DE USUARIO 1(POKÉDEX):
Yo como:Usuario

Quiero:Visualizar a los pokemones de acuerdo a los datos de la pokédex

Para:Observar todas las características de los Pokémon

CRITERIOS DE ACEPTACIÓN:
-El usuario puede acceder a una sección para la visualización general de los datos sobre Pokémon en orden establecido de la Pokédex
-El usuario tendrá acceso a la data de 251 Pokémon
-El usuario observera la información sin filtro aplicado

DEFINICIÓN DE TERMINADO:
-El código pasa el test
-El código es responsivo a diferentes aparatos/tamaños
-El código ha pasado el code-review
-El código ha sido subido al repositorio

HISTORIA DE USUARIO 2(CLASIFICACIÓN:TIPO):
Yo como:Usuario

Quiero:Visualizar a los Pokémon según su tipo

Para:conocer a qué tipo pertenece cada uno

CRITERIOS DE ACEPTACIÓN:
-El usuario tiene un botón donde se despliega la opción de clasificar por tipo
-El usuario puede seleccionar el tipo que quiere visualizar (agua, tierra, fuego,hierba, venenosos, rocosos, magnéticos, legendarios, etc.)
-El usuario tendrá acceso a todos los tipos de Pokémon de acuerdo a su clasificación
-El usuario tiene acceso a una serie de botones que divide a los Pokémon según sus tipos

DEFINICIÓN DE TERMINADO:
-El código pasa el test
-El código es responsivo a diferentes aparatos/tamaños
-El código ha pasado el code-review
-El código ha sido subido al repositorio

HISTORIA DE USUARIO 3(CLASIFICACIÓN:Buscador):
Yo como:Usuario

Quiero:Acceder únicamente a la información de un Pokémon a través de su nombre

Para:conocer sus datos

CRITERIOS DE ACEPTACIÓN:
-El usuario tiene una sección de búsqueda donde puede introducir el nombre completo de su Pokémon
-El usuario puede acceder a los pokemón que incluya el nombre introducido
-Si el usuario desconoce la forma correcta de escribir el nombre, podrá introducir valores incompletos para su búsqueda y así arrojar las opciones que coincidan con su búsqueda
-El usuario podrá ver el o los Pokémon´s deseados en pantalla
DEFINICIÓN DE TERMINADO:
-El código pasa el test
-El código es responsivo a diferentes aparatos/tamaños
-El código ha pasado el code-review
-El código ha sido subido al repositorio

HISTORIA DE USUARIO 4(CLASIFICACIÓN:Legendarios):
Yo como:Usuario

Quiero:Visualizar a los Pokémon según su rareza

Para:Diferenciarlos de los Pokémon normales

CRITERIOS DE ACEPTACIÓN:
-El usuario podrá acceder a un menú desplegable donde se le permita ver la clasificación de acuerdo a su rareza: Legendarios
-El usuario puede seleccionar la rareza que tienen legendario
-El usuario podrá visualizar el total de pokemones legendarios
DEFINICIÓN DE TERMINADO:
-El código pasa el test
-El código es responsivo a diferentes aparatos/tamaños
-El código ha pasado el code-review
-El código ha sido subido al repositorio

HISTORIA DE USUARIO 5(CLASIFICACIÓN:Estadística) :
Yo como:Usuario

Quiero:Visualizar las estadísticas(promedio) de un tipo de Pokémon

Para:conocer el promedio general por cada estadística de Puntos de ataque, puntos de defensa, puntos de stamina, puntos de combate y puntos de vida

CRITERIOS DE ACEPTACIÓN:
-El usuario podrá visualizar la información al clasificar por el tipo deseado
-Podrá ver el promedio general y acceder de manera individual en cada pokémon
-El usuario únicamente podrá visualizar esta información clasificando por tipo seleccionado
DEFINICIÓN DE TERMINADO:
-El código pasa el test
-El código es responsivo a diferentes aparatos/tamaños
-El código ha pasado el code-review
-El código ha sido subido al repositorio

### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad
Esta es la version de baja fidelidad que creamos para la versión de escritorio:

![PrototipoBajaFidelidad1](https://user-images.githubusercontent.com/97538997/156029953-053883f0-c78b-40cf-860c-8da9769a332b.jpg)
![PrototipoBajaFidelidad2](https://user-images.githubusercontent.com/97538997/156029970-1638595e-506e-425f-b213-b1210e0324e4.jpg)

Esta es la version de baja fidelidad que creamos para la versión de celular:
![PrototipoBajaFidelidad3](https://user-images.githubusercontent.com/97538997/156029978-d670b66f-7fe2-4d2c-a476-8a11b40f038e.jpg)

#### Prototipo de alta fidelidad

Nuestro prototipo de alta fidelidad para computadora podrá ser visualizado en el siguiente link:
(https://www.figma.com/proto/jpLJspNMvQj1zWbVYwiM6i/POKEMON-DATA-LOVERS?node-id=64%3A2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=64%3A2&show-proto-sidebar=1)

Nuestro prototipo de alta fidelidad para telefonos moviles podrá ser visualizado en el siguiente link:
(https://www.figma.com/proto/jpLJspNMvQj1zWbVYwiM6i/POKEMON-DATA-LOVERS?node-id=128%3A123&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=128%3A123&show-proto-sidebar=1)

#### Testeos de usabilidad

PROBLEMAS ENCONTRADOS EN BASE A LOS USUARIOS:
-Los colores:
A traves de un feedback de usuario nos dimos cuenta que la gama de colores utilizada no era amigable para el usuario, por lo que planteamos una nueva gama para mejorar la experiencia del usuario utilizando tonos mas amigables
-La letra: 
EL usuario comentó que los colores y tamaño de la letra utilizados no favorecian su experiencia en nuestra pagina debido a que era dificil de visualizarlos en ese formato, por lo cual realizamos cambios en su estructura mejorando el tipo de letra, el peso y sus tonos
-Imagen de fondo de la página:
El usuario comentó un desagrado con la repetición de la imagen de fondo, motivo por el cual decidimos modificarla y utilizar una imagen que se adecuara al tamaño del dispositivo en el cual se visualizara la interfaz 
-Responsive:
En un test de usabilidad nos dimos cuenta que para ciertos tamaños de dispositivos moviles la pagína no era responsiva, por lo cual establecimos un ancho predeterminado del @medi que posterior a ello, visualizamos nuestro interfaz desde diferentes dispositivos moviles así definiendo un ancho estandár que tuviera mayor adaptabilidad


PROBLEMAS ENCONTRADOS EN CÓDIGO:

-En nuestra función de ordenado de A-Z y Z-A, no era posible el testeo completo de lineas del codigo, lo cual hacía que nuestra branch disminuyera un 50%, causando inestabilidad en el código, entonces, la solución para el problema de testeo fue reescribir la estructura modificando la parte no testeable por algo que si lo fuera y nos permitiera saber el funcionamiento optimo para el proyecto 

-Al momento de testear las primeras funciones nos dimos cuenta que su formato en el que estaban escritas no era testeable debido a que estabamos accediendo a la data directamente, por lo cual, hicimos modificaciones para el acceso 

-Para mejorar el funcionamiento de respuesta a cada funcion redujimos dentro de una variable un objeto con unicamente 3 datos a testear para compararlo en los test en lugar de acceder a toda la data, esto gracias a los Mocks y a la creación de nuevos files.

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

1. Nuestro proyecto muestra la data en una interfaz amigable y de facil manejo
2. Nuestro proyecto permite al usuario interactuar para obtener la infomación que necesita.
3. Nuestro proyecto es responsive, es decir, puede visualizarse sin problemas desde distintos
   tipos de pantallas: móviles, tablets y desktops.
4. Nuestro proyecto sigue los fundamentos de visual design.

### Pruebas unitarias

Se escribieron pruebas unitarias que cumplen con el porcentaje solicitado por el proyecto:
![image](https://user-images.githubusercontent.com/97547777/156222405-108f3780-e457-4750-866d-ba40738bde33.png)

![image](https://user-images.githubusercontent.com/97547777/156222482-30d6cb57-6fab-4cb9-868a-94c44cb0466d.png)