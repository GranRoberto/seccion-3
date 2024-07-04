/* 2) Crea un TO-DO list que permita agregar tareas, marcarlas como completadas y
eliminarlas.*/

let lista = document.getElementById('lista');
let tarea = document.getElementById('tarea');
let agregar = document.getElementById('agregar');

function añadir() {
  let actividad = tarea.value.trim();

  if (actividad) {
    let lista_tareas = document.createElement('li');
    lista_tareas.innerHTML = `
      <input class="accent-blue-500 h-5 w-5 items-center" type="checkbox">
      <span>${actividad}</span>
      <button class="eliminar">❌ Eliminar</button>
    `;

    lista_tareas.addEventListener('click', tarea_completada);
    lista_tareas.querySelector('.eliminar').addEventListener('click', eliminar_tarea);

    lista.appendChild(lista_tareas);
    tarea.value = '';
  }
}

function tarea_completada(event) {
  let lista_tareas = event.target.parentNode;
  lista_tareas.classList.toggle('completado');
}

function eliminar_tarea(event) {
  let lista_tareas = event.target.parentNode;
  lista.removeChild(lista_tareas);
}

agregar.addEventListener('click', añadir);