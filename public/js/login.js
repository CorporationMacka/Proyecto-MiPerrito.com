//Función para validar los datos (quemados) del formulario de login
function validarLogin(event){
    event.preventDefault(); //Evita que se recargue la página
    const usuario = document.getElementById('username').value.trim();
    const contrasena = document.getElementById('password').value.trim();

    // Datos quemados para validar
    const usuarioCorrecto = "admin";
    const contrasenaCorrecta = "1234";

    // Validamos que los campos no estén vacíos
    if(usuario === "" || contrasena === ""){
        alert('Debes llenar todos los campos');
        return;
    }

    // Validamos que los datos sean correctos

    if(usuario === usuarioCorrecto && contrasena === contrasenaCorrecta){
        // Redirecciona a la vista de paseadores
        window.location.href = "../admin/paseadores/indexPaseadores.html";
    }else{
        alert('Usuario o contraseña incorrectos');
    }
}