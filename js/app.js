

const divProductos = document.getElementById('productos');

document.addEventListener('DOMContentLoaded', () => {
    generarCards(productosDisponibles);
})

export let productosDisponibles = JSON.parse(localStorage.getItem('productos')); //toma el item del local storage y lo parsea

const generarCards = (productos) =>{
    productos.forEach( producto => {
        const {nombre, imagen, categoria, id, precio} = producto; //destructuring

        let card = document.createElement('div');
        card.className = 'producto';
        card.innerHTML = `
        <img class="img-producto" src="${imagen}" alt="imagen producto">
        <div class="info-producto">
            <h3 class="nombre-producto">${nombre}</h3>
            <p class="precio-producto">$${precio}</p>
            <button class="btn-agregar-producto">Agregar</button>
        </div>
        `;
        divProductos.appendChild(card); //se agrega

        // const btnComprar = document.getElementById(`comprar${id}`); //se llama al btn
        // btnComprar.addEventListener('click', () => comprar(id)); //event
    });
} 