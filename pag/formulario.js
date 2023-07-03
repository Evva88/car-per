

const form = document.getElementById('myForm');


form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  
  if (validateForm()) {
   
    window.location.href = 'mailto:evavelli5gmail.com';
  }
});


function validateForm() {
  
  const emailInput = document.getElementById('email');
  const emailValue = emailInput.value.trim();

 
  if (emailValue === '') {
  
    alert('Por favor, ingresa tu dirección de correo electrónico.');
    return false; 
  }

 
  saludo();

  return true; 
}

function saludo() {
  Swal.fire({
    icon: 'success',
    title: 'En breve responderemos tu mensaje',
    showConfirmButton: false,
    timer: 1500
  });
}
