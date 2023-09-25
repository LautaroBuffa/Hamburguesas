
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
    hamburguesas.push(new Hamburguesa("https://quadernillos.com/wp-content/uploads/2021/09/fitzgerald-1.jpg","Completa","$2500"))
    hamburguesas.push(new Hamburguesa("https://i2.wp.com/veganista.es/wp-content/uploads/2018/04/1-01.jpeg?fit=1200%2C700&ssl=1","Champignon","$2500"))
    hamburguesas.push(new Hamburguesa("https://selecciones.com.mx/wp-content/uploads/2020/09/hamburguesas-de-lentejas.jpg","Pollo","$2500"))
    hamburguesas.push(new Hamburguesa("https://www.masterpro-collection.com/sites/default/files/styles/receta_web/public/recetas/principales/CP-00067_0.jpg?itok=mbcvSvAv","Bacon","$2500"))
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
}
const buttonSeleccionar = document.querySelector("buttonHamburguesas");
for (let i = 0; i < buttonSeleccionar.length; i++) {
    buttonSeleccionar[i].addEventListener("click", ()=>{
        alert ("jejejej")
    })
}


/*let buttonSeleccionar = document.querySelector("buttonHamburguesas")
buttonSeleccionar.addEventListener ("click",function(){
    alert("alnsknsj")
})*/