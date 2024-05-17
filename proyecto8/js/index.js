let formulario = document.getElementById('formulario');
    let formularioEditar = document.getElementById('formularioEditar');
    let nombre = document.getElementById('nombre');
    let fecha = document.getElementById('fecha');
    let descripcion = document.getElementById('descripcion');
    let foto = document.getElementById('foto');
    let video = document.getElementById('video');
    let cancion = document.getElementById('cancion');
    let nombreEditar = document.getElementById('nombreEditar');
    let fechaEditar = document.getElementById('fechaEditar');
    let descripcionEditar = document.getElementById('descripcionEditar');
    let fotoEditar = document.getElementById('fotoEditar');
    let videoEditar = document.getElementById('videoEditar');
    let cancionEditar = document.getElementById('cancionEditar');   
    let idTarea = document.getElementById('idTarea');
 
    let tareas = [
    {   
        nombre : "Josafat" ,
        fecha : "2023-12-31",
        descripcion : "Hola mundo",
        foto : "https://file-examples.com/storage/fe440f1b4566456eb99f751/2017/10/file_example_JPG_100kB.jpg",
        video : "https://file-examples.com/storage/fe440f1b4566456eb99f751/2017/04/file_example_MP4_480_1_5MG.mp4",
        audio : "https://file-examples.com/storage/fe440f1b4566456eb99f751/2017/11/file_example_MP3_700KB.mp3"
    },
    {   
        nombre : "Abraham" ,
        fecha : "2024-10-21",
        descripcion : "Hola mundo1",
        foto : "",
        video : "https://youtu.be/dzXPqtHaptU",
        audio : ""
    } ,
    {
        nombre : "Fer" ,
        fecha : "2025-12-27",
        descripcion : "Hola mundo2",
        foto : "",
        video : "https://youtu.be/dzXPqtHaptU",
        audio : ""
    }];
 
    let listaTareas = document.getElementById("listaTareas");
    let btnGuardar = document.getElementById('btnGuardar');
    let btnGuardarEditar = document.getElementById('btnGuardarEditar');
 
    function mostrarTareas(){
        listaTareas.innerHTML = "";
        tareas.forEach((tarea,indice) => {
            listaTareas.innerHTML += `
            <div class='row'>
                <div class='col-3 border p-3'>
                    <strong>${ tarea.nombre }</strong>
                </div>
                <div class='col-3 border p-3'>
                    <strong>${ tarea.fecha }</strong>
                </div>
                <div class='col-4 border p-3'>
                    <strong>${ tarea.descripcion }</strong>
                </div>
                <div class='col-4 border p-3 text-center'>
                    <img src="${ tarea.foto }" alt= imagen> class="imagen modificada"</img>
                </div>
                <div class='col-4 border p-3'>
                    <video controls>
                    <source src="${ tarea.video }" type="video/mp4">
                    </video>
                </div>
                <div class='col-4 border p-3'>
                    <audio controls>
                    <source src="${ tarea.audio }" type="audio/mp3">
                    </audio>
                </div>        
                <div class='col-1 border p-3 text-center'>
                    <button class='btn btn-success' data-bs-toggle="modal" data-bs-target="#editarTarea" onclick="editarTarea(${ indice })">Editar</button>
                </div>
                <div class='col-1 border p-3 text-center'>
                    <button class='btn btn-danger' onClick="borrarTarea(${ indice })">Borrar</button>
                </div>
            </div>
            `;
        });
    }
 
    mostrarTareas();
 
    let editarTarea = (indice) => {
        nombreEditar.value = tareas[indice].nombre;
        fechaEditar.value = tareas[indice].fecha;
        descripcionEditar.value = tareas[indice].descripcion;
        fotoEditar.value = tareas[indice].foto;
        videoEditar.value = tareas[indice].video;
        cancionEditar.value = tareas[indice].cancion;
        idTarea.value = indice;
    }
 
    formularioEditar.addEventListener("submit", (e)=>{
        e.preventDefault();
        let indice = idTarea.value;
        tareas[indice].nombre = nombreEditar.value;
        tareas[indice].fecha = fechaEditar.value;
        tareas[indice].descripcion = descripcionEditar.value;
        tareas[indice].foto = fotoEditar.value;
        tareas[indice].video = videoEditar.value;
        tareas[indice].cancion = cancionEditar.value;
        mostrarTareas();
        cerrarModalEditar();
    });
 
    let agregarDatos = ()=> {
        let datos = {
            nombre: nombre.value,
            fecha: fecha.value,
            descripcion: descripcion.value,
            foto : foto.value,
            video: video.value,
            cancion: cancion.value
        }
        tareas.push(datos);
        mostrarTareas();
    }
    
    let cerrarModal = ()=> {
        btnGuardar.setAttribute("data-bs-dismiss","modal");
        btnGuardar.click();
    }
 
    let cerrarModalEditar = ()=> {
        btnGuardarEditar.setAttribute("data-bs-dismiss","modal");
        btnGuardarEditar.click();
    }
 
    let borrarTarea = (indice)=> {
        tareas.splice(indice,1);
        console.log(tareas);
        mostrarTareas();
    }
 
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        agregarDatos();
        cerrarModal();
        formulario.reset();
    });
 
 