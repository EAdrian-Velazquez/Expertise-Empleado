function fnValidaUsuario()
{
	var opcion=1;
	var numEmpleado = $("#numero").val();
	var Contrasena =  $("#clave").val();
	// alert('Numero: '+numEmpleado);
	// alert('Contra: '+Contrasena);

	var parametros = "numero=" + numEmpleado +"&clave=" + Contrasena + "&opcion=" + opcion;

	if (numEmpleado == "" || Contrasena == "") {
		if (numEmpleado == "") {
			alertify.error('No se ha capturado numero de empleado');
		} else {
			alertify.error('No se ha capturado Contraseña');	
		}
	} else {
		$.ajax({	
			type: 'POST',
			async: true,
			dataType: 'json',
			url: 'assets/php/Datos.php',
			data: parametros,
			success: function(data){
				if(data.estado == 1) {
					window.location.href = 'main/index.php';
					alertify.success('Correcto');
				} else {
					alertify.error('Usuario o contraseña incorrectos');
				}
			},		
			error: function() {
				alert("ERROR en ajax (js-verificuarusuario.js)");
			}
		});
	}
}

     
function btn_contra() {
    document.getElementById("D_contra").style.display = 'block';
    document.getElementById("D_pass").style.display = 'none';

}
function btn_registro() { 
    document.getElementById("D_contra").style.display = 'none';
    document.getElementById("D_pass").style.display = 'block';
 }    