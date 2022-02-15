import { order1_251, order251_1, orderByAz, orderByZa } from "./data.js";
import data from "./data/pokemon/pokemon.js";

/************AQUI SACAMOS IMAGENES ************************/
window.showPokemons = function showPokemons(pokemons) {
  //esta funcion almacena la vista de todos los pokemons
  const rootElement = document.getElementById("showData"); //esta variable ayuda a que la vista de los pokemons cambie de acuerdo a los datos que se desean ver
  removeChildNodes(rootElement); //ejecuta la funcion para eliminar sus hijos

  //esta variable va a almacenar la informacion de todos los pokemons

  for (let property of pokemons) {
    //bucle for accede a la data

    let identificador = "pokeCards"; //nombre de la clase
    let idDirection = "#" + `${property.name}`;
    let idSeccion = property.num;
    let modalDataOpen = "idModal"; //**********tal vez pueda ir en la seccion o en el num, ya que num es el id de cada iteracion

    const modalWindow = document.createElement("a");
    modalWindow.setAttribute("href", idDirection);

    const cardSpace = document.createElement("section"); //crea una sección
    cardSpace.setAttribute("class", identificador); //crea el atributo clase identificador='pokeCards'
    cardSpace.setAttribute("id", idSeccion);

    const cardName = document.createElement("p"); //crea el elemento parrafo
    cardName.innerHTML =
      "Pokémon: <br>" +
      `${property.name[0].toUpperCase() + property.name.slice(1)}`; // cambia el texto vacio del parrafo por la propiedad name convirtiendo la primera letra del array en mayuscula y concatenando desde la posicion 1 con slice

    const cardNum = document.createElement("p"); //crea el elemento parrafo
    cardNum.innerHTML = property.num; // cambia el texto vacio del parrafo por la propiedad numero

    const pokemonImag = document.createElement("img"); //crea un Elemento de tipó imagen
    pokemonImag.setAttribute("src", `${property.img}`); //le asigna el atributo de src con su propiedad que es el link
    pokemonImag.setAttribute("data-open", modalDataOpen);

    cardSpace.appendChild(pokemonImag); //cardSpace es el nodo padre y apokemonImag es el nodo hijo
    cardSpace.appendChild(cardName); //cardSpace es el nodo padre y cardName es el nodo hijo
    cardSpace.appendChild(cardNum); //cardSpace es el nodo padre y cardNumes el nodo hijo
    modalWindow.appendChild(cardSpace);

    document.getElementById("showData").appendChild(modalWindow); //show data es el nodo padre y cardSpace el nodo hijo.

    /***********mostrando ventana modal */

    let aboutPokemon = property.about;
    let resistantPokemon = property.resistant;
    let weaknessesPokemon = property.weaknesses;
    let typePokemon = property.type;

    const showModal = document.createElement("section");
    showModal.setAttribute("id", `${property.name}`);
    showModal.setAttribute("class", "modal");

    const allContent = document.createElement("article");
    allContent.setAttribute("id", "idModal");
    allContent.setAttribute("class", "modalDialog");

    const buttonModal = document.createElement("a");
    const textButton = document.createTextNode("X");
    buttonModal.appendChild(textButton);
    buttonModal.setAttribute("href", "#");
    buttonModal.setAttribute("class", "closeModal");
    buttonModal.setAttribute("id", "buttonModal");

    const contentTitle = document.createElement("h2");
    contentTitle.innerHTML = property.name.toUpperCase();
    contentTitle.setAttribute("class", "modalTitle");

    const contentImag = document.createElement("img"); //crea un Elemento de tipo imagen
    contentImag.setAttribute("src", `${property.img}`); //le asigna el atributo de src con su propiedad que es el link
    //pokemonImag.setAttribute("data-open", modalDataOpen);

    const contentAbout = document.createElement("p");
    contentAbout.innerHTML =
      " <strong>Datos: <br> </strong>" +
      " <strong> Descripción <br></strong>" +
      aboutPokemon +
      " <strong><br>Tipo: <br> </strong>" +
      typePokemon +
      " <strong><br>Resistencia: <br> </strong>" +
      resistantPokemon +
      " <strong><br>Debilidades:<br> </strong> " +
      weaknessesPokemon;

    allContent.appendChild(buttonModal);
    allContent.appendChild(contentTitle);
    allContent.appendChild(contentImag);
    allContent.appendChild(contentAbout);
    showModal.appendChild(allContent);
    document.getElementById("showData").appendChild(showModal);
  }
};

window.orderPokemons = function orderPokemons() {
  let optionSelected = document.getElementById("orderBy").value;
  let result = [];
  switch (optionSelected) {
    /*case "Pokedex":
      result = orderPokedex();
      break;*/
    case "1-251":
      result = order1_251();
      break;
    case "251-1":
      result = order251_1();
      break;
    case "AZ":
      result = orderByAz();
      break;
    case "ZA":
      result = orderByZa();
      break;
    default:
      console.log("esto no funciona");
  }
  showPokemons(result);
};

//funcion que elimine a los hijos para limpiar pag, esto cambia al seleccionar
function removeChildNodes(parent) {
  while (parent.firstChild) {
    //Condicion: mientras el parametro parent encuentre que tiene un hijo ejecuta el bucle
    parent.removeChild(parent.firstChild); // remueve/quita/elimina un hijo a parent(elimina el primer hijo)
  }
}

/*
HACER UN CONSOLE.LOG DE LA DATA            S
ACCDER A LOS 3 ELEMENTOS JUNTOS EN UNA MISMA FILA 
ACCEDER AL NUMERO  DE LA DATA              
ACCEDER AL NOMBRE IMAGEN DE LA DATA        
ACCEDER AL NOMBRE DE LA DATA               
MODIFICAR LA SECCIÓN PARA CREAR UNA LISTA 
 */

//crear variable que almacene id del input
//ligar un evento click para que ejecute una funcion
//crear variable que almacene los datos por id #pokemon
//crear la funcion con que los ordenes
//ligar lo que retorna de la funcion a lo que se ve en la interfaz
