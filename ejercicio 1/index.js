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







let input_correo = document.getElementById('correo');

function validarCorreo() {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const email = input_correo.value;

  if (emailRegex.test(email) == false) {
    alert('Correo no válido');
    input_correo.style.backgroundColor = 'red';
  } else  {
    input_correo.style.backgroundColor = 'green';
  }
}