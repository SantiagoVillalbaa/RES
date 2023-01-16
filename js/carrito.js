// creando como se va a ver mi carrito
const pintarCarrito = () => {
  // para que no se repita lo que hay en el carrito
  modalCarrito.innerHTML = "";
  modalCarrito.style.display = "flex";

  // creando mi  "header" del carrito
  const modalHeader = document.createElement("div");
  modalHeader.className = "modalHeader";
  modalHeader.innerHTML = `
      <h1 class= 'modalTitulo'>Carrito</h1>
    `;
  // aca genero mi modal "header"
  modalCarrito.append(modalHeader);

  // genero mi boton de cerrar
  const modalButton = document.createElement("h1");
  modalButton.innerText = "x";
  modalButton.className = "modalButton";

  // para que cuando toque el boton se cierre
  modalButton.addEventListener("click", () => {
    modalCarrito.style.display = "none";
  });

  modalHeader.append(modalButton);

  // creando mi 'body' del carrito
  carrito.forEach((product) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modalContent";
    carritoContent.innerHTML = `
        <img src="${product.imagen}"/>
        <h3>${product.nombre}</h3>
        <p>$${product.precio}</p>
        <span class="restar"> - </span>
        <p>Cantidad: ${product.cantidad}</p>
        <span class="sumar"> + </span>
        <p>Total: $ ${product.cantidad * product.precio}</p>
        <span class = "eliminar"><i class="fa-solid fa-trash eliminarProducto"></i></span>
      `;

    modalCarrito.append(carritoContent);

    // sumar y restar cantidades
    let restar = carritoContent.querySelector(".restar");
    restar.addEventListener("click", () => {
      if (product.cantidad !== 1) {
        product.cantidad--; // igual que - 1
      }
      saveLocal(); // lo guardamos en el local
      pintarCarrito(); // volvemos a llamar a la funcion asi se actualiza
    });

    let sumar = carritoContent.querySelector(".sumar");
    sumar.addEventListener("click", () => {
      product.cantidad++; // igual que +1
      saveLocal(); // lo guardamos en el local
      pintarCarrito();
    });

    // creando boton eliminar
    let eliminar = carritoContent.querySelector(".eliminar");
    eliminar.addEventListener("click", () => {
      // llamo a mi funcion eliminar
      eliminarProducto(product.id);
    });
  });

  // creando mi 'footer' del carrito osea el total
  const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

  const totalComprado = document.createElement("div");
  totalComprado.className = "totalComprado";
  totalComprado.innerHTML = ` Total a pagar: $${total}
    `;

  modalCarrito.append(totalComprado);
};

// que pasa cuando se da click al carrito
verCarrito.addEventListener("click", pintarCarrito);

// creando funcion para que funcion el boton de eliminar producto
const eliminarProducto = (id) => {
  const foundId = carrito.find((element) => element.id === id);

  carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;
  });

  /* carritoContador(); */
  // para que se actualice el carrito
  saveLocal();
  pintarCarrito();
};

/* // cantidad de carrito
const carritoContador = () => {
  cantidadCarrito.style.display = "block";

  // guardo el contador de carrito en el local storage
  const carritoLength = carrito.length;

  localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

  cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};
carritoContador(); */
