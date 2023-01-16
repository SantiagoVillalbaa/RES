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
  "Milanesa de Carne",
  1300,
  "https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/m/i/milanesas-carne.jpg",
  5,
  1
);
let productoSeis = new Producto(
  "Milanesa de Peceto",
  1800,
  "https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/m/i/milanesas-peceto.jpg",
  6,
  1
);
let productoSiete = new Producto(
  "Vacio",
  2400,
  "https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/v/a/vacio_2.jpg",
  7,
  1
);
let productoOcho = new Producto(
  "Tapa de Nalga",
  1390,
  "https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/t/a/tapa-de-nalga.jpg",
  8,
  1
);
let productoNueve = new Producto(
  "Nalga",
  1850,
  "https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/n/a/nalga_1.jpg",
  9,
  1
);

let productoDiez = new Producto(
  "Colita de Cuadril",
  2600,
  "https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/c/o/colita_4.jpg",
  10,
  1
);
let productoOnce = new Producto(
  "Osobuco",
  790,
  "https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/o/s/osobuco_1.jpg",
  11,
  1
);
let productoDoce = new Producto(
  "Riñonada de Cuadril",
  1850,
  "https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/r/i/ri_onada-de-cuadril.jpg",
  12,
  1
);
let productoTrece = new Producto(
  "Entraña",
  2990,
  "https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/e/n/entra_a_1.jpg",
  13,
  1
);
let productoCatorce = new Producto(
  "Ojo de Bife",
  2650,
  "https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/o/j/ojo-de-bife_1.jpg",
  14,
  1
);
let productoQuince = new Producto(
  "Rack Ojo de Bife",
  1990,
  "https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/r/a/rack-de-ojo-de-bife.jpg",
  15,
  1
);
let productoDieciseis = new Producto(
  "T-Bone",
  2650,
  "https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/t/-/t-bone.jpg",
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
