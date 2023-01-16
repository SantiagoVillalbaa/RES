// Declaro mis variables
const productosDestacados = document.getElementById("productosDestacados");
const verCarrito = document.getElementById("verCarrito");
const modalCarrito = document.getElementById("modalCarrito");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

baseDeDatos.forEach((product) => {
  let cards = document.createElement("div");
  cards.innerHTML = `
    <div class='card'>
      <img src="${product.imagen}" class="card-img-top imgCards"  alt="...">
      <h3>${product.nombre}</h3>
      <p>Precio: $${product.precio}</p>
    </div>
  `;

  // aca genero mis cards
  productosDestacados.append(cards);

  // genero mi boton de comprar y funcionalidad
  let comprar = document.createElement("button");
  comprar.innerText = "Comprar";
  comprar.className = "botonComprar";
  cards.append(comprar);

  // pusheo lo que se va a ver cuando se da click en el carrito
  comprar.addEventListener("click", () => {
    // si ya hay 1 producto se suma la cantidad
    const repeat = carrito.some(
      (repeatProduct) => repeatProduct.id === product.id
    );
    if (repeat === true) {
      carrito.map((prod) => {
        if (prod.id === product.id) {
          prod.cantidad++;
        }
      });
    } else {
      carrito.push({
        id: product.id,
        imagen: product.imagen,
        nombre: product.nombre,
        precio: product.precio,
        cantidad: product.cantidad,
      });
    }
    console.log(carrito);
    saveLocal();
    Toastify({
      text: `${product.nombre} fue agregado al carrito`,
      duration: 1000,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "red",
        color: "black",
      },
      onClick: function () {},
    }).showToast();
  });
});

// local storage
// set item
const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

// get item
// lo pongo en el LET CARRITO para que sea lo que esta en el local storage y si no []
