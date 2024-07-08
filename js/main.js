import { tareas} from './data_todo.js';

function cargar_tareas(){

    let cuadro_de_tareas = document.querySelector(".lista_tareas");

    tareas.forEach((cada_tarea) => {

        let div_tarea = document.createElement("div");
        div_tarea.classList.add("div_tareas");

        if(cada_tarea.estado){
            div_tarea.innerHTML = ` 
            <div class="caja_modal">
         
            <div class="caja_registro">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqVg_URh9Mvrm3NYaTlCUyiM7r382ohELc1g&s" alt="" class="imagen_icono">
            <div class="c1">
            <p class="texto">${cada_tarea.texto}</p>
            <p class="texto1">${cada_tarea.texto}</p>
            </div>
            </div>
            <p class="btn_asignacion"> + </p>



            <div class="estado"></div>
            
            </div>
 
        `;
        }else {
            div_tarea.innerHTML = `
            <p class="texto">${cada_tarea.texto}</p>
            <div class="estado">[X]</div>
        `;
        }
        cuadro_de_tareas.appendChild(div_tarea);
    });
}
cargar_tareas();

function cargar_botones(){
    let caja_btn = document.querySelector(".botones");

    caja_btn.innerHTML = ` <div class="btn_mas">Agregar NUevo Usuario</div>`;
}
cargar_botones();

function cargar_formulario(){
    let ventana_formulario = document.querySelector(".formulario");
    ventana_formulario.classList.add("activar_b")
    ventana_formulario.innerHTML = `
        <div class="div_controles">
            <div class="btn_cerrar">X</div>
        </div>

        <div class="div_formulario">
            <h1>Registro</h1>
            <span>Nombre:</span>
            <input type="txt" class="entrada-tarea">
            <samp>Correo:</samp>
            <input type="email" class="entrada-tarea1">

       
        </div>

        <div class="btn-crear">Enviar</div>
    `;

    let btn_cerrar2 = document.querySelector(".btn_cerrar");
    btn_cerrar2.addEventListener("click", ()=>{
        ventana_formulario.classList.remove("activar_b")
    });








    // PROGRAMACIÓN DEL BOTON CREAR
    let btn_crear = document.querySelector(".btn-crear");

    btn_crear.addEventListener("click",()=>{

        // Recupera los datos del formulario para la nueva tarea
        let tarea = document.querySelector(".entrada-tarea").value;

      
        // Organiza los datos para la nueva tarea
        let estructura_de_tarea ={
                estado: true,
                id: tarea,
                texto: tarea,
            };

        // Agrega la tarea nueva a la lista de tareas
        tareas.push(estructura_de_tarea)

        // Limpiar las tareas anteiores para actualizar
        let cuadro_de_tareas = document.querySelector(".lista_tareas");
        cuadro_de_tareas.innerHTML = "";
        
        // Carga todas las tareas nuevamente al DOM
        cargar_tareas();
        
        // cierra el formulario de la nueva tarea
        ventana_formulario.classList.remove("activar_b")


    

        
    })





}

// PROGRAMACIÓN DEL BOTON
let btn_formulario = document.querySelector(".btn_mas");
btn_formulario.addEventListener("click", cargar_formulario)


