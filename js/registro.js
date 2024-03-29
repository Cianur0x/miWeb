function validarFormulario() {
  var user = document.getElementById("user").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("pass").value;
  var password2 = document.getElementById("pass2").value;
  var terminos = document.getElementById("acepto").checked;

  if (user === "" || email === "" || password === "" || password2 === "") {
    Swal.fire({
      icon: "error",
      title: "Error...",
      text: "Rellene los campos vacíos.",
    });
  } else if (password2 != password) {
    Swal.fire({
      icon: "error",
      title: "Error...",
      text: "Las contraseñas no conciden!",
    });
  } else if (terminos != true) {
    Swal.fire({
      title: "Acepte los terminos de uso",
      width: 600,
      padding: "3em",
      color: "#fff",
      background: "#004671",
    });
  } else {
    var usuarioJS = {
      usuario: user,
      correo: email,
      password: password,
      password2: password2,
      terminosAceptados: terminos,
    };

    var stringJSON = JSON.stringify(usuarioJS);
    Swal.fire({
      icon: "info",
      title: "Datos usuario",
      text: stringJSON,
    });
    document.getElementById("formulario").reset();
  }

}
