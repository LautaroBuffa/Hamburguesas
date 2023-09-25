function recuperoCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito"))
    let productos = document.getElementById("productos")
    carrito.forEach(producto => {
        let fila = `
        <div class="hamburguesasSeleccionado">
         <img class="imgHamburguesasSeleccionado" src=${imagen}>
         <h3 class="tituloHamburguesasSeleccionado">${titulo}</h3> 
         <h3 class="precioHamburguesasSeleccionado">${precio}</h3>
        </div>"`
         productos.innerHTML += fila
    })
}
recuperoCarrito ()