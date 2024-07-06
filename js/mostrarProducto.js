import { conectaAPI } from "./conectaAPI.js";

const lista = document.querySelector("[data-lista]");

//validaciones

export default function construyeCard(nombre, precio, imagen,id) {
  const productos = document.createElement("li");
  productos.className = "Productos__item";

  productos.innerHTML = `
        <div class="card" style="width: 12rem;">
            <img src="${imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <div class="contenedor_card">
                    <p class="card-text">${precio}</p>
                    <img src="../img/icons8-basura-30.png" class="btn_card" data-remove="true" data-id="${id}">
                </div>
            </div>
        </div>
        `;

  return productos;
}

// Función para manejar el clic en la imagen de cada tarjeta de producto
function handleClick(event) {
  const imagen = event.target;

  if (imagen.classList.contains('btn_card')) {
    const itemId = imagen.dataset.id; // Convertir a entero
    console.log(`Clic en el botón de eliminar del producto con ID ${itemId}`);
    conectaAPI.eliminarProductos(itemId)
      .then(resultado => {
        console.log("Producto eliminado correctamente", resultado);
        // Aquí puedes realizar acciones adicionales después de eliminar el producto, como actualizar la interfaz
      })
      .catch(error => {
        console.error("Error al eliminar producto", error);
        // Manejar el error adecuadamente, mostrando un mensaje al usuario o realizando otras acciones según sea necesario
      });
  }
}


// Agregar evento de clic usando delegación en el contenedor lista
lista.addEventListener('click', handleClick);

async function listaProductos() {
  try {
    const listaAPI = await conectaAPI.listaProductos();
    listaAPI.forEach((element) =>
      lista.appendChild(
        construyeCard(element.nombre, element.precio, element.imagen,element.id)
      )
    );
  } catch {
    lista.innerHTML = `<h2 class="mensaje__nombre">No fue posible cargar la lista de Productos</h2>`;
  }
}

listaProductos();
    