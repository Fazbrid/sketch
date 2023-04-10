let container = document.getElementById("Container")
let Tamano = parseInt(prompt("Ingrese la dimension de cuadro"))

/*En esta linea se cambia el tamano maximo de la grilla */
container.style.gridTemplate = `repeat(${Tamano}, 1fr) / repeat(${Tamano}, 1fr)`;
let Colores= ["blue","green","yellow","red","black"]
/*Creacion del tablaro para sket z */
for ( let x = 0 ; x < Tamano * Tamano ; x++){
    let Div = document.createElement("div")
    Div.classList.add("Cubo")
    Div.addEventListener('mouseover',(e) => {
        e.target.classList.add("color")
    })
   
    container.appendChild(Div)

}