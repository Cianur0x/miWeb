function validarFormulario() {
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    var password2 = document.getElementById("pass2").value;

    if (user === "" || email === "" || password === "" || password2 === "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Rellena los campos'
      })
      return false;
    }

    if (password2 != password) {
      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      })

      return false;
    }
  
    
  
    return true; // Si todos los campos son válidos, enviar el formulario
  }
  