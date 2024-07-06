import { conectaAPI } from "./conectaAPI.js";

const formulario = document.querySelector("[data-formulario]");
//validaciones

async function crearProductos(evento){
    evento.preventDefault();
    
    const nombre=document.querySelector("[data-nombre]").value;
    const precio= document.querySelector("[data-precio]").value;
    const imagen= document.querySelector("[data-imagen]").value;

    try{
        await conectaAPI.crearProductos(nombre,precio,imagen)
        window.location.href="../index.html";
    }catch(error){
        alert(error);
    }
}

formulario.addEventListener("submit",evento=>crearProductos(evento));