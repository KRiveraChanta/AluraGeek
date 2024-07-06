const formulario = document.querySelector("[data-formulario]");

// Agrega un evento de escucha para limpiar el formulario
const botonLimpiar = document.getElementById("limpiarFormulario");
botonLimpiar.addEventListener("click", function() {
    // Obtén los campos del formulario y resetea sus valores
    document.querySelector("[data-nombre]").value = '';
    document.querySelector("[data-precio]").value = '';
    document.querySelector("[data-imagen]").value = '';
});
