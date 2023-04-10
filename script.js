let container = document.getElementById("Container")
let Tamano = 16
let Colores= ["blue","green","yellow","red","black"]
/*Creacion del tablaro para sketch
Se crean los div y luego se le agregan al container */
for ( let x = 0 ; x < Tamano * Tamano ; x++){
    let Div = document.createElement("div")
    Div.classList.add("Cubo")
    
    Div.style.backgroundColor = Colores[0]
    container.appendChild(Div)

}