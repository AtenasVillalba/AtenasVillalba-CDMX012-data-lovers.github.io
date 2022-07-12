# Data Lovers

<p align="center"><img src="https://img.wattpad.com/df3f9758d073059277c51ce61fd4816b513a592f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f75485830396e7a657565554c6d513d3d2d3830353831363938322e313564373934633033373066323061383239343030363138393736392e676966" width= 300px/> </p>

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Tecnologías](#2-tecnologías)
* [3. Prototipos ](#3-prototipos)
* [4. Historias de usuario ](#4-historias-de-usuario)
* [5. Test de usabilidad ](#5-test-de-usabilidad)
* [6. Vista de la intefaz.](#6-vista-de-la-interfaz)
* [7. Deploy.](#7-deploy)
* [8. Pruebas unitarias.](#8-pruebas-unitarias)
* [9.Creadoras.](8-creadoras)
---

## 1. Resumen del proyecto
Data lovers es una aplicación diseñada para la manipulacion de Base de datos con temática de Pokémon, en la cual es posible  filtrar, clasificar y ordenar los Pokémons de acuerdo a las opciones establecidas.

## 2. Tecnologías
<p align="left"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>
<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/></a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a><a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a><a href="https://jestjs.io" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="40" height="40"/> </a> <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a> </p>

## 3. Prototipos
Los prototipos fueron creados por medio de Figma.

### 3.1 Alta fidelidad.
Esta es la version de alta fidelidad que creamos:
<img width="708" alt="alta fidelidad" src="https://user-images.githubusercontent.com/97538997/178374078-6ac46495-e217-442c-b6e1-d722cda719c8.png">
<img width="287" alt="alta fidelidad 2" src="https://user-images.githubusercontent.com/97538997/178374084-4d1e2496-10c1-4499-9b48-603345f35044.png">

### 3.2 Baja fidelidad.
Esta es la version de baja fidelidad que creamos:

<img width="627" alt="destock" src="https://user-images.githubusercontent.com/97538997/178373739-3759af20-77ab-4fe4-8a5c-a20330255079.png">
<img width="305" alt="mobile first" src="https://user-images.githubusercontent.com/97538997/178373746-2f123b72-7a06-4832-8ecd-83a67708df6d.png">


## 4. Historias de usuario

Nuestro proceso de diseño se basó directamente en las necesidades e inquietudes del usuario sobre la información y
datos que queria visualizar en nuestra interfaz, para poder recabar la información se realizó una investigación mediante un formulario, el cual puedes visualizar en el siguiente link:
(https://forms.gle/LZEnSEK8vwdLAENo7).


### 4.1 HISTORIA DE USUARIO 1(POKÉDEX):
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

### 4.2 HISTORIA DE USUARIO 2(CLASIFICACIÓN:TIPO):
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

### 4.3 HISTORIA DE USUARIO 3(CLASIFICACIÓN:Buscador):
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

### 4.4 HISTORIA DE USUARIO 4(CLASIFICACIÓN:Legendarios):
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

### 4.5 HISTORIA DE USUARIO 5(CLASIFICACIÓN:Estadística) :
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


## 5. Test de usabilidad

### 5.1 PROBLEMAS ENCONTRADOS EN BASE A LOS USUARIOS:
-Los colores:
A traves de un feedback de usuario nos dimos cuenta que la gama de colores utilizada no era amigable para el usuario, por lo que planteamos una nueva gama para mejorar la experiencia del usuario utilizando tonos mas amigables
-La letra: 
EL usuario comentó que los colores y tamaño de la letra utilizados no favorecian su experiencia en nuestra pagina debido a que era dificil de visualizarlos en ese formato, por lo cual realizamos cambios en su estructura mejorando el tipo de letra, el peso y sus tonos
-Imagen de fondo de la página:
El usuario comentó un desagrado con la repetición de la imagen de fondo, motivo por el cual decidimos modificarla y utilizar una imagen que se adecuara al tamaño del dispositivo en el cual se visualizara la interfaz 
-Responsive:
En un test de usabilidad nos dimos cuenta que para ciertos tamaños de dispositivos moviles la pagína no era responsiva, por lo cual establecimos un ancho predeterminado del @medi que posterior a ello, visualizamos nuestro interfaz desde diferentes dispositivos moviles así definiendo un ancho estandár que tuviera mayor adaptabilidad


### 5.2 PROBLEMAS ENCONTRADOS EN CÓDIGO:

-En nuestra función de ordenado de A-Z y Z-A, no era posible el testeo completo de lineas del codigo, lo cual hacía que nuestra branch disminuyera un 50%, causando inestabilidad en el código, entonces, la solución para el problema de testeo fue reescribir la estructura modificando la parte no testeable por algo que si lo fuera y nos permitiera saber el funcionamiento optimo para el proyecto 

-Al momento de testear las primeras funciones nos dimos cuenta que su formato en el que estaban escritas no era testeable debido a que estabamos accediendo a la data directamente, por lo cual, hicimos modificaciones para el acceso 

-Para mejorar el funcionamiento de respuesta a cada funcion redujimos dentro de una variable un objeto con unicamente 3 datos a testear para compararlo en los test en lugar de acceder a toda la data, esto gracias a los Mocks y a la creación de nuevos files.

### 5.3 Implementación de la Interfaz de Usuario (HTML/CSS/JS)

1. Nuestro proyecto muestra la data en una interfaz amigable y de facil manejo
2. Nuestro proyecto permite al usuario interactuar para obtener la infomación que necesita.
3. Nuestro proyecto es responsive, es decir, puede visualizarse sin problemas desde distintos
   tipos de pantallas: móviles, tablets y desktops.
4. Nuestro proyecto sigue los fundamentos de visual design.


## 6. Vista de la interfaz

<img width="2261" alt="Interfaz data lovers" src="https://user-images.githubusercontent.com/97538997/178376064-5da9fe26-cc86-4f19-b599-bfd0e0acb6ff.png">
<img width="1069" alt="interfaz data lover 3" src="https://user-images.githubusercontent.com/97538997/178376076-49db75e0-3ddf-43f2-9ccb-098b8dbdb2f6.png">
<img width="2235" alt="Interfaz data lovers 2" src="https://user-images.githubusercontent.com/97538997/178376091-664a3488-1816-4d79-a1ce-7971911f663e.png">
<img width="1066" alt="interfaz data lover 4" src="https://user-images.githubusercontent.com/97538997/178376079-f8dcc843-820e-4756-ab19-de7db9cc3e4a.png">


## 7. Deploy
Si deseas visualizar el producto final, lo puedes hacer escogiendo  y dando click a cualquiera de los siguientes Pokémon:

 <p align="center">
<a href="https://atenasvillalba.github.io/CDMX012-data-lovers-Pokemon/"><img align="center" src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/2/24/latest/20211006053413/Charmander_%28dream_world%29_2.png/180px-Charmander_%28dream_world%29_2.png" alt="https://atenasvillalba.github.io/CDMX012-data-lovers-Pokemon/" width=200px  /></a> <a href="https://monzerratbanuelos.github.io/CDMX012-data-lovers-Pokemon/"><img align="center" src="https://i.pinimg.com/originals/3d/76/31/3d763132c30ac83eb777293699bf60a7.png" alt="https://monzerratbanuelos.github.io/CDMX012-data-lovers-Pokemon/" width=200px  /></a>
</p>


### 8. Pruebas unitarias

Se escribieron pruebas unitarias que cumplen con el porcentaje solicitado por el proyecto:
![image](https://user-images.githubusercontent.com/97547777/156222405-108f3780-e457-4750-866d-ba40738bde33.png)

![image](https://user-images.githubusercontent.com/97547777/156222482-30d6cb57-6fab-4cb9-868a-94c44cb0466d.png)

## 9. Authors

| Developers | Contact |
| ------------- | ------------- |
| Atenas Villalba| [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/atenas-villalba-764bb8235/) [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AtenasVillalba) |
| Monzerrat Bañuelos | [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/adriana-monzerrat-banuelos-godoy/) [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MonzerratBanuelos) |
