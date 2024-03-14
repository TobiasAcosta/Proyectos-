export const productosDb = []; //creo array vacio

const recibirProductos = async () => {
  try {

    const dataBase = await fetch('../data.json');
    const productos = await dataBase.json();

    productos.forEach(item => {
      productosDb.push(item);
    })
  } catch (error) {
    console.error('Error de acceso a base de datos', error);
  }

}
  await recibirProductos();
  export const productos = [];
//se crea un  contructor
class Producto {
    constructor(nombre, categoria, imagen, precio) {
        this.id = productos.length + 1;
        this.nombre = nombre;
        this.categoria = categoria;
        this.imagen = imagen;
        this.precio = precio;
    }
};

productosDb.forEach(producto => {
    let newProducto = new Producto(producto.nombre,
                            producto.categoria,
                            producto.imagen,
                            producto.precio);
    productos.push(newProducto);
});
  
  //lo subimos al localstorage si es que existe o se crea uno y se sube 
  JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));