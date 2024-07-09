import { tareas } from './data_todo.js';

function cargar_tareas() {
    let cuadro_de_tareas = document.querySelector(".lista_tareas");

    tareas.forEach((cada_tarea) => {
        let div_tarea = document.createElement("div");
        div_tarea.classList.add("div_tareas");

        if (cada_tarea.estado) {
            div_tarea.innerHTML = `
            <div class="caja_modal">
                <div class="caja_registro">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqVg_URh9Mvrm3NYaTlCUyiM7r382ohELc1g&s" alt="" class="imagen_icono">
                    <div class="c1">
                        <p class="texto">${cada_tarea.texto}</p>
                        <p class="texto1">${cada_tarea.texto}</p>
                    </div>
                </div>
                <div class="asignaciones"></div> <!-- Aquí se insertarán las asignaciones -->
                <p class="btn_asignacion"> + </p>
                <div class="estado"></div>
            </div>
            `;
        } else {
            div_tarea.innerHTML = `
            <p class="texto">${cada_tarea.texto}</p>
            <div class="estado">[X]</div>
        `;
        }
        cuadro_de_tareas.appendChild(div_tarea);
    });

    // Agregar manejador de eventos a todos los botones de asignación
    let botones_asignacion = document.querySelectorAll('.btn_asignacion');
    botones_asignacion.forEach(boton => {
        boton.addEventListener('click', abrir_modal2);
    });
}
cargar_tareas();

function cargar_botones() {
    let caja_btn = document.querySelector(".botones");

    caja_btn.innerHTML = `<div class="btn_mas">Agregar Nuevo Usuario</div>`;
}
cargar_botones();

function cargar_formulario() {
    let ventana_formulario = document.querySelector(".formulario");
    ventana_formulario.classList.add("activar_b");
    ventana_formulario.innerHTML = `
        <div class="div_controles">
            <div class="btn_cerrar">X</div>
        </div>

        <div class="div_formulario">
            <h1>Registro</h1>
            <span>Nombre:</span>
            <input type="text" class="entrada-tarea">
            <samp>Correo:</samp>
            <input type="email" class="entrada-tarea1">
        </div>

        <div class="btn-crear">Enviar</div>
    `;

    let btn_cerrar2 = document.querySelector(".btn_cerrar");
    btn_cerrar2.addEventListener("click", () => {
        ventana_formulario.classList.remove("activar_b");
    });

    let btn_crear = document.querySelector(".btn-crear");
    btn_crear.addEventListener("click", () => {
        let tarea = document.querySelector(".entrada-tarea").value;
        let estructura_de_tarea = {
            estado: true,
            id: tarea,
            texto: tarea,
        };

        tareas.push(estructura_de_tarea);
        let cuadro_de_tareas = document.querySelector(".lista_tareas");
        cuadro_de_tareas.innerHTML = "";
        cargar_tareas();
        ventana_formulario.classList.remove("activar_b");
    });
}

let btn_formulario = document.querySelector(".btn_mas");
btn_formulario.addEventListener("click", cargar_formulario);

// Funciones para abrir y cerrar la segunda ventana modal
const modal2 = document.getElementById('modal2');
const closeModal2 = document.getElementById('closeModal2');
let currentAsignacionDiv = null;

function abrir_modal2(event) {
    modal2.style.display = 'block';
    currentAsignacionDiv = event.target.parentElement.querySelector('.estado'); // Div de asignaciones dentro de la caja_modal
}

closeModal2.addEventListener('click', () => {
    modal2.style.display = 'none';
    currentAsignacionDiv = null;
});

window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = 'none';
        currentAsignacionDiv = null;
    }
};

document.getElementById('agregarAsignacion').addEventListener('click', () => {
    const asignacion = document.getElementById('asignacion').value;
    if (currentAsignacionDiv && asignacion) {
        const nuevaAsignacion = document.createElement('p');
        nuevaAsignacion.textContent = asignacion;
        currentAsignacionDiv.appendChild(nuevaAsignacion);
        modal2.style.display = 'none';
        currentAsignacionDiv = null;
        document.getElementById('asignacion').value = ''; // Limpiar input
    }
});
