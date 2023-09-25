
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
    hamburguesas.push(new Hamburguesa("https://i2.wp.com/veganista.es/wp-content/uploads/2018/04/1-01.jpeg?fit=1200%2C700&ssl=1","Champi","$2500"))
    hamburguesas.push(new Hamburguesa("https://selecciones.com.mx/wp-content/uploads/2020/09/hamburguesas-de-lentejas.jpg","Pollo","$2500"))
    hamburguesas.push(new Hamburguesa("https://www.masterpro-collection.com/sites/default/files/styles/receta_web/public/recetas/principales/CP-00067_0.jpg?itok=mbcvSvAv","Bacon","$2500"))
}
function hamburguesasOpcion(){
    let opciones = document.getElementById("opciones")
    opciones.innerHTML=""
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
const buttonsSeleccionar = document.querySelectorAll(".buttonHamburguesas");

for (let i = 0; i < buttonsSeleccionar.length; i++) {
    buttonsSeleccionar[i].addEventListener("click", () => {
        let opciones = document.getElementById("opciones");
        opciones.innerHTML=""
        const imagen = buttonsSeleccionar[i].getAttribute("data-imagen");
        const titulo = buttonsSeleccionar[i].getAttribute("data-titulo");
        const precio = buttonsSeleccionar[i].getAttribute("data-precio");
        let opcionhtml = `
        <div class="hamburguesasSeleccionado">
         <img class="imgHamburguesasSeleccionado" src=${imagen}>
         <h3 class="tituloHamburguesasSeleccionado">${titulo}</h3> 
         <h3 class="precioHamburguesasSeleccionado">${precio}</h3>
         <h4 class="detalle">Lechuga, tomate, chedar, bacon, cebolla caramelizada y salsa cangreburguer</h4>
         <button class="agregarAlCarrito" data-imagen="${imagen}" data-titulo="${titulo}" data-precio="${precio}">Agregar al carrito</button>
         <button class="atras">Atras</button>
        
       </div>"`
       opciones.innerHTML += opcionhtml

       const buttonAtras = document.querySelector(".atras");
       buttonAtras.addEventListener("click", () => {
           hamburguesasOpcion();
       });
       /* Agregar al Carrito */
       let carrito = []
       const buttonCarrito = document.querySelector(".agregarAlCarrito");
       buttonCarrito.addEventListener("click", (event) => {
        if (localStorage.getItem("carrito")){
            carrito = JSON.parse(localStorage.getItem("carrito"))
        }
        const imagen = event.target.getAttribute("data-imagen")
        const titulo = event.target.getAttribute("data-titulo")
        const precio = event.target.getAttribute("data-precio")
        class Producto {
            constructor(titulo, precio) {
                this.imagen = imagen
                this.titulo = titulo
                this.precio = precio
            }
        }
        carrito.push( new Producto (imagen, titulo, precio))
        alert("se ha agregado este producto al carrito, " + titulo)
        localStorage.setItem("carrito", JSON.stringify(carrito))
       }); 
    });
}