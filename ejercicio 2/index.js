/* 2) Crea un TO-DO list que permita agregar tareas, marcarlas como completadas y
eliminarlas.*/

let lista = document.getElementById('lista');
let tarea = document.getElementById('tarea');
let agregar = document.getElementById('agregar');

// Función para agregar una nueva tarea
function añadir() {
  let actividad = tarea.value.trim();

  if (actividad) {
    let lista_tareas = document.createElement('li');
    lista_tareas.innerHTML = `
      <span>${actividad}</span>
      <input class="accent-blue-500 h-5 w-5 items-center" type="checkbox">
      <button class="eliminar">❌ Eliminar</button>
    `;

    lista_tareas.addEventListener('click', tarea_completada);
    lista_tareas.querySelector('.eliminar').addEventListener('click', eliminar_tarea);

    lista.appendChild(lista_tareas);
    tarea.value = '';
  }
}

// Función para marcar una tarea como completada/incompleta
function tarea_completada(event) {
  let lista_tareas = event.target.parentNode;
  lista_tareas.classList.toggle('completado');
}

// Función para eliminar una tarea
function eliminar_tarea(event) {
  let lista_tareas = event.target.parentNode;
  lista.removeChild(lista_tareas);
}

// Agregar evento click al botón para agregar tareas
agregar.addEventListener('click', añadir);