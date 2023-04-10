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
        let num = Math.floor(Math.random()*4)
        switch (num){
            case 0:
            e.target.classList.add("color")
            break;
            case 1:
            e.target.classList.add("color1")
            break;
            case 2:
            e.target.classList.add("color2")
            break;
            case 3:
            e.target.classList.add("color3")
            break;
        }
        
    })
   
    container.appendChild(Div)

}