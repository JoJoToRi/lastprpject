import data from "./data.js";
import dom from "./dom.js";
//trarer dato , para eso se crea una constante

const datos = await data.getData();
console.log(datos);
//console.log(newCard())

dom.showCard(datos);
// console.log(showCard);