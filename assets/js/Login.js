$(document).on('blur','#cpassemp',function()
{
    var passemp  = $("#passemp").val();
    var cpassemp = $(this).val();

    if(cpassemp != passemp){
        alertify.error('Las Contraseñas No coinciden');
        $("#btnEntrar").attr("disabled","true");
        $("#cpassemp").css("border-radius", "5px");
        $("#cpassemp").css("border","1px solid red");
    }else{
        $("#btnEntrar").attr("disabled","false");
        $("#cpassemp").css("border","1px solid #D27");
        // border: 1px solid #D27;
    }
});

// FUNCION PARA REGISTRO DE NUEVO USUARIO
function registro_usuario(){
    var opcion=3;
    var numeroemp = $("#numemp").val();
    var nomemp    = $("#nomemp").val();
    var centroemp = $("#centroemp").val();
    var passw     = $("#passemp").val();
    /*var cpassw    = $("#cpassemp").val();*/

    var parametros="opcion="+ opcion + "&numeroemp=" + numeroemp + "&nomemp=" + nomemp + "&passw=" + passw + "&centroemp=" + centroemp;
    $.ajax
    ({
        url: 'assets/php/Datos.php',
        type: 'POST',
        dataType: 'json',
        data: parametros,
        success: function(auth){
            if( auth.estado == 1 ){
                window.location.href = 'login_audi.php';
                alertify.success('Registro Exitoso');
            }else{
                alertify.error('Registro Fallido');
            }
        },
        error: function(){
             alert('ERROR');
        },
    });
}

// FUNCION PARA BUSCAR NOMBRE DE EMPLEADO
function obtener_empleados(numEmpleado)
{
    var opcion=2;
    var parametros = "numEmpleado=" + numEmpleado + "&opcion=" + opcion;
    $.ajax({
        url : 'assets/php/Datos.php',
        type: 'POST',
        dataType: 'html',
        data: parametros,
        }).done(function(data){
         var jsonDat = JSON.parse(data);
         $("#nomemp").val(jsonDat['nombre']);
         $("#centroemp").val(jsonDat['numerocentro'] +'-'+ jsonDat['nombrecentro']);
         // $("#nomcentro").val(jsonDat['nombrecentro']);
         //alertify.error('Empleado no Encontrado');
    })
}
$(document).on('keyup','#numemp',function()
{
    var valorBusqueda=$(this).val();
    if(valorBusqueda!=""){
        obtener_empleados(valorBusqueda);
    }else{
        obtener_empleados();
    }
});


// // FUNCION PARA INICIAR SESIÓN
function fnValidaUsuario()
{
    var opcion=1;
    var numEmpleado = $("#numero").val();
    var Contrasena =  $("#clave").val();
    // alert('Numero: '+numEmpleado);
    // alert('Contra: '+Contrasena);

    var parametros = "numEmpleado=" + numEmpleado +"&clave=" + Contrasena + "&opcion=" + opcion;

    if (numEmpleado == "" || Contrasena == "") {
        if (numEmpleado == "") {
            alertify.error('No se ha capturado numero de empleado');
        } else {
            alertify.error('No se ha capturado Contraseña');    
        }
    } else {
        //AJAX ´PETICIÓN PARA CONSULTAR EL PUESTO DE EMPLEADO Y CREAR COOKIEN PARA INICIAR SESION.
        $.ajax({    
            type: 'POST',
            async: true,
            dataType: 'json',
            url: 'assets/php/Datos.php',
            data: parametros,
            success: function(data){
                if(data.estado == "1") {
                    //window.location.href = "main/index.php?numEmpleado="+numEmpleado+"";
                    //window.location.replace("main/index.php?numEmpleado=94803455"['numeroempleado']+"&nomEmpleado=Adrian"['nombre']+"&apepaEmpleado=Velazquez"['apellidopaterno']+"&apemaEmpleado=Somera"['apellidomaterno']+"&numpuestEmpleado=396"['numeropuesto']+"&puestoEmpleado=Programador"['descripcionpuesto']+"&nuctroEmpleado=230360"['numerocentro']+"&noctroEmpleado=TI"['descripcioncentro']+"&altaEmpleado=21-11-2013"['fechaalta']+"");
                    if(data.numemp == 94803455){
                        if(Contrasena == 123){
                            window.location.replace("main/index.php?numEmpleado=94803455&nomEmpleado=EDGAR ADRIAN&apepaEmpleado=VELAZQUEZ&apemaEmpleado=SOMERA&numpuestEmpleado=396&puestoEmpleado=ANALISTA&nuctroEmpleado=230360&noctroEmpleado=TI&altaEmpleado=2013-11-21");
                            alertify.success('Sesión Iniciada');
                        }else{
                            alertify.error('Usuario o Contraseña incorrecta');
                        }
                    }else if(data.numemp == 91483921){
                        if(Contrasena == 123){
                            window.location.replace("main/index.php?numEmpleado=91483921&nomEmpleado=MARCO POLO&apepaEmpleado=MARTINEZ&apemaEmpleado=AVILES&numpuestEmpleado=134&puestoEmpleado=GTE. DE PROYECTOS&nuctroEmpleado=230360&noctroEmpleado=TI&altaEmpleado=2013-11-21");
                            alertify.success('Sesión Iniciada');
                        }else{
                            alertify.error('Usuario o Contraseña incorrecta');
                        }
                    }else if(data.numemp == 98422111){
                        if(Contrasena == 123){
                            window.location.replace("main/index.php?numEmpleado=98422111&nomEmpleado=JOSE LUIS&apepaEmpleado=GASTELUM&apemaEmpleado=ESPINOZA&numpuestEmpleado=396&puestoEmpleado=ANALISTA&nuctroEmpleado=230360&noctroEmpleado=TI&altaEmpleado=2013-11-21");
                            alertify.success('Sesión Iniciada');
                        }else{
                            alertify.error('Usuario o Contraseña incorrecta');
                        }
                    }else if(data.numemp == 90224227){
                        if(Contrasena == 123){
                            window.location.replace("main/index.php?numEmpleado=90224227&nomEmpleado=RAMON EDUARDO&apepaEmpleado=PIO&apemaEmpleado=PARRA&numpuestEmpleado=77&puestoEmpleado=PROGRAMADOR&nuctroEmpleado=230360&noctroEmpleado=TI&altaEmpleado=2013-11-21");
                            alertify.success('Sesión Iniciada');
                        }else{
                            alertify.error('Usuario o Contraseña incorrecta');
                        }
                    }else if(data.numemp == 91795877){
                        if(Contrasena == 123){
                            window.location.replace("main/index.php?numEmpleado=91795877&nomEmpleado=VICTOR FIDEL&apepaEmpleado=MITRE&apemaEmpleado=BALAM&numpuestEmpleado=77&puestoEmpleado=PROGRAMADOR&nuctroEmpleado=230360&noctroEmpleado=TI&altaEmpleado=2013-11-21");
                            alertify.success('Sesión Iniciada');
                        }else{
                            alertify.error('Usuario o Contraseña incorrecta');
                        }
                    }                   
       } else {
                    alertify.error('No cuentas con permisos para acceder');
                }
            },      
            error: function(data) {
                alert("ERROR en ajax (Login.js)");
            }
        });
    }
}

     
// Cambia de Opción Iniciar Sesión o Crear
function CambiarOpc(id){
    var opcion=id;
    if(opcion == 1)    {
        $("#tabContra").show();
        $("#tabHuella").hide();
    }else if (opcion == 2){
        $("#tabContra").hide();
        $("#tabHuella").show();
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