

async function listaProductos(){
    const conexion = await fetch("http://localhost:3001/productos",{
        method:"GET",
        headers:{
        "Content-type":"application/json"
        }
    });
    
    const conexionConvertida=await conexion.json();

    return conexionConvertida;
}


async function crearProductos(nombre,precio,imagen){
    const conexion= await fetch("http://localhost:3001/productos",{
    method:"POST",
    headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify({
        nombre:nombre,
        precio:`s/. ${precio}`,
        imagen:imagen
    })
    })
    if(!conexion.ok){
        throw new Error("No fue posible enviar producto");
    }
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function eliminarProductos(id){
    
    const conexion= await fetch(`http://localhost:3001/productos/${id}`,{
        method:"DELETE",
        });
        
        if(!conexion.ok){
            throw new Error("No fue posible eliminar el producto");
        }

        const conexionConvertida = await conexion.json();
        return conexionConvertida;
        
}

export const conectaAPI={
    listaProductos,crearProductos,eliminarProductos
}