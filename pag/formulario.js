// Importar la librería SweetAlert


// Obtener referencia al formulario
const form = document.getElementById('myForm');

// Agregar event listener al evento 'submit' del formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir el envío predeterminado del formulario

  // Validar el formulario
  if (validateForm()) {
    // Si el formulario es válido, redirigir al usuario a la dirección de correo electrónico especificada
    window.location.href = 'mailto:evavelli5@gmail.com';
  }
});

// Función para validar el formulario
function validateForm() {
  // Obtener referencia al campo de correo electrónico
  const emailInput = document.getElementById('email');
  const emailValue = emailInput.value.trim();

  // Verificar si el campo de correo electrónico está vacío
  if (emailValue === '') {
    // Mostrar una alerta indicando que se debe ingresar una dirección de correo electrónico
    alert('Por favor, ingresa tu dirección de correo electrónico.');
    return false; // El formulario no es válido
  }

  // Mostrar la notificación de éxito utilizando SweetAlert
  saludo();

  return true; // El formulario es válido
}

// Función para mostrar la notificación de éxito
function saludo() {
  Swal.fire({
    icon: 'success',
    title: 'En breve responderemos tu mensaje',
    showConfirmButton: false,
    timer: 1500
  });
}
