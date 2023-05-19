function validarFormulario() {
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    var password2 = document.getElementById("pass2").value;
    var terminos = document.getElementById("acepto").checked;

    if (user === "" || email === "" || password === "" || password2 === "") {
      Swal.fire({
        icon: 'error',
        title: 'Error...',
        text: 'Rellena los campos vacíos'
      })
      return false;
    }

    if (password2 != password) {
      
      Swal.fire({
        icon: 'error',
        title: 'Error...',
        text: 'Las contraseñas no conciden!'
      })

      return false;
    }
  
    
  
    return true; // Si todos los campos son válidos, enviar el formulario
  }
  