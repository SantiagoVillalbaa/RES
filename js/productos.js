class Producto {
  constructor(nombre, precio, imagen, id, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.id = id;
    this.cantidad = cantidad;
  }
}

let productoCinco = new Producto(
  "Lomo",
  1250,
  "https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/l/o/lomo_2.jpg",
  5,
  1
);
let productoSeis = new Producto(
  "Picaña",
  2600,
  "https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/p/i/pica_a_1.jpg",
  6,
  1
);
let productoSiete = new Producto(
  "Paleta",
  1350,
  "https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/p/a/paleta_2.jpg",
  7,
  1
);
let productoOcho = new Producto(
  "Peceto",
  2800,
  "https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/p/e/peceto_5.jpg",
  8,
  1
);
let productoNueve = new Producto(
  "Matambre",
  1990,
  "https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/m/a/matambre_2.jpg",
  9,
  1
);

let productoDiez = new Producto(
  "Lomo",
  1250,
  "https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/l/o/lomo_2.jpg",
  10,
  1
);
let productoOnce = new Producto(
  "Picaña",
  2600,
  "https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/p/i/pica_a_1.jpg",
  11,
  1
);
let productoDoce = new Producto(
  "Paleta",
  1350,
  "https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/p/a/paleta_2.jpg",
  12,
  1
);
let productoTrece = new Producto(
  "Peceto",
  2800,
  "https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/p/e/peceto_5.jpg",
  13,
  1
);
let productoCatorce = new Producto(
  "Matambre",
  1990,
  "https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/m/a/matambre_2.jpg",
  14,
  1
);
let productoQuince = new Producto(
  "Peceto",
  2800,
  "https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/p/e/peceto_5.jpg",
  15,
  1
);
let productoDieciseis = new Producto(
  "Matambre",
  1990,
  "https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/m/a/matambre_2.jpg",
  16,
  1
);

let baseDeDatos = [];

baseDeDatos.push(productoCinco);
baseDeDatos.push(productoSeis);
baseDeDatos.push(productoSiete);
baseDeDatos.push(productoOcho);
baseDeDatos.push(productoNueve);
baseDeDatos.push(productoDiez);
baseDeDatos.push(productoOnce);
baseDeDatos.push(productoDoce);
baseDeDatos.push(productoTrece);
baseDeDatos.push(productoCatorce);
baseDeDatos.push(productoQuince);
baseDeDatos.push(productoDieciseis);
