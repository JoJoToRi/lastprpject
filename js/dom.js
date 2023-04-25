

//crear las cards con una funcion for
//
const newEl =label1 =>document.createElement(label1);
const $ =miSelector=> document.querySelector(miSelector);

const newCard = (icard) => {
    const div = newEl("div")
    div.classname = "card col"
    div.innerHTML = 
    `
        <div class="img imgcard">
            <img class="h-100 w-100" src="${icard.flag}" alt="image">
        </div>
        <p>
            <span>${icard.name}</span>
            
        </p>
   
    `
    return div;
       
}

//crear nueva funcion para mostrar y 
const contenedorCardsa = $("#contenedorCards")
const showCard = paises =>{
    contenedorCardsa.innerHTML=" ";//limpiar el contenedor
    paises.forEach(pais => {
        const card = newCard(pais);
        //console.log(card)
       contenedorCardsa.appendChild(card)
       
        
    });
}



export default {
    newCard,
    showCard,
  }