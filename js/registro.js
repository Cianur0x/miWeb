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
      // return false;
    }

    if (password2 != password) {
      
      Swal.fire({
        icon: 'error',
        title: 'Error...',
        text: 'Las contraseñas no conciden!'
      })

    }
  
    if(terminos != true){

      Swal.fire({
        title: 'Custom width, padding, color, background.',
        width: 600,
        padding: '3em',
        color: '#fff',
        background: '#004671 url(/images/trees.png)',
        backdrop: `
          
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      })

    }
  
    // return true; // Si todos los campos son válidos, enviar el formulario
  }
  