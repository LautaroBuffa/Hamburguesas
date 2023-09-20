
class Hamburguesa {
    constructor(imagen, titulo, precio) {
        this.imagen = imagen
        this.titulo = titulo
        this.precio = precio
    }
}
const hamburguesas=[]
generadorautomatico()
hamburguesasOpcion()
function generadorautomatico() {
    hamburguesas.push(new Hamburguesa("https://img.freepik.com/fotos-premium/hamburguesa-queso-lechuga-tomate-lechuga-encima_741910-27.jpg?w=2000","Completa","$2500"))
    hamburguesas.push(new Hamburguesa("https://img.freepik.com/fotos-premium/deliciosa-hamburguesa-carne-cruda-pan-tostado_919857-2314.jpg?w=2000","Champignon","$2500"))
    hamburguesas.push(new Hamburguesa("https://img.freepik.com/fotos-premium/hamburguesa-mucha-salsa_713562-388.jpg?w=2000","Mouzzarela","$2500"))
    hamburguesas.push(new Hamburguesa("https://img.freepik.com/fotos-premium/composicion-deliciosas-hamburguesas-papas-fritas_23-2148614112.jpg?w=2000","Bacon","$2500"))
}
function hamburguesasOpcion(){
    let opciones = document.getElementById("opciones")
    let hamburguesasAMostrar = hamburguesas
    for (let i = 0; i < hamburguesasAMostrar.length; i++) {
        let imagen = hamburguesasAMostrar[i].imagen;
        let titulo = hamburguesasAMostrar[i].titulo;
        let precio = hamburguesasAMostrar[i].precio;

    let opcioneshtml = `
    <div class="hamburguesasCard">
     <img class="imgHamburguesas" src="${imagen}">
     <h3 class="tituloHamburguesas">${titulo}</h3> 
     <h3 class="precioHamburguesas">${precio}</h3>
     <button class="buttonHamburguesas" data-imagen="${imagen}" data-titulo="${titulo}" data-precio="${precio}">Seleccionar</button>
    
   </div>"`
   opciones.innerHTML += opcioneshtml
}
}/*
const buttonSeleccionar = document.querySelector("buttonHamburguesas");
for (let i = 0; i < buttonSeleccionar.length; i++) {
    buttonSeleccionar[i].addEventListener("click", ()=>{
        alert ("jejejej")
    })
}
*/

let buttonSeleccionar = document.querySelector("buttonHamburguesas")
buttonSeleccionar.addEventListener ("click",function(){
    alert("alnsknsj")
})