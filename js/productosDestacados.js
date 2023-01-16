class Producto {
  constructor(nombre, precio, imagen, id, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.id = id;
    this.cantidad = cantidad;
  }
}
let productoUno = new Producto(
  "Lomo",
  1250,
  "https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/l/o/lomo_2.jpg",
  1,
  1
);
let productoDos = new Producto(
  "Picaña",
  2600,
  "https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/p/i/pica_a_1.jpg",
  2,
  1
);
let productoTres = new Producto(
  "Paleta",
  1350,
  "https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/p/a/paleta_2.jpg",
  3,
  1
);
let productoCuatro = new Producto(
  "Peceto",
  2800,
  "https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/p/e/peceto_5.jpg",
  4,
  1
);

let baseDeDatos = [];

baseDeDatos.push(productoUno);
baseDeDatos.push(productoDos);
baseDeDatos.push(productoTres);
baseDeDatos.push(productoCuatro);
