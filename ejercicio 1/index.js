/*1) Crea un formulario de registro que pida:
- Nombre
- Correo
- Teléfono
- Contraseña
- Pasaporte
- Confirmar contraseña
- Botón de enviar

Este formulario debe validar que los campos no estén vacíos y que los datos
esten correctamente validados, un nombre no puede contener caracteres especiales
y debe tener minimo 2 caracteres, debe admitir espacios, la contraseña debe de
tener minimo 8 caracteres. El correo debe de tener un formato válido. El teléfono
debe iniciar con el prefijo internacional y tener minimo 12 caracteres y maximo 20.
El pasaporte debe tener un formato válido. La confirmación de contraseña debe de
ser igual a la contraseña.

En caso de que los datos no sean válidos, se debe de mostrar un mensaje de error
debajo del campo que no cumpla con la validación.*/
let nombreCorrecto = false
let correoCorrecto = false
let telefonoCorrecto = false
let pasaporteCorrecto = false
let contraseñaCorrecto = false

{let input = document.getElementById('nombre');

  function validarNombre() {
    let nombreRegex = /^[A-Za-z \'-]+$/;
    let nombre = input.value;

    if (nombreRegex.test(nombre) == false) {
      alert('Nombre no válido');
      input.style.backgroundColor = 'red';
    } else  {
      input.style.backgroundColor = 'green';
      nombreCorrecto = true
    }
  }
}

{let input = document.getElementById('correo');

  function validarCorreo() {
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let email = input.value;

    if (emailRegex.test(email) == false) {
      alert('Correo no válido');
      input.style.backgroundColor = 'red';
    } else  {
      input.style.backgroundColor = 'green';
      correoCorrecto = true
    }
  }
}

{let input = document.getElementById('telefono');

  function validarTelefono() {
    let telefonoRegex = /^\+(?:[0-9] ?){12,20}$/;
    let telefono = input.value;

    if (telefonoRegex.test(telefono) == false) {
      alert('Teléfono no válido');
      input.style.backgroundColor = 'red';
    } else  {
      input.style.backgroundColor = 'green';
      telefonoCorrecto = true
    }
  }
}

{let input = document.getElementById('contraseña');

  function validarContraseña() {
    let contraseñaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!"#$%&'()*+/<=>?@\[\]^_{|}~.-])[A-Za-z0-9!"#$%&'()*+/<=>?@\[\]^_{|}~.-]{8,}$/;
    let contraseña = input.value;

    if (contraseñaRegex.test(contraseña) == false) {
      alert('Contraseña no válido');
      input.style.backgroundColor = 'red';
    } else  {
      input.style.backgroundColor = 'green';
      contraseñaCorrecto = true
    }
  }
}

{let input_confirmar = document.getElementById('confirmar');
  let input = document.getElementById('contraseña');

  function validarConfirmar() {
    let confirmar = input_confirmar.value;
    let contraseña = input.value;

    if (confirmar !== contraseña ) {
      alert('Confirmación no válido');
      input_confirmar.style.backgroundColor = 'red';
    } if (confirmar == '' ) {
      alert('Confirmación no válido');
      input_confirmar.style.backgroundColor = 'red';
    } else  {
      input_confirmar.style.backgroundColor = 'green';
    }
  }
}

{let input = document.getElementById('pasaporte');

  function validarPasaporte() {
    let pasaporteRegex = /^[A-Z]{1,3}[0-9]{7,12}$/;
    let pasaporte = input.value;

    if (pasaporteRegex.test(pasaporte) == false) {
      alert('Pasaporte no válido');
      input.style.backgroundColor = 'red';
    } else  {
      input.style.backgroundColor = 'green';
      pasaporteCorrecto = true
    }
  }
}

  function validardatos() {

    if ((nombreCorrecto == true && correoCorrecto == true && telefonoCorrecto == true && pasaporteCorrecto == true && contraseñaCorrecto == true)) {
      alert('Todos los datos son validos');
    } else  {
      alert('Por favor verificar los datos');
    }
  }


