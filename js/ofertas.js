class Producto {
  constructor(nombre, precio, imagen, id, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.id = id;
    this.cantidad = cantidad;
  }
}
let productoDiecisiete = new Producto(
  "Combo Asado L",
  15700,
  "https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/a/s/asado_clasico_l.jpg",
  17,
  1
);
let productoDieciocho = new Producto(
  "Combo Pollo L",
  6650,
  "https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/p/o/pollo_l_1.jpg",
  18,
  1
);
let productoDiecinueve = new Producto(
  "Combo Pollo M",
  4450,
  "https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/p/o/pollo_m.jpg",
  19,
  1
);
let productoVeinte = new Producto(
  "Combo Asado S",
  8300,
  "https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/a/s/asado-clasico.jpg",
  20,
  1
);
let productoVentiUno = new Producto(
  "Combo Mix",
  6590,
  "https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/a/s/asc_3783_m.jpg",
  21,
  1
);
let productoVentiDos = new Producto(
  "Combo Bifes",
  6100,
  "https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/a/s/asc_3788_m.jpg",
  22,
  1
);
let productoVentiTres = new Producto(
  "Combo Semanal M",
  6100,
  "https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/c/o/combo-2.jpg",
  23,
  1
);
let productoVentiCuatro = new Producto(
  "Combo Semanal L",
  6100,
  "https://www.res.com.ar/media/catalog/product/cache/fa1c797dc73bed0459232d1404671b73/c/o/combo-3.jpg",
  24,
  1
);

let baseDeDatos = [];

baseDeDatos.push(productoDiecisiete);
baseDeDatos.push(productoDieciocho);
baseDeDatos.push(productoDiecinueve);
baseDeDatos.push(productoVeinte);
baseDeDatos.push(productoVentiUno);
baseDeDatos.push(productoVentiDos);
baseDeDatos.push(productoVentiTres);
baseDeDatos.push(productoVentiCuatro);
