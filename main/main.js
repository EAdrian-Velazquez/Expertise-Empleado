$(document).ready(function() {
    var id;

    //OBTENESMOS LOS VALORES ENVIADOS POR URL
    const valores = window.location.search;
    //Mostramos los valores en consola:
    // console.log(valores);
    const urlParams = new URLSearchParams(valores);
    //Accedemos a los valores
    const empleado         = urlParams.get('numEmpleado');
    const nomEmp           = urlParams.get('nomEmpleado');
    const apepaEmp         = urlParams.get('apepaEmpleado');
    const apemaEmp         = urlParams.get('apemaEmpleado');
    const numpuestEmpleado = urlParams.get('numpuestEmpleado');
    const puestoEmp        = urlParams.get('puestoEmpleado');
    const nuctroEmp        = urlParams.get('nuctroEmpleado');
    const noctroEmp        = urlParams.get('noctroEmpleado');
    const altaEmp          = urlParams.get('altaEmpleado');
    console.log(empleado);
    console.log(nomEmp);
    console.log(apepaEmp);
    console.log(apemaEmp);
    console.log(numpuestEmpleado);
    console.log(puestoEmp);
    console.log(nuctroEmp);
    console.log(noctroEmp);
    console.log(altaEmp);
    //INSERTO DATOS EN MODULO YO
    var empleadoA = nomEmp+' '+apepaEmp+' '+apemaEmp;
    $("#nomY").val(empleadoA);
    $("#puestoY").val(numpuestEmpleado+' '+puestoEmp);
    $("#centroY").val(nuctroEmp+' '+noctroEmp);
    $("#fech_altaY").val(altaEmp);

    if(numpuestEmpleado == 134 || numpuestEmpleado == 158  || numpuestEmpleado == 35){
        opcionA = 1;
        $('#tituloMiAvance').text('Avance Capturado por Centro');
        $('#tituloMiInfo').text('Jefe de Área');
        $('#tablaAvanceUnicEmp').css('display','none');
/////////////////////////////////////////////   LLENA DATATABLEL AVANCE CENTRO - UNIC EMP   ////////////////////////////////////////////////////////////////
    tablaUsuariosAvance = $('#tablaUsuariosAvance').DataTable({
        "processing":true,
        // "serverSide":true,
        "responsive":true,
        "bFilter": false,
        "bPaginate": false,
        "order":[],
        "ajax":{            
            "url": "bd/crud.php", 
            "method": 'POST', //usamos el metodo POST
            "data":{opcion:opcionA,empleado:empleadoA}, //enviamos opcion 1 para que haga un SELECT
            "dataSrc":"",
        },
        "columns":[
            {"data": "gte_resp"},
            {"data": "emp_a_cargo"},
            {"data": "cap_fin"},
            {"data": "cap_pen"},
            {"data": "porc"}
        ],
        "columnDefs": [
            // {"width": "250px","targets": 2},
            // {"width": "250px","targets": 4},
            // {"width": "100px","targets": 10}
            {"className": "text-center", "targets": [0,1,2,3,4]},
            {"targets": 4,"render": $.fn.dataTable.render.percentBar('round','#000000', '#004200', '#04B904', '#A7FEA7', 1, 'solid')}
        ],
        // "createdRow":function(row,data,dataIndex){
        //     // console.log(data);
        //     console.log(dataIndex);
        //     if(data['id'] == 2)
        //     {
        //         // // PINTA LA CELDA
        //         $('td',row).eq(7).html("<div class='progress' style='width:130%; height:150%; margin-left:-8px'><div class='progress-bar' role='progressbar' style='width:0%' aria-valuenow='0' aria-valuemin='0' aria-valuemax='100'>0%</div></div>");
        //                                 <div class="progress">                                                  <div class="progress-bar" role="progressbar" style="width:0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div></div>
        //         $('td',row).eq(7).css({
        //             'background-color':'#951A00',
        //             'color':'#D7DBDD',
        //          });
        //         $('td',row).eq(7).css({
        //             'background-color':'#951A00',
        //             'color':'#D7DBDD',
        //          });

        //             $('.progress-bar').html("<div class='progress' style='width:130%; height:150%; margin-left:-8px'><div class='progress-bar' role='progressbar' style='width:"+data['porc_captura']+"%' aria-valuenow='"+data['porc_captura']+"' aria-valuemin='0' aria-valuemax='100'></div></div>");
        //             var percent = 0;
                 
        //             timerId = setInterval(function() {
        //                 //increment progress bar
        //                 percent += 5;
        //                 $('.progress-bar').css('width', percent+'%');
        //                 $('.progress-bar').attr('aria-valuenow', percent);
        //                 $('.progress-bar').css('background-color','green');
        //                 $('.progress-bar').css('border-radius','10px');
        //                 $('.progress-bar').text(percent+'%');

        //                 //completo
        //                 if (percent == 100) {
        //                     clearInterval(timerId);
        //                     $('.information').show();
        //                 }
                 
        //             }, 500);
        //         $("td",row).eq(14).html("<button type='button'class='btn btn-success btn-xs editar disabled'>Padre</button>");
        //         $("td",row).eq(15).html("<button type='button'class='btn btn-info btn-xs borrar disabled'>Usar</button>");
        //         $('td',row).eq(9).css({
        //             'background-color':'#F8F9F9',
        //             'color':'black',
        //         });
        //     };
        // },
        "language": 
        {
            "decimal": ",",
            "emptyTable": "No hay registros",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ Registros",
            "infoEmpty": "Mostrando 0 a 0 de 0 Registros",
            "infoFiltered": "(Filtrado de _MAX_ total entradas)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Experiencia Empleados",
            "loadingRecords": "Cargando...",
            "processing": "Procesando...",
            "search": "Buscar:",
            "zeroRecords": "No se encontraron resultados",
            "paginate": {
                "first": "Primero",
                "last": "Ultimo",
                "next": "Siguiente",
                "previous": "Anterior"
                }    
        }
    });
/////////////////////////////////////////////   TERMINA DATATABLEL AVANCE CENTRO - UNIC EMP ////////////////////////////////////////////////////////////////    
    }else if(numpuestEmpleado == 396 || numpuestEmpleado == 77){
        opcionA = 25;
        $('#ctroCargo').addClass("deshabilitado");
        $('#kpis').addClass("deshabilitado");
        $('#tituloMiAvance').text('Avance Capturado');
        $('#tituloMiInfo').text('Colaborador');
        $('#tablaUsuariosAvance').css('display','none');
        $('#container').css('display','none');
        $('.highcharts-description').css('display','none');

/////////////////////////////////////////////   LLENA DATATABLEL AVANCE CENTRO - UNIC EMP   ////////////////////////////////////////////////////////////////
    tablaAvanceUnicEmp = $('#tablaAvanceUnicEmp').DataTable({
        "processing":true,
        // "serverSide":true,
        "responsive":true,
        "bFilter": false,
        "bPaginate": false,
        "order":[],
        "ajax":{            
            "url": "bd/crud.php", 
            "method": 'POST', //usamos el metodo POST
            "data":{opcion:opcionA,empleado:empleadoA}, //enviamos opcion 25 para que haga un SELECT
            "dataSrc":"",
        },
        "columns":[
            {"data": "gte_tit_respo"},
            {"data": "porcest"},
            {"data": "porcur"},
            {"data": "porcexp"},
            {"data": "porcgral"}
        ],
        "columnDefs": [
            {"targets": 1,"render": $.fn.dataTable.render.percentBar('round','#000000', '#004200', '#04B904', '#A7FEA7', 1, 'solid')},
            {"targets": 2,"render": $.fn.dataTable.render.percentBar('round','#000000', '#004200', '#04B904', '#A7FEA7', 1, 'solid')},
            {"targets": 3,"render": $.fn.dataTable.render.percentBar('round','#000000', '#004200', '#04B904', '#A7FEA7', 1, 'solid')},
            {"targets": 4,"render": $.fn.dataTable.render.percentBar('round','#000000', '#004200', '#04B904', '#A7FEA7', 1, 'solid')}
        ],
        "language": 
        {
            "decimal": ",",
            "emptyTable": "No hay registros",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ Registros",
            "infoEmpty": "Mostrando 0 a 0 de 0 Registros",
            "infoFiltered": "(Filtrado de _MAX_ total entradas)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Experiencia Empleados",
            "loadingRecords": "Cargando...",
            "processing": "Procesando...",
            "search": "Buscar:",
            "zeroRecords": "No se encontraron resultados",
            "paginate": {
                "first": "Primero",
                "last": "Ultimo",
                "next": "Siguiente",
                "previous": "Anterior"
                }    
        }
    });}
/////////////////////////////////////////////   TERMINA DATATABLEL AVANCE CENTRO - UNIC EMP ////////////////////////////////////////////////////////////////    

/////////////////////////////////////////////   LLENA DATATABLE DE COLABORADOR A CARGO      ///////////////////////////////////////////////////////////////
    tablaUsuarios = $('#tablaUsuarios').DataTable({
        "processing":true,
        // "serverSide":true,
        "responsive":true,
        "order":[],
        "ajax":{            
            "url": "bd/crud.php", 
            "method": 'POST', //usamos el metodo POST
            "data":{opcion:4,empleado:empleado,nomEmp:nomEmp+' '+apepaEmp+' '+apemaEmp}, //enviamos opcion 4 para que haga un SELECT
            "dataSrc":"",
        },
        "columns":[
            {"data": "id","visible":false},                  
            {"data": "area_audit"},
            {"data": "gte_divi_respo","visible":false}, 
            {"data": "gte_nac_respo","visible":false},         
            {"data": "gte_zona","visible":false}, 
            {"data": "gte_tit_respo"},        
            {"data": "region"},                             
            {"data": "num_centro","visible":false},      
            {"data": "nom_centro"},     
            {"data": "ciudad","visible":false},         
            {"data": "num_emp","visible":false},        
            {"data": "nom_emp"},                 
            {"data": "fech_ing","visible":false},               
            {"data": "num_puesto","visible":false},     
            {"data": "nom_pesto"},      
            {"data": "fech_nac","visible":false},       
            {"data": "edad","visible":false},           
            {"data": "sexo","visible":false},           
            {"data": "fech_baja","visible":false},        
            {"data": "porc_captura"},
            {"defaultContent": "<div class='text-center'><div class='btn-group' style='top:-0px'><button class='btn btn-success btn-sm btnEditar'><i class='material-icons'>visibility</i></button></div></div>"}
        ],
        "aoColumnDefs": [
            {"aTargets": [1], "sWidth": "5%"},
            {"aTargets": [2], "sWidth": "50%"},
            // {"width": "350px","targets": 2},
            // {"width": "70px","targets": 3},
            // {"width": "70px","targets": 4},
            // {"width": "100px","targets": 10},
            {"aTargets": 19,"render": $.fn.dataTable.render.percentBar('round','#000000','#004200','#04B904','#A7FEA7',1,'solid')}
        ],
        "createdRow": function (row, data, index) {
            // // PINTA LA CELDA
            $('td',row).eq(4).css({
                'color':'black',
                'font-weight':'bold',
            });
        },
        "select":{
                    style:'single',
                },
        "language": 
        {
            "decimal": ",",
            "emptyTable": "No hay registros",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ Registros",
            "infoEmpty": "Mostrando 0 a 0 de 0 Registros",
            "infoFiltered": "(Filtrado de _MAX_ total entradas)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Experiencia Empleados",
            "loadingRecords": "Cargando...",
            "processing": "Procesando...",
            "search": "Buscar:",
            "zeroRecords": "No se encontraron resultados",
            "paginate": {
                "first": "Primero",
                "last": "Ultimo",
                "next": "Siguiente",
                "previous": "Anterior"
                }    
        }
    });
/////////////////////////////////////////////   TERMINA DATATABLE DE COLABORADOR A CARGO    ///////////////////////////////////////////////////////////////    



/////////////////////////////////////////////   LLENA MODULO "YO" Y "MI INFORMACIÓN"        ////////////////////////////////////////////////////////////////
    $.ajax({
      url: "bd/crud.php",
      type: "POST",
      datatype:"json",    
      data:  {opcion:8,empleado:empleado},    
      success: function(data) {
            var datos = JSON.parse(data);
            var gtezona = datos[0]['gte_zona'].length;
            //INSERTO DATOS EN MODULO YO
            // $("#nomY").val(datos[0]['nom_emp']);
            // $("#puestoY").val(datos[0]['num_puesto']+' '+datos[0]['nom_pesto']);
            // $("#centroY").val(datos[0]['num_centro']+' '+datos[0]['nom_centro']);
            if(datos[0]['num_puesto'] == 134 || datos[0]['num_puesto'] == 158){// 158: CENTRALIZADOR               - 134: GTE Proyectos
                $("#gteY").val(datos[0]['gte_tit_respo']);
                $("#gte_respoT").val(datos[0]['gte_tit_respo']);
                if(gtezona == 0){
                    $("#gte_zonaT").attr("placeholder","N/A");
                }
                $("#gte_zonaT").val(datos[0]['gte_zona']);
            }
            if(datos[0]['num_puesto'] == 396 || datos[0]['num_puesto'] == 77){//PUESTOS PRUEBA PROGRAMADOR Y ANALISTA 
                $("#gteY").val(datos[0]['gte_tit_respo']);
                $("#gte_respoT").val(datos[0]['gte_tit_respo']);    
                if(gtezona == 0){
                    $("#gte_zonaT").attr("placeholder","N/A");
                }
                $("#gte_zonaT").val(datos[0]['gte_zona']);
            }
            if(datos[0]['fech_baja'] == '1900-01-01'){
                $("#fech_bajaT").css("display","none");
                $(".fbajaY").css("display","none");
            }else{
                 $("#fech_bajaT").val(datos[0]['fech_baja'].substring(0,10));
            }

            // $("#gtXeY").val(datos[0]['gte_respo']);
            // $("#fech_altaY").val(datos[0]['fech_ing'].substring(0,10));

            //INSERTO DATOS EN MODULO "MI INFORMACIÓN"
            let currentTimeYear = new Date().getFullYear();//obtengo fecha actual

            if(datos[0]['fech_nac'].substring(0,4) > currentTimeYear){
                var añonaci = '19'+datos[0]['fech_nac'].substring(2,4);
                var fechnac = añonaci+'-'+datos[0]['fech_nac'].substring(5,7)+'-'+datos[0]['fech_nac'].substring(8,10);
                var edad = currentTimeYear - añonaci;
            }else{
                var fechnac = datos[0]['fech_nac'];
                var edad = currentTimeYear - datos[0]['fech_nac'].substring(0,4);
            }//////////////////////////////////////////////////////////// TERMINA CALCULA FECHA DE NACIMIENTO Y  EDAD/////////////////////////////////            

            // $("#idT").val(datos[0]['id']);
            $("#area_audiT").val(datos[0]['area_audit']);
            $("#regionT").val(datos[0]['region']);
            $("#gte_zonaT").val(datos[0]['gte_zona']);
            $("#centroT").val(datos[0]['num_centro']+' '+datos[0]['nom_centro']);
            $("#ciudadT").val(datos[0]['ciudad']);
            $("#empleadoT").val(datos[0]['num_emp']+' '+datos[0]['nom_emp']);
            $("#puestoT").val(datos[0]['num_puesto']+' '+datos[0]['nom_pesto']);
            $("#fech_ingT").val(datos[0]['fech_ing'].substring(0,10));
            $("#fech_nacT").val(fechnac);
            $("#edadT").val(edad);
            $("#sexoT").val(datos[0]['sexo']);
        },
    });    
/////////////////////////////////////////////   TERMINA LLENA MODULO "YO" Y "MI INFORMACIÓN"////////////////////////////////////////////////////////////////

/////////////////////////////////////////////   LLENA DATATABLE MI INFO-ESTUDIOS            ///////////////////////////////////////////////////////////////
    tablamiInfoEst = $('#tablamiInfoEst').DataTable({
        "processing":true,
        // "serverSide":true,
        "responsive":true,
        "searching": false,
        "order":[],
        "ajax":{            
            "url": "bd/crud.php", 
            "method": 'POST', //usamos el metodo POST
            "data":{opcion:2,empleado:empleado},
            "dataSrc":"",
        },
        "columns":[
            {"data": "idestudio","visible":false},
            {"data": "num_emp","visible":false},
            {"data": "nivel_acad"},     
            {"data": "nom_carrer"},     
            {"data": "titulo"},         
            {"data": "cedula"},         
            {"data": "comprobante"},    
            {"data": "nom_intitu"},
            {"data": "fech_inic"},     
            {"data": "fech_conc"}
            // {"data": "porc_captura","visible":false},
            //{"defaultContent": "<div class='text-center'><div class='btn-group' style='top:-18px'><button class='btn btn-success btn-sm btnEditarE'><i class='material-icons'>edit</i></button> <button class='btn btn-danger btn-sm btnBorrarE'><i class='material-icons'>delete</i> </button></div></div>"}
        ],       
        "language": 
        {
            "decimal": ",",
            "emptyTable": "Aun no tiene Registrado Estudios",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ Registros",
            "infoEmpty": "Mostrando 0 a 0 de 0 Registros",
            "infoFiltered": "(Filtrado de _MAX_ total entradas)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Estudios",
            "loadingRecords": "Cargando...",
            "processing": "Procesando...",
            "search": "Buscar:",
            "zeroRecords": "No se encontraron resultados",
            "paginate": {
                "first": "Primero",
                "last": "Ultimo",
                "next": "Siguiente",
                "previous": "Anterior"
                }    
        },
    });
/////////////////////////////////////////////   TERMINA DATATABLE MI INFO-ESTUDIOS          ///////////////////////////////////////////////////////////////   

/////////////////////////////////////////////   LLENA DATATABLE MI INFO-CURSOS              ///////////////////////////////////////////////////////////////
    tablamiInfoCurso = $('#tablamiInfoCurso').DataTable({
        "processing":true,
        // "serverSide":true,
        "responsive":true,
        "order":[],
        "ajax":{            
            "url": "bd/crud.php", 
            "method": 'POST', //usamos el metodo POST
            "data":{opcion:9,empleado:empleado},
            "dataSrc":"",
        },
        "columns":[
            {"data": "idcurso","visible":false},
            {"data": "num_emp","visible":false},
            {"data": "cate_cursos"},     
            {"data": "tipocurso"},     
            {"data": "cursos"}
            // {"data": "porc_captura","visible":false},
            //{"defaultContent": "<div class='text-center'><div class='btn-group' style='top:-18px'><button class='btn btn-success btn-sm btnEditarC'><i class='material-icons'>edit</i></button> <button class='btn btn-danger btn-sm btnBorrarC'><i class='material-icons'>delete</i> </button></div></div>"}
        ],       
        "language": 
        {
            "decimal": ",",
            "emptyTable": "Aun no tiene Registrado Cursos",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ Registros",
            "infoEmpty": "Mostrando 0 a 0 de 0 Registros",
            "infoFiltered": "(Filtrado de _MAX_ total entradas)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Cursos",
            "loadingRecords": "Cargando...",
            "processing": "Procesando...",
            "search": "Buscar:",
            "zeroRecords": "No hay cursos registrados",
            "paginate": {
                "first": "Primero",
                "last": "Ultimo",
                "next": "Siguiente",
                "previous": "Anterior"
                }    
        },
    });
/////////////////////////////////////////////   TERMINA DATATABLE MI INFO-CURSOS            ///////////////////////////////////////////////////////////////

/////////////////////////////////////////////   LLENA DATATABLE MI INFO-CURSOS COORPO       ///////////////////////////////////////////////////////////////
    tablamiInfoCursoCorp = $('#tablamiInfoCursoCorp').DataTable({
        "processing":true,
        // "serverSide":true,
        "responsive":true,
        "order":[],
        "ajax":{            
            "url": "bd/crud.php", 
            "method": 'POST', //usamos el metodo POST
            "data":{opcion:26,empleadoC:empleado},
            "dataSrc":"",
        },
        "columns":[
            {"data": "idccorp","visible":false},
            {"data": "num_emp","visible":false},
            {"data": "titulo"},     
            {"data": "duracion"},     
            {"data": "empresa_imparte"},
            {"data": "escuela"},
            {"render":function(data,type,row){
                        return (' Inicio: ' + row["periodo_inic"] + ' Fin: ' + row["periodo_fin"]);
                    }
            },
            {"data": "const_certif"},
            {"data": "estatus"},
        ],       
        "language": 
        {
            "decimal": ",",
            "emptyTable": "Error de Datos",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ Registros",
            "infoEmpty": "Mostrando 0 a 0 de 0 Registros",
            "infoFiltered": "(Filtrado de _MAX_ total entradas)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Cursos para tu puesto",
            "loadingRecords": "Cargando...",
            "processing": "Procesando...",
            "search": "Buscar:",
            "zeroRecords": "No hay cursos registrados",
            "paginate": {
                "first": "Primero",
                "last": "Ultimo",
                "next": "Siguiente",
                "previous": "Anterior"
                }    
        },
    });
/////////////////////////////////////////////   TERMINA DATATABLE MI INFO-CURSOS COORPO     ///////////////////////////////////////////////////////////////

/////////////////////////////////////////////   LLENA DATATABLE MI INFO-EXP COPPEL          ///////////////////////////////////////////////////////////////
    tablamiInfoExpCppl = $('#tablamiInfoExpCppl').DataTable({
        "processing":true,
        // "serverSide":true,
        "responsive":true,
        "order":[],
        "ajax":{
            "url": "bd/crud.php",
            "method": 'POST', //usamos el metodo POST
            "data":{opcion:23,empleado:empleado},
            "dataSrc":"",
        },
        "columns":[
            {"data": "numemp","visible":false},
            {"data": "fechao"},
            {"data": "centro"},     
            {"data": "puesto"},
            {"render": function ( data, type, row ) {
                        return (row["año"] + ' año/s ' + row["mes"] + ' mese/s');
                    }
            }
        ],
        "language": 
        {
            "decimal": ",",
            "emptyTable": "Comunicarse con el Administradro del Sistema",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ Registros",
            "infoEmpty": "Mostrando 0 a 0 de 0 Registros",
            "infoFiltered": "(Filtrado de _MAX_ total entradas)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Historial Laboral Empresa",
            "loadingRecords": "Cargando...",
            "processing": "Procesando...",
            "search": "Buscar:",
            "zeroRecords": "Sin historial laboral",
            "paginate": {
                "first": "Primero",
                "last": "Ultimo",
                "next": "Siguiente",
                "previous": "Anterior"
                }
        },
    });
/////////////////////////////////////////////   TERMINA DATATABLE MI INFO-EXP COPPEL        //////////////////////////////////////////////////////////////

/////////////////////////////////////////////   LLENA DATATABLE MI INFO-EXP EXTERNA         /////////////////////////////////////////////////////////////
    tablamiInfoExpExt = $('#tablamiInfoExpExt').DataTable({
        "processing":true,
        // "serverSide":true,
        "responsive":true,
        "order":[],
        "ajax":{
            "url": "bd/crud.php",
            "method": 'POST', //usamos el metodo POST
            "data":{opcion:24,empleado:empleado},
            "dataSrc":"",
        },
        "columns":[
            {"data": "idexpext","visible":false},
            {"data": "num_emp","visible":false},
            {"data": "fexplabo_coppel"},
            {"data": "empexplabo_ext"},     
            {"data": "pexplabo_ext"},     
            {"data": "actexplabo_ext"},
            {"data": "antexplabo_coppel"}
        ],       
        "language": 
        {
            "decimal": ",",
            "emptyTable": "Aun no tiene Registrado Experiencia Laboral",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ Registros",
            "infoEmpty": "Mostrando 0 a 0 de 0 Registros",
            "infoFiltered": "(Filtrado de _MAX_ total entradas)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Historial Laboral Externa",
            "loadingRecords": "Cargando...",
            "processing": "Procesando...",
            "search": "Buscar:",
            "zeroRecords": "Sin historial laboral",
            "paginate": {
                "first": "Primero",
                "last": "Ultimo",
                "next": "Siguiente",
                "previous": "Anterior"
                }
        },
    });
/////////////////////////////////////////////   TERMINA DATATABLE MI INFO-EXP EXTERNA       ////////////////////////////////////////////////////////////



/////////////////////////////////////////////   LLENA DATATABLE ESTUDIOS                    ///////////////////////////////////////////////////////////////
    tablaprueba = $('#tablaprueba').DataTable({
        "processing":true,
        "serverSide":false,
        "responsive":true,
        "searching": false,
        "order":[],
        "ajax":{
            // "async":false,
            "url": "bd/crud.php", 
            "method": 'POST', //usamos el metodo POST
            "data":function(d){
                var selected = tablaUsuarios.row( { selected: true } );
                if ( selected.any() ) {
                    d.empleadoE = selected.data().num_emp;
                    d.opcion=11; 
                }else{
                    d.opcion=11;
                    d.empleadoE = 90000000;
                }               
            },
            // xhr: function() {
            //     var xhr = $.ajaxSettings.xhr();
            //     xhr.upload.onprogress = function(e) {
            //         xhr.abort(); //abort all current request here
            //     };
            //     return xhr;
            // }, 
            "dataSrc":"",
        },
        "columns":[
            {"data": "idestudio","visible":false},
            {"data": "num_emp","visible":false},
            {"data": "nivel_acad"},     
            {"data": "nom_carrer"},     
            {"data": "titulo","visible":false},         
            {"data": "cedula","visible":false},         
            {"data": "comprobante","visible":false},    
            {"data": "nom_intitu"},
            {"data": "fech_inic"},     
            {"data": "fech_conc"},
            {"defaultContent": "<div class='text-center'><div class='btn-group' style='top:-18px'><button class='btn btn-success btn-sm btnEditarE'><i class='material-icons'>edit</i></button> <button class='btn btn-danger btn-sm btnBorrarE'><i class='material-icons'>delete</i> </button></div></div>"}
        ],
        "createdRow":function(row,data,index){
            //// BLOQUEAR BOTONES CUANDO NO SE A SELECCIONADO EMPLEAOD
            if(data['nivel_acad'] == null && data['nom_carrer'] == null && data['titulo'] == null && data['cedula'] == null && data['comprobante'] == null && data['nom_intitu'] == null && data['fech_inic'] == null && data['fech_conc'] == null){
                $('td',row).eq(5).html("<div class='text-center'><div class='btn-group' style='top:-18px'><button class='btn btn-success btn-sm btnEditarE'><i class='material-icons'>edit</i></button> <button class='btn btn-danger btn-sm btnBorrarE disabled'><i class='material-icons'>delete</i> </button></div></div>");
            }
        },
        "language": 
        {
            "decimal": ",",
            "emptyTable": "Seleccionar Empleado para mostrar Datos",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ Registros",
            "infoEmpty": "Mostrando 0 a 0 de 0 Registros",
            "infoFiltered": "(Filtrado de _MAX_ total entradas)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Estudios",
            "loadingRecords": "Cargando...",
            "processing": "Procesando...",
            "search": "Buscar:",
            "zeroRecords": "No se encontraron resultados",
            "paginate": {
                "first": "Primero",
                "last": "Ultimo",
                "next": "Siguiente",
                "previous": "Anterior"
                }    
        },
    });

    // tablaUsuarios.on('select',function(){    
    //     tablaprueba.ajax.reload(function(){
    //         var arrData=[];
    //         $("#tablaprueba tr").each(function(tbody, table){
    //             var currentRow=$(this);

    //             var col1_value = currentRow.find("td:eq(0)").text();
    //             var col2_value = currentRow.find("td:eq(1)").text();
    //             var col3_value = currentRow.find("td:eq(2)").text();
    //             var col4_value = currentRow.find("td:eq(3)").text();
    //             var col5_value = currentRow.find("td:eq(4)").text();

    //             var obj={};
    //             obj.nivAca  = col1_value;
    //             obj.nomCar  = col2_value;
    //             obj.insti   = col3_value;
    //             obj.fechIn  = col3_value;
    //             obj.fechCo  = col3_value;

    //             arrData = obj;

    //         });
    //         if(arrData['nivAca'] == '' & arrData['nomCar'] == '' & arrData['insti'] == '' & arrData['fechIn'] == '' & arrData['fechCo'] == ''){
    //              $('#btnAddEstudio').attr("disabled",true);
    //          }else{
    //              $('#btnAddEstudio').attr("disabled",false);
    //          }
    //     });
    // });
    // tablaUsuarios.on('deselect',function(){
    //     tablaprueba.ajax.reload();
    //     $('#btnAddEstudio').attr("disabled",true);
    // });
/////////////////////////////////////////////   TERMINA DATATABLE ESTUDIOS                  ///////////////////////////////////////////////////////////////

/////////////////////////////////////////////   LLENA DATATABLE CURSOS                      ///////////////////////////////////////////////////////////////
    tablaCursos = $('#tablaCursos').DataTable({
        "processing":true,
        // "serverSide":true,
        "responsive":true,
        "order":[],
        "ajax":{            
            "url": "bd/crud.php", 
            "method": 'POST', //usamos el metodo POST
            "data":function(d){
                var selected = tablaUsuarios.row( { selected: true } );
                if ( selected.any() ) {
                    d.empleadoC = selected.data().num_emp;
                    d.opcion=14; 
                }else{
                    d.opcion=14;
                    d.empleadoC = 90000000;
                }               
            }, 
            "dataSrc":"",
        },
        "columns":[
            {"data": "idcurso","visible":false},
            {"data": "num_emp","visible":false},
            {"data": "cate_cursos"},     
            {"data": "tipocurso"},     
            {"data": "cursos"},
            {"defaultContent": "<div class='text-center'><div class='btn-group' style='top:-18px'><button class='btn btn-success btn-sm btnEditarC'><i class='material-icons'>edit</i></button> <button class='btn btn-danger btn-sm btnBorrarC'><i class='material-icons'>delete</i> </button></div></div>"}
        ],
        "createdRow": function(row,data,index){
            //// BLOQUEAR BOTONES CUANDO NO SE A SELECCIONADO EMPLEAOD
            if(data['cate_cursos'] == null && data['tipocurso'] == null && data['cursos'] == null){
                $('td',row).eq(3).html("<div class='text-center'><div class='btn-group' style='top:-18px'><button class='btn btn-success btn-sm btnEditarC'><i class='material-icons'>edit</i></button> <button class='btn btn-danger btn-sm btnBorrarC disabled'><i class='material-icons'>delete</i> </button></div></div>");
            }
        },       
        "language":{
            "decimal": ",",
            "emptyTable": "Seleccionar Empleado para mostrar Datos",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ Registros",
            "infoEmpty": "Mostrando 0 a 0 de 0 Registros",
            "infoFiltered": "(Filtrado de _MAX_ total entradas)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Cursos",
            "loadingRecords": "Cargando...",
            "processing": "Procesando...",
            "search": "Buscar:",
            "zeroRecords": "No hay cursos registrados",
            "paginate":{
                "first": "Primero",
                "last": "Ultimo",
                "next": "Siguiente",
                "previous": "Anterior"
                }    
        },
    });
    // tablaUsuarios.on('select',function(){    
    //     tablaCursos.ajax.reload(function(){
    //         var arrData=[];
    //         $("#tablaCursos tr").each(function(tbody,table){
    //             var currentRow=$(this);

    //             var col1_valueC = currentRow.find("td:eq(0)").text();
    //             var col2_valueC = currentRow.find("td:eq(1)").text();
    //             var col3_valueC = currentRow.find("td:eq(2)").text();
    //             // console.log(col3_value);

    //             var obj={};
    //             obj.categoria = col1_valueC;
    //             obj.tipCurso  = col2_valueC;
    //             obj.curso     = col3_valueC;

    //             arrDataC = obj;
    //             console.log(arrDataC);
    //         });
    //         if(arrDataC['categoria'] == '' && arrDataC['tipCurso'] == '' && arrDataC['curso'] == ''){
    //              $('#btnAddCurso').attr("disabled",true);
    //              console.log(arrDataC);
    //              console.log('no entro');
    //          }else{
    //              $('#btnAddCurso').attr("disabled",false);
    //              console.log('entro');
    //          }
    //     });
    // }); 
    // tablaUsuarios.on('deselect', function () {
    //     tablaCursos.ajax.reload();
    //     $('#btnAddCurso').attr("disabled",true);
    // });
/////////////////////////////////////////////   TERMINA DATATABLE CURSOS                    ///////////////////////////////////////////////////////////////

/////////////////////////////////////////////   LLENA DATATABLE CURSOS CORPO                ///////////////////////////////////////////////////////////////
    tablaCursosCorp = $('#tablaCursosCorp').DataTable({
        "processing":true,
        // "serverSide":true,
        "responsive":true,
        "order":[],
        "ajax":{            
            "url": "bd/crud.php", 
            "method": 'POST', //usamos el metodo POST
            "data":function(d){
                var selected = tablaUsuarios.row( { selected: true } );
                if ( selected.any() ) {
                    d.empleadoC = selected.data().num_emp;
                    d.opcion=26; 
                }else{
                    d.opcion=26;
                    d.empleadoC = 90000000;
                }               
            }, 
            "dataSrc":"",
        },
        "columns":[
            {"data": "idccorp","visible":false},
            {"data": "num_emp","visible":false},
            {"data": "titulo"},     
            {"data": "duracion"},     
            {"data": "empresa_imparte"},
            {"data": "escuela"},
            {"render":function(data,type,row){
                        return (' Inicio: ' + row["periodo_inic"] + ' Fin: ' + row["periodo_fin"]);
                    }
            },
            {"data": "const_certif"},
            {"data": "estatus"},
            {"defaultContent": "<div class='text-center'><div class='btn-group' style='top:-18px'><button class='btn btn-success btn-sm btnEditarC'><i class='material-icons'>edit</i></button></div></div>"}
        ],     
        "language":{
            "decimal": ",",
            "emptyTable": "Seleccionar Empleado para mostrar Datos",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ Registros",
            "infoEmpty": "Mostrando 0 a 0 de 0 Registros",
            "infoFiltered": "(Filtrado de _MAX_ total entradas)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Cursos para tu Puesto",
            "loadingRecords": "Cargando...",
            "processing": "Procesando...",
            "search": "Buscar:",
            "zeroRecords": "No hay cursos registrados",
            "paginate":{
                "first": "Primero",
                "last": "Ultimo",
                "next": "Siguiente",
                "previous": "Anterior"
                }    
        },
    });
/////////////////////////////////////////////   TERMINA DATATABLE CURSOS CORPO              ///////////////////////////////////////////////////////////////

/////////////////////////////////////////////   LLENA DATATABLE EXPERIENCIA COPPEL          ///////////////////////////////////////////////////////////////
    tablaExpCppl = $('#tablaExpCppl').DataTable({
        "processing":true,
        // "serverSide":true,
        "responsive":true,
        "order":[],
        "ajax":{
            "url": "bd/crud.php",
            "method": 'POST', //usamos el metodo POST
            "data":function(d){
                var selected = tablaUsuarios.row( { selected: true } );

                if ( selected.any() ) {
                    d.empleadoExpC = selected.data().num_emp;
                    d.opcion=18;
                }else{
                    d.opcion=18;
                    d.empleadoExpC = 90000000;
                }
            },
            "dataSrc":"",
        },
        "columns":[
            {"data": "numemp","visible":false},
            {"data": "fechao"},
            {"data": "centro"},     
            {"data": "puesto"},     
            {"render":function(data,type,row){
                        return (row["año"] + ' año/s ' + row["mes"] + ' mese/s');
                    }
            }
        ],       
        "language": 
        {
            "decimal": ",",
            "emptyTable": "Seleccionar Empleado para mostrar Datos",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ Registros",
            "infoEmpty": "Mostrando 0 a 0 de 0 Registros",
            "infoFiltered": "(Filtrado de _MAX_ total entradas)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Historial Laboral Empresa",
            "loadingRecords": "Cargando...",
            "processing": "Procesando...",
            "search": "Buscar:",
            "zeroRecords": "Sin historial laboral",
            "paginate": {
                "first": "Primero",
                "last": "Ultimo",
                "next": "Siguiente",
                "previous": "Anterior"
                }
        },
    });
    tablaUsuarios.on('select', function () {
        tablaExpCppl.ajax.reload();
    });
    tablaUsuarios.on('deselect', function () {
        tablaExpCppl.ajax.reload();
    });
/////////////////////////////////////////////   TERMINA LLENA DATATABLE EXPERIENCIA COPPEL  //////////////////////////////////////////////////////////////

/////////////////////////////////////////////   LLENA DATATABLE EXPERIENCIA EXTERNA         /////////////////////////////////////////////////////////////
    tablaExpExt = $('#tablaExpExt').DataTable({
        "processing":true,
        // "serverSide":true,
        "responsive":true,
        "order":[],
        "ajax":{
            "url": "bd/crud.php",
            "method": 'POST', //usamos el metodo POST
            "data":function(d){
                var selected = tablaUsuarios.row( { selected: true } );
                if ( selected.any() ) {
                    d.empleadoExpC = selected.data().num_emp;
                    d.opcion=19;
                }else{
                    d.opcion=19;
                    d.empleadoExpC = 90000000;
                }
            },
            "dataSrc":"",
        },
        "columns":[
            {"data": "idexpext","visible":false},
            {"data": "num_emp","visible":false},
            {"data": "fexplabo_coppel"},
            {"data": "empexplabo_ext"},     
            {"data": "pexplabo_ext"},     
            {"data": "actexplabo_ext"},
            {"data": "antexplabo_coppel"},
            // {"data": "porc_captura","visible":false},
            {"defaultContent": "<div class='text-center'><div class='btn-group' style='top:-18px'><button class='btn btn-success btn-sm btnEditarExpExt'><i class='material-icons'>edit</i></button> <button class='btn btn-danger btn-sm btnBorrarExpExt'><i class='material-icons'>delete</i> </button></div></div>"}
        ],
        "createdRow": function(row,data,index){
            //// BLOQUEAR BOTONES CUANDO NO SE A SELECCIONADO EMPLEAOD
            if(data['fexplabo_coppel'] == null && data['empexplabo_ext'] == null && data['pexplabo_ext'] == null && data['actexplabo_ext'] == null && data['antexplabo_coppel'] == null){
                $('td',row).eq(5).html("<div class='text-center'><div class='btn-group' style='top:-18px'><button class='btn btn-success btn-sm btnEditarExpExt'><i class='material-icons'>edit</i></button> <button class='btn btn-danger btn-sm btnBorrarExpExt disabled'><i class='material-icons'>delete</i> </button></div></div>");
            }
        },
        "language": 
        {
            "decimal": ",",
            "emptyTable": "Seleccionar Empleado para mostrar Datos",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ Registros",
            "infoEmpty": "Mostrando 0 a 0 de 0 Registros",
            "infoFiltered": "(Filtrado de _MAX_ total entradas)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Historial Laboral Externa",
            "loadingRecords": "Cargando...",
            "processing": "Procesando...",
            "search": "Buscar:",
            "zeroRecords": "Sin historial laboral",
            "paginate": {
                "first": "Primero",
                "last": "Ultimo",
                "next": "Siguiente",
                "previous": "Anterior"
                }
        },
    });
    // tablaUsuarios.on('select', function () {
    //     tablaExpExt.ajax.reload(function(){
    //         var arrData=[];
    //         $("#tablaExpExt tr").each(function(tbody, table){
    //             var currentRow=$(this);

    //             var col1_value = currentRow.find("td:eq(0)").text();
    //             var col2_value = currentRow.find("td:eq(1)").text();
    //             var col3_value = currentRow.find("td:eq(2)").text();
    //             var col4_value = currentRow.find("td:eq(3)").text();
    //             var col5_value = currentRow.find("td:eq(4)").text();

    //             var obj={};
    //             obj.fecha   = col1_value;
    //             obj.empresa = col2_value;
    //             obj.puesto  = col3_value;
    //             obj.activid = col4_value;
    //             obj.antigue = col5_value;

    //             arrData = obj;
    //         });
    //         if(arrData['fecha'] == '' & arrData['empresa'] == '' & arrData['puesto'] == '' & arrData['activid'] == '' & arrData['antigue'] == ''){
    //              $('#btnAddExpExt').attr("disabled",true);
    //          }else{
    //              $('#btnAddExpExt').attr("disabled",false);
    //          }
    //     });
    // });
    // tablaUsuarios.on('deselect', function () {
    //     tablaExpExt.ajax.reload();
    //     $('#btnAddExpExt').attr("disabled",true);
    // });
/////////////////////////////////////////////   TERMINA LLENA DATATABLE EXPERIENCIA EXTERNA ////////////////////////////////////////////////////////////



/////////////////////////////////////////////   FUNCION CONDICION BLOQUEA BTN ADD ////////////////////////////////////////////////////////////
   // $('#tablaUsuarios').bind('select', tablaUsuarios);

    tablaUsuarios.on('select',function()
    {    
        tablaprueba.ajax.reload(function(){
            var arrData=[];
            $("#tablaprueba tbody tr").one().each(function(tbody, table){
                var currentRow=$(this);

                var col1_value = currentRow.find("td:eq(0)").text();
                var col2_value = currentRow.find("td:eq(1)").text();
                var col3_value = currentRow.find("td:eq(2)").text();
                var col4_value = currentRow.find("td:eq(3)").text();
                var col5_value = currentRow.find("td:eq(4)").text();

                var obj={};
                obj.nivAca  = col1_value;
                obj.nomCar  = col2_value;
                obj.insti   = col3_value;
                obj.fechIn  = col3_value;
                obj.fechCo  = col3_value;

                arrData = obj;
                // console.log(arrData);

            });

            if(arrData['nivAca'] == '' & arrData['nomCar'] == '' & arrData['insti'] == '' & arrData['fechIn'] == '' & arrData['fechCo'] == ''){
                 $('#btnAddEstudio').attr("disabled",true);
             }else{
                 $('#btnAddEstudio').attr("disabled",false);
             }
        });

       tablaCursos.ajax.reload(function(){
            var arrDataC=[];

            $("#tablaCursos tbody tr").each(function(tbody,table){
                var currentRow=$(this);
                //console.log(currentRow);

                var col1_valueC = currentRow.find("td:eq(0)").text();
                var col2_valueC = currentRow.find("td:eq(1)").text();
                var col3_valueC = currentRow.find("td:eq(2)").text();

                var obj={};
                obj.categoria = currentRow.find("td:eq(0)").text();
                obj.tipCurso  = currentRow.find("td:eq(1)").text();
                obj.curso     = currentRow.find("td:eq(2)").text();

                arrDataC = obj;
                console.log(arrDataC);

            // if(col1_valueC == '' & col2_valueC == '' & col3_valueC == ''){
            if(arrDataC['categoria'] == '' & arrDataC['tipCurso'] == '' & arrDataC['curso'] == ''){
                 $('#btnAddCurso').attr("disabled",true);
                 console.log('LIMPIO BLOQUEADO');
             }else{
                 $('#btnAddCurso').attr("disabled",false);
                 console.log('SUCIO DESBLOQUEADO');
             }
            });
        });

       tablaCursosCorp.ajax.reload();

        tablaExpExt.ajax.reload(function(){
            var arrData=[];
            $("#tablaExpExt tbody tr").each(function(tbody, table){
                var currentRow=$(this);

                var col1_value = currentRow.find("td:eq(0)").text();
                var col2_value = currentRow.find("td:eq(1)").text();
                var col3_value = currentRow.find("td:eq(2)").text();
                var col4_value = currentRow.find("td:eq(3)").text();
                var col5_value = currentRow.find("td:eq(4)").text();

                var obj={};
                obj.fecha   = col1_value;
                obj.empresa = col2_value;
                obj.puesto  = col3_value;
                obj.activid = col4_value;
                obj.antigue = col5_value;

                arrData = obj;
            });
            if(arrData['fecha'] == '' & arrData['empresa'] == '' & arrData['puesto'] == '' & arrData['activid'] == '' & arrData['antigue'] == ''){
                 $('#btnAddExpExt').attr("disabled",true);
             }else{
                 $('#btnAddExpExt').attr("disabled",false);
             }
        });
    });
    tablaUsuarios.on('deselect',function(){
        tablaprueba.ajax.reload();
        $('#btnAddEstudio').attr("disabled",true);

        tablaCursos.ajax.reload();
        $('#btnAddCurso').attr("disabled",true);

        tablaCursosCorp.ajax.reload();
        $('#tablaCursosCorp').attr("disabled",true);

        tablaExpExt.ajax.reload();
        $('#btnAddExpExt').attr("disabled",true);

    });
/////////////////////////////////////////////   TERMINA FUNCION CONDICION BLOQUEA BTN ADD ////////////////////////////////////////////////////////////


// // // Create the chart with initial data
//     var container1 = $('<div container avance/>').insertAfter(tablaUsuariosAvance.table().container());
 
//     var chart = Highcharts.chart(container1[0], {
//         chart: {
//             type: 'pie',
//         },
//         title: {
//             text: 'Avance Captura de Datos',
//         },
//         series: [
//             {
//                 data: chartData(tablaUsuariosAvance),
//             },
//         ],
//     });
 
//     // On each draw, update the data in the chart
//     tablaUsuariosAvance.on('draw', function () {
//         chart.series[0].setData(chartData(tablaUsuariosAvance));
//     });
 
// function chartData(tablaUsuariosAvance) {
//     var counts = {};
 
//     // Count the number of entries for each position
//     tablaUsuariosAvance
//         .column(32)
//       // .column(1,2 { search: 'applied' })
//         .data()
//         .each(function (val) {
//             if (counts[val]) {
//                 counts[val] += 1;
//             } else {
//                 counts[val] = 1;
//             }
//         });
 
//     // And map it to the format highcharts uses
//     return $.map(counts, function (val, key) {
//         return {
//             name: key,
//             y: val,
//         };
//     });
// }

             
   //////////////////////////////////////////// FUNCION DE BOTTON GUARDAR DATOS MODULO "MI INFORMACIÓN"///////////////////////////////////////////////////
    $('#formUsuariosT').submit(function(e){                         
        e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página
        opcion = 9;//ENVIAR LA OPCIÓN 2 DEL CRUD.PHP
        niv_acad = $.trim($('#niv_acadT').val());
        nom_carr = $.trim($('#nom_carrT').val());
        titulo = $.trim($('#tituloT').val());
        cedula = $.trim($('#cedulaT').val());
        compro = $.trim($('#comproT').val());
        nom_institu = $.trim($('#nom_instituT').val());
        fech_conc = $.trim($('#fech_concT').val());
        cate_cursos = $.trim($('#cat_cursoT').val());
        tipo_curso = $.trim($('#tip_cursoT').val());
        cursos = $.trim($('#nom_cursoT').val());
        aExpCppl = $.trim($('#aExpCpplT').val());    
        expCppl = $.trim($('#expCpplT').val());    
        aExpExt = $.trim($('#aExpExtT').val());
        ExpExt = $.trim($('#ExpExtT').val());  
            $.ajax({
              url: "bd/crud.php",
              type: "POST",
              datatype:"json",    
              data:  {empleado:empleado,niv_acad:niv_acad, nom_carr:nom_carr, titulo:titulo, cedula:cedula, compro:compro ,nom_institu:nom_institu,
                      fech_conc:fech_conc,cate_cursos:cate_cursos,tipo_curso:tipo_curso,cursos:cursos,aExpCppl:aExpCppl,expCppl:expCppl,aExpExt:aExpExt,ExpExt:ExpExt,opcion:opcion},    
              success: function(data) {
                location.reload();
                // $("#headingOne").load("#headingOne"); recarga div
                alert("Guardado correctamente");
               //  alertify.success('Guardado correctamente');
               }
            });                 
    });

    //////////////////////////////////////////// FUNCION DE BOTTON GUARDAR DATOS MODAL/////////////////////////////////////////////////////////////////////
    $('#formUsuarios').submit(function(e){                         
        e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página
        opcion = 2;//ENVIAR LA OPCIÓN 2 DEL CRUD.PHP
        user_id = $.trim($('#id').val());
        niv_acad = $.trim($('#niv_acad').val());
        nom_carr = $.trim($('#nom_carr').val());
        titulo = $.trim($('#titulo').val());
        cedula = $.trim($('#cedula').val());
        compro = $.trim($('#compro').val());
        nom_institu = $.trim($('#nom_institu').val());
        fech_conc = $.trim($('#fech_conc').val());
        cate_cursos = $.trim($('#cat_curso').val());
        tipo_curso = $.trim($('#tip_curso').val());
        cursos = $.trim($('#nom_curso').val());
        aExpCppl = $.trim($('#aExpCppl').val());    
        expCppl = $.trim($('#expCppl').val());    
        aExpExt = $.trim($('#aExpExt').val());
        ExpExt = $.trim($('#ExpExt').val());  
            $.ajax({
              url: "bd/crud.php",
              type: "POST",
              datatype:"json",    
              data:  {user_id:user_id, niv_acad:niv_acad, nom_carr:nom_carr, titulo:titulo, cedula:cedula, compro:compro ,nom_institu:nom_institu,
                      fech_conc:fech_conc,cate_cursos:cate_cursos,tipo_curso:tipo_curso,cursos:cursos,aExpCppl:aExpCppl,expCppl:expCppl,aExpExt:aExpExt,ExpExt:ExpExt,opcion:opcion},    
              success: function(data) {
                tablaUsuariosAvance.ajax.reload( function ( json ) {
                    $('#tablaUsuariosAvance').val( json.lastInput ); //al guardar refreca tabla sin recargar toda la pagina
                });
                alertify.success('Guardado correctamente');               }
            });			        
        $('#modalCRUD').modal('hide');											     			
    });

    ///////////////////////////////////////////////////////////// BOTON HABRE MODAL PARA EDITAR CENTROS A CARGO////////////////////////////////////////////
    $("#tablaUsuarios tbody").on("click","button.btnEditar", function (tbody, table) {
        var data = tablaUsuarios.row($(this).parents("tr")).data();
        console.log(data);
        //////////////////////////////////////////////////////////// CALCULA FECHA DE NACIMIENTO Y  EDAD/////////////////////////////////////////
        let currentTimeYear = new Date().getFullYear();//obtengo fecha actual

        if(data['fech_nac'].substring(0,4) > currentTimeYear){
            var añonaci = '19'+data['fech_nac'].substring(2,4);
            var fechnac = añonaci+'-'+data['fech_nac'].substring(5,7)+'-'+data['fech_nac'].substring(8,10);
            var edad = currentTimeYear - añonaci;
        }else{
            var fechnac = data['fech_nac'];
            var edad = currentTimeYear - data['fech_nac'].substring(0,4);
        }//////////////////////////////////////////////////////////// TERMINA CALCULA FECHA DE NACIMIENTO Y  EDAD/////////////////////////////////
        
        var fila; //Variable Global para guardar la fila, para editar o eliminar
        opcion = 2;//ENVIAR LA OPCIÓN 2 DEL CRUD.PHP
        // fila = $(this).closest("tr"); DE LA FILA QUE SELECCIONES HACEDE AL TR DE LA TABLA
        // celda = tablaUsuarios.row(this).data()['Fecha Nac']; ACCEDE A DATOS DEL DATATABLE
        // user_id =    parseInt(fila.find('td:eq(0)').text()); OBTIENE DATOS DEL DATATABLE
         // areaAuditoria  = fila.find('td:eq(1)').text(); OBTIENE DATOS DEL DATATABLE

            if(data['gte_zona'].length == 0 ){
                 $("#gte_zona").attr("placeholder","N/A");
            }else{
                $("#gte_zona").val(data['gte_zona']);
            }

        $("#id").val(data['id']);
        $("#area_audi").val(data['area_audit']);
        $("#gte_respo").val(data['gte_tit_respo']);
        $("#region").val(data['region']);
        //$("#gte_zona").val(data['gte_zona']);
        $("#centro").val(data['num_centro']+' '+data['nom_centro']);
        $("#ciudad").val(data['ciudad']);
        $("#empleado").val(data['num_emp']+' '+data['nom_emp']);
        $("#puesto1").val(data['num_puesto']+' '+data['nom_pesto']);
        $("#fech_ing").val(data['fech_ing'].substring(0,10));
        $("#fech_nac").val(fechnac);
        $("#edad").val(edad);
        $("#sexo").val(data['sexo']);
        $("#fech_baja").val(data['fech_baja'].substring(0,10));
        $(".modal-header").css("background-color", "#007bff");
        $(".modal-header").css("color", "white" );
        $(".modal-title").text("Información de Colaborador");		
        $('#modalCRUD').modal('show');		   
    });
    /////////////////////////////////////////////////////////////  TERMINA BOTON HABRE MODAL PARA EDITAR CENTROS A CARGO///////////////////////////////////

    ///////////////////////////////////////////////////////////// BOTON HABRE MODAL PARA EDITAR AVANCE DE CENTRO///////////////////////////////////////////
    $("#tablaUsuariosAvance tbody").on("click","button.btnEditar", function (tbody, table) {
        var data = tablaUsuariosAvance.row($(this).parents("tr")).data();
        //////////////////////////////////////////////////////////// CALCULA FECHA DE NACIMIENTO Y  EDAD/////////////////////////////////////////
        let currentTimeYear = new Date().getFullYear();//obtengo fecha actual

        if(data['fech_nac'].substring(0,4) > currentTimeYear){
            var añonaci = '19'+data['fech_nac'].substring(2,4);
            var fechnac = añonaci+'-'+data['fech_nac'].substring(5,7)+'-'+data['fech_nac'].substring(8,10);
            var edad = currentTimeYear - añonaci;
        }else{
            var fechnac = data['fech_nac'];
            var edad = currentTimeYear - data['fech_nac'].substring(0,4);
        }//////////////////////////////////////////////////////////// TERMINA CALCULA FECHA DE NACIMIENTO Y  EDAD/////////////////////////////////
        
        var fila; //Variable Global para guardar la fila, para editar o eliminar
        opcion = 2;//ENVIAR LA OPCIÓN 2 DEL CRUD.PHP
        // fila = $(this).closest("tr"); DE LA FILA QUE SELECCIONES HACEDE AL TR DE LA TABLA
        // celda = tablaUsuarios.row(this).data()['Fecha Nac']; ACCEDE A DATOS DEL DATATABLE
        // user_id =    parseInt(fila.find('td:eq(0)').text()); OBTIENE DATOS DEL DATATABLE
         // areaAuditoria  = fila.find('td:eq(1)').text(); OBTIENE DATOS DEL DATATABLE

        $("#id").val(data['id']);
        $("#area_audi").val(data['area_audit']);
        $("#gte_respo").val(data['gte_respo']);
        $("#region").val(data['region']);
        $("#gte_zona").val(data['gte_zona']);
        $("#centro").val(data['num_centro']+' '+data['nom_centro']);
        $("#ciudad").val(data['ciudad']);
        $("#empleado").val(data['num_emp']+' '+data['nom_emp']);
        $("#puesto").val(data['num_puesto']+' '+data['nom_pesto']);
        $("#fech_ing").val(data['fech_ing'].substring(0,10));
        $("#fech_nac").val(fechnac);
        $("#edad").val(edad);
        $("#sexo").val(data['sexo']);
        $("#fech_baja").val(data['fech_baja'].substring(0,10));
        // $("#cbaja").val(data['causa_baja']);
        // $("#niv_acad").val(data['nivel_acad']);
        // $("#nom_carr").html("<option value='"+data['nom_carrer']+"'>"+data['nom_carrer']+"</option>");
        // $("#titulo").val(data['titulo']);
        // $("#cedula").val(data['cedula']);
        // $("#compro").val(data['comprobante']);
        // $("#nom_institu").val(data['nom_intitu']);
        // $("#fech_conc").val(data['fech_conc']);
        // $("#cat_curso").val(data['cate_cursos']);
        // $("#tip_curso").html("<option value='"+data['tipocurso']+"'>"+data['tipocurso']+"</option>");
        // $("#nom_curso").html("<option value='"+data['cursos']+"'>"+data['cursos']+"</option>");
        // $("#aExpCppl").val(data['aexplabo_coppel']);
        // $("#expCppl").val(data['explabo_coppel']);
        // $("#aExpExt").val(data['aexplabo_ext']);
        // $("#ExpExt").val(data['explabo_ext']);
        // $(".modal-header").css("background-color", "#007bff");
        // $(".modal-header").css("color", "white" );
        // $(".modal-title").text("Datos de Empleados");       
        // $('#modalCRUD').modal('show');         
    });
    /////////////////////////////////////////////////////////////  BOTON HABRE MODAL PARA EDITAR AVANCE DE CENTRO//////////////////////////////////////////

    ///////////////////////////////////////////////////////////// BOTON HABRE MODAL PARA EDITAR ESTUDIOS //////////////////////////////////////////////////
    $("#tablaprueba tbody").on("click","button.btnEditarE", function (tbody, table,e) {
        var data = tablaprueba.row($(this).parents("tr")).data();
        console.log(data);
        var selected = tablaUsuarios.row( { selected: true } );
        empE = selected.data().num_emp;
                    console.log(empE);

                // if ( selected.any() ) {
                //     opcion=11; 
                // }else{
                //     empleadoE = 90000000;
                //     opcion=11;
                // }               
        
        //switch case para poder guardar el id en base de datos y mostrar nombre el pantalla
        switch (data['nivel_acad']) {
            case '0':
                var idnom_carrE = 'Selecciona tu Nivel Academico';
                $("#niv_acadE").html("<option value='"+data['nivel_acad']+"'>"+idnom_carrE+"</option>");
            break;
            case '1':
                var idnom_carrE = 'Licenciatura';
                $("#niv_acadE").html("<option value='"+data['nivel_acad']+"'>"+idnom_carrE+"</option>");
            break;
            case '2':
                var idnom_carrE = 'Ingenieria';
                $("#niv_acadE").html("<option value='"+data['nivel_acad']+"'>"+idnom_carrE+"</option>");
            break;
            case '3':
                var idnom_carrE = 'Maestria';
                $("#niv_acadE").html("<option value='"+data['nivel_acad']+"'>"+idnom_carrE+"</option>");
            break;
            case '4':
                var idnom_carrE = 'Doctorado';
                $("#niv_acadE").html("<option value='"+data['nivel_acad']+"'>"+idnom_carrE+"</option>");
            break;
        }

        $("#opcE").val("13");
        $("#idE").val(data['idestudio']);
        $("#num_empE").val(data['num_emp']);
        $("#nom_carrE").html("<option value='"+data['nom_carrer']+"'>"+data['nom_carrer']+"</option>");
        $("#tituloE").val(data['titulo']);
        $("#cedulaE").val(data['cedula']);
        $("#comproE").val(data['comprobante']);
        $("#nom_instituE").val(data['nom_intitu']);
        $("#fech_inicE").val(data['fech_conc']);
        $("#fech_concE").val(data['fech_conc']);
        $(".modal-header").css("background-color", "#007bff");
        $(".modal-header").css("color", "white" );
        $(".modal-title").text("Modificar información Academica");       
        $('#modalEstudios').modal('show');       
    });
    ///////////////////////////////////////////////////////////// TERMINA BOTON HABRE MODAL PARA EDITAR ESTUDIOS /////////////////////////////////////////

    ///////////////////////////////////////////////////////////// AGREGA NUEVO ESTUDIO ////////////////////////////////////////////////////
    $("#btnAddEstudio").click(function(){
        selected = tablaUsuarios.row({ selected: true });
        if ( selected.any() ) {
            empleadoE = selected.data().num_emp;
            console.log(empleadoE);
        }
       
        $("#formEstudios").trigger("reset"); // LIMPIA CAMPOS DE FORMULARIO
        $("#opcE").val("12");
        $('#num_empE').val(empleadoE);
        $('#idE').empty('');
        $('#niv_acadE').val('0');
        $('#nom_carrE').val('0');
        $('#tituloE').val('0');
        $('#cedulaE').val('0');
        $('#comproE').val('0');
        $('#nom_instituE').empty('');
        $('#fech_inicE').empty('');
        $('#fech_concE').empty('');
        $(".modal-header").css( "background-color", "#17a2b8");
        $(".modal-header").css( "color", "white" );
        $(".modal-title").text("Agrega información Academica");
        $('#modalEstudios').modal('show');
    });
    ///////////////////////////////////////////////////////////// TERMINA AGREGA NUEVO ESTUDIO ////////////////////////////////////////////

    ///////////////////////////////////////////////////////////// SUBMIT GUARDA ESTUDIOS //////////////////////////////////////////////////
    $('#formEstudios').submit(function(e){ 
        e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página
        opcion = $.trim($('#opcE').val());//ENVIAR LA OPCIÓN AL CRUD.PHP
        user_id = $.trim($('#idE').val());
        num_emp = $.trim($('#num_empE').val());
        niv_acad = $.trim($('#niv_acadE').val());
        nom_carr = $.trim($('#nom_carrE').val());
        titulo = $.trim($('#tituloE').val());
        cedula = $.trim($('#cedulaE').val());
        compro = $.trim($('#comproE').val());
        nom_institu = $.trim($('#nom_instituE').val());
        fech_inic = $.trim($('#fech_inicE').val());
        fech_conc = $.trim($('#fech_concE').val());
            $.ajax({
              url: "bd/crud.php",
              type: "POST",
              datatype:"json",    
              data:  {user_id:user_id, num_emp:num_emp,niv_acad:niv_acad, nom_carr:nom_carr, titulo:titulo, cedula:cedula, compro:compro ,nom_institu:nom_institu,
                      fech_inic:fech_inic,fech_conc:fech_conc,opcion:opcion},    
              success: function(data) {
                tablaprueba.ajax.reload( function ( json ) {
                    $('#tablaprueba').val( json.lastInput ); //al guardar refreca tabla sin recargar toda la pagina
                });
                tablaUsuarios.ajax.reload( function ( json ) {
                    $('#tablaUsuarios').val( json.lastInput ); //al guardar refreca tabla sin recargar toda la pagina
                    // // tablaUsuarios.row(19).reload().draw();
                    // var data = tablaUsuarios.row($(this).parents("tr")).data();
                    // console.log(data);
                });
                tablaUsuariosAvance.ajax.reload( function ( json ) {
                    $('#tablaUsuariosAvance').val( json.lastInput ); //al guardar refreca tabla sin recargar toda la pagina
                });
                alertify.success('Guardado correctamente');
               }
            });                 
        $('#modalEstudios').modal('hide');
    });
    ///////////////////////////////////////////////////////////// SUBMIT GUARDA ESTUDIOS //////////////////////////////////////////////////

////// BORRAR REGISTRO ESTUDIOS         ////////
    $("#tablaprueba tbody").on("click","button.btnBorrarE", function (tbody, table) {
    // $(document).on("click", ".btnBorrarE", function(){
    //     fila = $(this);           
    //     user_id = parseInt($(this).closest('tr').find('td:eq(1)').text());
    var data = tablaprueba.row($(this).parents("tr")).data();
    id_studio= data['idestudio'];
    num_emp = data['num_emp'];    
        opcion = 3; //eliminar        
        
        alertify.confirm(
            "¿Está seguro de Borrar su Estudio en "+data['nom_carrer']+"?",
            function(){$.ajax({
              url: "bd/crud.php",
              type: "POST",
              datatype:"json",    
              data:  {opcion:opcion, user_id:id_studio, num_emp:num_emp},    
              success: function() {
                  // tablaUsuarios.row(id_studio.parents('tr')).remove().draw();
                tablaprueba.ajax.reload( function ( json ) {
                    $('#tablaprueba').val( json.lastInput ); //al guardar refreca tabla sin recargar toda la pagina
                });
                tablaUsuarios.ajax.reload( function ( json ) {
                    $('#tablaUsuarios').val( json.lastInput ); //al guardar refreca tabla sin recargar toda la pagina
                });
                tablaUsuariosAvance.ajax.reload( function ( json ) {
                    $('#tablaUsuariosAvance').val( json.lastInput ); //al guardar refreca tabla sin recargar toda la pagina
                });
                alertify.success('Registro Borrado'); 
               }
            }) },
            function(){alertify.error('Acción Cancelada')}
        );           
     });
////// TERMINA BORRAR REGISTRO ESTUDIOS ////////

///////////////////////////////////////////////////// BOTON HABRE MODAL PARA EDITAR CURSOS ///////////////////////////////////////////
    $("#tablaCursos tbody").on("click","button.btnEditarC", function (tbody, table) {
        var data = tablaCursos.row($(this).parents("tr")).data();
        //console.log(data);
        //switch case para poder guardar el id en base de datos y mostrar nombre el pantalla
        switch (data['cate_cursos']) {
            case 'Selecciona Categoria del Curso':
                $("#cat_curso").val('0');
            break;
            case 'Coorporativo':
                $("#cat_curso").val('1');
            break;
            case 'Metodologías Obra y Construcción':
                $("#cat_curso").val('2');
            break;
            case 'Finanzas':
                $("#cat_curso").val('3');
            break;
            case 'Liderazgo':
                $("#cat_curso").val('4');
            break;
            case 'Idiomas':
                $("#cat_curso").val('5');
            break;
            case 'Administración y/o Planificaicón Proyectos':
                 $("#cat_curso").val('6');
            break;
            case 'Auditoria':
                $("#cat_curso").val('7');
            break;
            case 'TI':
                $("#cat_curso").val('8');
            break;
            case 'KPI´S':
                $("#cat_curso").val('9');
            break;
            case 'GBD':
                $("#cat_curso").val('10');
            break;
            case 'Desarrollo':
                $("#cat_curso").val('11');
            break;
            case 'ETL´S':
                $("#cat_curso").val('12');
            break;
            case 'Administrativo':
                $("#cat_curso").val('13');
            break;
        }
        //console.log(data['cursos']);
        //switch case para poder guardar el id en base de datos y mostrar nombre el pantalla
        switch (data['cursos']) {
            case '0':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Selecciona tu curso</option>");
            break;
            case '2':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Diseños y planos</option>");
            break;
            case '3':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Construcción y ejecución de obras</option>");
            break;
            case '4':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Análisis y valuación de proyectos inmobiliarios</option>");
            break;
            case '5':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Presupuestos y Control Presupuestal</option>");
            break;
            case '6':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Diplomado En Educación Financiera</option>");
            break;
            case '7':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Gestion ante autoridades</option>");
            break;
            case '8':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Gestión y Coaching</option>");
            break;
            case '9':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Adaptacion Al Cambio Y Proactividad Personal</option>");
            break;
            case '10':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Liderazgo En Acción Y Trabajo En Equipo</option>");
            break;
            case '11':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Ingles</option>");
            break;
            case '14':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Administración de proyectos y Planeación estratégica</option>");
            break;
            case '15':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Metodología Básica Para La Administración De Proyectos</option>");
            break;
            case '16':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Scrum Fundamentals</option>");
            break;
            case '17':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Dirección De Proyectos - Basado En Pmbok Versión 6</option>");
            break;
            case '18':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Scrum Foundations Professional Certificate</option>");
            break;
            case '19':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Administración de Proyectos</option>");
            break;
            case '20':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Scrum Fundamentals</option>");
            break;
            case '21':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Lean Six Sigma - Yellow Belt</option>");
            break;
            case '22':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Lean Six Sigma - Green Belt</option>");
            break;
            case '23':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Auditoria</option>");
            break;
            case '24':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Creacion De Un Departamento De Auditoria Con Valor Agregado</option>");
            break;
            case '25':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Auditoria Interna Un Aliado Estrategico</option>");
            break;
            case '26':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Iso 31000 Risk Manager</option>");
            break;
            case '27':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Auditor Líder Iso/Iec 37001:2016 & Iso 19011:2018</option>");
            break;
            case '28':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Auditor Líder Iso/Iec 27001:2013</option>");
            break;
            case '29':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Redacción Del Informe De Auditoría</option>");
            break;
            case '30':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Auditorías Internas de la Calidad Iso 9001:2008 Metodología</option>");
            break;
            case '31':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Introducción A La Norma Iso/Iec 9001:2008</option>");
            break;
            case '32':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Auditoría Pública</option>");
            break;            
            case '33':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Metodologia Para La Investigación Del Fraude</option>");
            break;
            case '34':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Como Optimizar El Control Interno Para Detección Y Control Del Fraude</option>");
            break;
            case '35':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Capacitación En Materia De Pld/Ft</option>");
            break;
            case '36':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Marco Integrado Coso/Erm</option>");
            break;            
            case '37':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Análisis De Datos Y Detección De Fraudes Con Herramientas Caat</option>");
            break;
            case '38':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Ccna Routing & Switching</option>");
            break;
            case '39':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Ccna1 : Networking Basic Cisco System</option>");
            break;
            case '40':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Ccna 2: Routers And Routing Basic Cisco System</option>");
            break;            
            case '41':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Ccna 3: Switching Basic And Intermediate Routing Cisco System</option>");
            break;
            case '42':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Ccna R&s: Introduction To Network</option>");
            break;
            case '43':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Ccna R&s: Connecting Networks</option>");
            break;
            case '44':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Ccna R&s: Scaling Networks</option>");
            break;            
            case '45':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Ccna R&s: Routing & Switching Essentials</option>");
            break;
            case '46':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Core Solutions Of Microsoft Skype For Business 2015</option>");
            break;
            case '47':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Active Directory Services With Windows Server</option>");
            break;
            case '48':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Implementing Microsoft Azure Infraestructure Solutions</option>");
            break;            
            case '49':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Networking In Google Cloud: Defining And Implementing Networks</option>");
            break;
            case '50':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Networking In Google Cloud: Hybrid Connectivity And Networking Management</option>");
            break;
            case '51':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Itil V3 Fundation</option>");
            break;
            case '52':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Itil V4 Foundations</option>");
            break;            
            case '53':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Itil 4 Foundation Cpd</option>");
            break;
            case '54':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Auditoria A Los Controles Generales De Ti</option>");
            break;
            case '55':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Evaluación De Inversión De Proyectos De Ti</option>");
            break;
            case '56':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Medición Del Tamaño Funcional Con Cosmic</option>");
            break;            
            case '57':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Advanced Coldfusion Mx Development</option>");
            break;
            case '58':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Coso-Erm 2017. Alineación del Riesgo con la Estrategia y el Desempeño</option>");
            break;
            case '59':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Ccsp Certified Cloud Security Professional</option>");
            break;
            case '60':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Cisa</option>");
            break;            
            case '61':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Cyberark Trustee</option>");
            break;
            case '62':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Csf: Cyber Security Framewoork</option>");
            break;
            case '63':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Profesional en Ciberseguridad con Base en Iso/Iec 27032:2012</option>");
            break;
            case '64':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Advanced Administration and Troubleshooting For Ase</option>");
            break;            
            case '65':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Programa Ejecutivo en Seguridad de la Información</option>");
            break;
            case '66':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Seguridad de la Información</option>");
            break;
            case '67':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Sistemas de Gestión de Seguridad de la Información</option>");
            break;
            case '68':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Threat Defense Expert: Ransomware Edition</option>");
            break;            
            case '69':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Fundamentos de Cobit</option>");
            break;
            case '70':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Iso/Iec 27001 Information Security Foundation</option>");
            break;
            case '71':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Iso/Iec 27005 Information Security Risk Management</option>");
            break;
            case '72':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Ethical Hacking Foundation</option>");
            break;            
            case '73':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Iniciación Al Hacking Ético</option>");
            break;
            case '74':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Auditando La Nube</option>");
            break;
            case '75':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Google Cloud Product Fundamentals</option>");
            break;
            case '76':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Google Cloud Platform Fundamentals: Core Infraestructure</option>");
            break;            
            case '77':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Csx Cybersecurity Audit</option>");
            break;
            case '78':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Cyber Security Foundation Professional Certificate</option>");
            break;
            case '79':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Cyberark Certified Trustee</option>");
            break;
            case '80':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Cybersecurity Essentials</option>");
            break;            
            case '81':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Ndg Linux Essentials</option>");
            break;
            case '82':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Cyber Security Foundation</option>");
            break;
            case '83':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Analisis y ciencia de datos</option>");
            break;
            case '84':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Business Intelligence Technical Developer</option>");
            break;            
            case '85':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Certificación En Microsoft Sql Server 2005</option>");
            break;
            case '86':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>System And Database Administration Ase Server 12.5</option>");
            break;
            case '87':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Maintaining A Microsoft Sql Server 2005 Database</option>");
            break;
            case '88':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Upgrading To Microsoft Sql Server 2005</option>");
            break;            
            case '89':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Administración De Microsoft Exchange 2016</option>");
            break;
            case '90':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Desarrollo de Aplicaciones con Tecnología de Plataforma .Net</option>");
            break;
            case '91':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Desarrollo de Lenguajes C# / Php</option>");
            break;
            case '92':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Visual Basic Básico</option>");
            break;            
            case '93':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Sun Sl.275 Java Programming Languaje</option>");
            break;
            case '94':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Flex 2.0</option>");
            break;
            case '95':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Idea Script Basico</option>");
            break;
            case '96':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Idea Script Intermedio</option>");
            break;            
            case '97':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Idea Avanzado</option>");
            break;
            case '98':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Seminario Idea</option>");
            break;
            case '99':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Análisis De Datos Y Detección De Fraudes Con Herramientas Caat</option>");
            break;
            case '100':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Diplomado En Comunicación Oral Y Presentación De Negocios.</option>");
            break;            
            case '101':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Obtención De Información Y Evidencia Mediante Una Entrevista</option>");
            break;
            case '102':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>El Adn De La Competencia</option>");
            break;
            case '12':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Frances</option>");
            break;
            case '13':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Mandarin</option>");
            break;            
            case '103':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Diplomado En Soft Skills Y Habilidades Directivas</option>");
            break;
            case '104':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Ingenierias y especialidades</option>");
            break;
            case '105':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Interpretación E Implementación Iso 22301 Continuidad Del Negocio</option>");
            break;
            case '106':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Innovación Tecnológica</option>");
            break;            
            case '107':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Fundamento De Análisis De Negocios</option>");
            break;
            case '108':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Sistema Operativo Unix</option>");
            break;
            case '109':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Iso 22301 Business Continuity Management Foundation</option>");
            break;
            case '110':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Diplomado En Seguros</option>");
            break;            
            case '111':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Diplomado Excel </option>");
            break;
            case '112':
                $("#nom_curso").html("<option value='"+data['cursos']+"'>Técnico En Informatica</option>");
            break;
        }        

        $("#opcC").val("15");
        $("#idC").val(data['idcurso']);
        $("#num_empC").val(data['num_emp']);
        // $("#cat_curso").val(data['cate_cursos']);        
        $("#tip_curso").html("<option value='"+data['tipocurso']+"'>"+data['tipocurso']+"</option>");
        //$("#nom_curso").html("<option value='"+data['cursos']+"'>"+data['cursos']+"</option>");
        $(".modal-header").css("background-color", "#007bff");
        $(".modal-header").css("color","white");
        $(".modal-title").text("Modificar información de Curso");       
        $('#modalCurso').modal('show');
    });
///////////////////////////////////////////////////// TERMINA BOTON HABRE MODAL PARA EDITAR CURSOS ////////////////////////////////////

///////////////////////////////////////////////////// AGREGA NUEVO CURSO                   ///////////////////////////////////////////
    $("#btnAddCurso").click(function(){
        selected = tablaUsuarios.row({ selected: true });
        if ( selected.any() ) {
            empleadoE = selected.data().num_emp;
        }
       
        // $("#formCursos").trigger("reset"); // LIMPIA CAMPOS DE FORMULARIO
        $("#opcC").val("16");
        $('#num_empC').val(empleadoE);
        $('#idC').empty('');
        $('#cat_curso').val('0');
        $('#tip_curso').val('0');
        $('#nom_curso').val('0');
        $(".modal-header").css( "background-color", "#17a2b8");
        $(".modal-header").css( "color", "white" );
        $(".modal-title").text("Agrega nuevo Curso");
        $('#modalCurso').modal('show');
    });
///////////////////////////////////////////////////// TERMINA AGREGA NUEVO CURSO           ///////////////////////////////////////////

///////////////////////////////////////////////////// SUBMIT GUARDA CURSOS ///////////////////////////////////////////
        $('#formCursos').submit(function(e){                         
        e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página
        opcion = $.trim($('#opcC').val());//ENVIAR LA OPCIÓN AL CRUD.PHP
        user_id = $.trim($('#idC').val());
        empleadoC = $.trim($('#num_empC').val());
        cate_cursos = $.trim($('#cat_curso').val());
        tipo_curso = $.trim($('#tip_curso').val());
        cursos = $.trim($('#nom_curso').val());
            $.ajax({
              url: "bd/crud.php",
              type: "POST",
              datatype:"json",    
              data:  {user_id:user_id, empleadoC:empleadoC,cate_cursos:cate_cursos,tipo_curso:tipo_curso, cursos:cursos,opcion:opcion},    
              success: function(data) {
                tablaCursos.ajax.reload( function ( json ) {
                    $('#tablaCursos').val( json.lastInput ); //Al guardar refreca tabla sin recargar toda la pagina
                });
                tablaUsuarios.ajax.reload( function ( json ) {
                    $('#tablaUsuarios').val( json.lastInput ); //al guardar refreca tabla sin recargar toda la pagina
                });
                tablaUsuariosAvance.ajax.reload( function ( json ) {
                    $('#tablaUsuariosAvance').val( json.lastInput ); //al guardar refreca tabla sin recargar toda la pagina
                });
                alertify.success('Guardado correctamente');
               }
            });                 
            $('#modalCurso').modal('hide');                                                          
        });
///////////////////////////////////////////////////// TERMINA SUBMIT GUARDA CURSOS ///////////////////////////////////////////

////// BORRAR REGISTRO CURSOS         ////////
    $("#tablaCursos tbody").on("click","button.btnBorrarC", function (tbody, table) {
    // $(document).on("click", ".btnBorrarE", function(){
    //     fila = $(this);           
    //     user_id = parseInt($(this).closest('tr').find('td:eq(1)').text());
    var data = tablaCursos.row($(this).parents("tr")).data();
    id_curso= data['idcurso'];
    num_emp = data['num_emp'];    
        opcion = 17; //eliminar        
        
        alertify.confirm(
            "¿Está seguro de borrar su estudio en "+data['cursos']+"?",
            function(){$.ajax({
              url: "bd/crud.php",
              type: "POST",
              datatype:"json",    
              data:  {opcion:opcion, user_id:id_curso, num_emp:num_emp},    
              success: function() {
                tablaCursos.ajax.reload( function ( json ) {
                    $('#tablaCursos').val( json.lastInput ); //al guardar refreca tabla sin recargar toda la pagina
                });
                tablaUsuarios.ajax.reload( function ( json ) {
                    $('#tablaUsuarios').val( json.lastInput ); //al guardar refreca tabla sin recargar toda la pagina
                });
                tablaUsuariosAvance.ajax.reload( function ( json ) {
                    $('#tablaUsuariosAvance').val( json.lastInput ); //al guardar refreca tabla sin recargar toda la pagina
                });
                alertify.success('Registro Borrado'); 
               }
            }) },
            function(){alertify.error('Acción Cancelada')}
        );           
     });
////// TERMINA BORRAR REGISTRO CURSOS ////////

///////////////////////////////////////////////////// BOTON HABRE MODAL PARA EDITAR EXP EXT ///////////////////////////////////////////
    $("#tablaExpExt tbody").on("click","button.btnEditarExpExt", function (tbody, table) {
        var data = tablaExpExt.row($(this).parents("tr")).data();
        // console.log(data);
        $("#opcExpE").val("21");
        $("#idExpE").val(data['idexpext']);
        $("#num_empExpE").val(data['num_emp']);
        $("#fecha").val(data['fexplabo_coppel']);
        $("#empresa").val(data['empexplabo_ext']);
        $("#puesto").val(data['pexplabo_ext']);
        $("#actividad").val(data['actexplabo_ext']);
        $("#antiguedad").val(data['antexplabo_coppel']);
        $(".modal-header").css("background-color","#007bff");
        $(".modal-header").css("color","white");
        $(".modal-title").text("Modificar información de Empleo");       
        $('#modalExpExt').modal('show');
    });
///////////////////////////////////////////////////// TERMINA BOTON HABRE MODAL PARA EDITAR EXP EX ////////////////////////////////////

///////////////////////////////////////////////////// AGREGA NUEVA EXP EX                   ///////////////////////////////////////////
    $("#btnAddExpExt").click(function(){
        selected = tablaUsuarios.row({ selected: true });
        if ( selected.any() ) {
            empleadoE = selected.data().num_emp;
        }
       
        $("#formExpExt").trigger("reset"); // LIMPIA CAMPOS DE FORMULARIO
        $("#opcExpE").val("20");
        $('#num_empExpE').val(empleadoE);
        // $('#idExpE').empty('');
        // $('#cat_curso').empty('');
        // $('#tip_curso').empty('');
        // $('#nom_curso').empty('');
        $(".modal-header").css( "background-color", "#17a2b8");
        $(".modal-header").css( "color", "white" );
        $(".modal-title").text("Agregar Experiencia Laboral Externa");
        $('#modalExpExt').modal('show');
    });
///////////////////////////////////////////////////// TERMINA AGREGA NUEVA EXP EX           ///////////////////////////////////////////

///////////////////////////////////////////////////// SUBMIT GUARDA EXP EX ///////////////////////////////////////////
        $('#formExpExt').submit(function(e){                         
        e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página
        opcion    = $.trim($('#opcExpE').val());//ENVIAR LA OPCIÓN AL CRUD.PHP
        user_id   = $.trim($('#idExpE').val());
        empleadoC = $.trim($('#num_empExpE').val());
        fechaExt  = $.trim($('#fecha').val());
        empreExt  = $.trim($('#empresa').val());
        puestExt  = $.trim($('#puesto').val());
        actExt    = $.trim($('#actividad').val());
        antigExt  = $.trim($('#antiguedad').val());
            $.ajax({
              url: "bd/crud.php",
              type: "POST",
              datatype:"json",    
              data:  {opcion:opcion,user_id:user_id, empleadoC:empleadoC,fechaExt:fechaExt,empreExt:empreExt,puestExt:puestExt,actExt:actExt,antigExt:antigExt},    
              success: function(data) {
                tablaExpExt.ajax.reload( function ( json ) {
                    $('#tablaExpExt').val( json.lastInput ); //Al guardar refreca tabla sin recargar toda la pagina
                });
                tablaUsuarios.ajax.reload( function ( json ) {
                    $('#tablaUsuarios').val( json.lastInput ); //al guardar refreca tabla sin recargar toda la pagina
                });
                tablaUsuariosAvance.ajax.reload( function ( json ) {
                    $('#tablaUsuariosAvance').val( json.lastInput ); //al guardar refreca tabla sin recargar toda la pagina
                });
                tablaCursosCorp.ajax.reload( function ( json ) {
                    $('#tablaCursosCorp').val( json.lastInput ); //al guardar refreca tabla sin recargar toda la pagina
                });
                alertify.success('Guardado correctamente');
               }
            });                 
            $('#modalExpExt').modal('hide');                                                          
        });
///////////////////////////////////////////////////// TERMINA SUBMIT GUARDA EXP EX ///////////////////////////////////////////

////// BORRAR REGISTRO EXP EX         ////////
    $("#tablaExpExt tbody").on("click","button.btnBorrarExpExt", function (tbody, table) {
    // $(document).on("click", ".btnBorrarE", function(){
    //     fila = $(this);           
    //     user_id = parseInt($(this).closest('tr').find('td:eq(1)').text());
    var data = tablaExpExt.row($(this).parents("tr")).data();
    id_curso= data['idexpext'];
    num_emp = data['num_emp'];    
        opcion = 22; //eliminar        
        
        alertify.confirm(
            "¿Está seguro de borrar su empleo en "+data['empexplabo_ext']+"?",
            function(){$.ajax({
              url: "bd/crud.php",
              type: "POST",
              datatype:"json",    
              data:  {opcion:opcion, user_id:id_curso, num_emp:num_emp},    
              success: function() {
                tablaExpExt.ajax.reload( function ( json ) {
                    $('#tablaExpExt').val( json.lastInput ); //al guardar refreca tabla sin recargar toda la pagina
                });
                tablaUsuarios.ajax.reload( function ( json ) {
                    $('#tablaUsuarios').val( json.lastInput ); //al guardar refreca tabla sin recargar toda la pagina
                });
                tablaUsuariosAvance.ajax.reload( function ( json ) {
                    $('#tablaUsuariosAvance').val( json.lastInput ); //al guardar refreca tabla sin recargar toda la pagina
                });
                alertify.success('Registro Borrado'); 
               }
            }) },
            function(){alertify.error('Acción Cancelada')}
        );           
     });
////// TERMINA BORRAR REGISTRO EXP EX ////////

///////////////////////////////////////////////////// BTN HABRE MODAL PARA EDITAR CURSOS CORP ///////////////////////////////////////////
    $("#tablaCursosCorp tbody").on("click","button.btnEditarC", function (tbody, table) {
        var data = tablaCursosCorp.row($(this).parents("tr")).data();
        console.log(data);

        $("#opcCorpC").val("27");
        $("#idCorpC").val(data['idccorp']);
        $("#num_empCorpC").val(data['num_emp']);
        $("#titulo").val(data['titulo']);
        $("#timeClockhrs").val(data['periodo_inic']);
        $("#timeClockMin").val(data['periodo_fin']);
        $("#timeDuracion").val(data['duracion']);
        $("#imparte").val(data['empresa_imparte']);
        $("#escuela").val(data['escuela']);
        $("#estatus").val(data['estatus']);
        $("#constancia").val(data['const_certif']);
        $(".modal-header").css("background-color","#007bff");
        $(".modal-header").css("color","white");
        $(".modal-title").text("Modificar información de Curso Corporativo");       
        $('#CursoCORP').modal('show');
    });
///////////////////////////////////////////////////// TERMINA BTN HABRE MODAL PARA EDITAR CURSOS CORP ////////////////////////////////////

///////////////////////////////////////////////////// SUBMIT GUARDA CURSOS CORP ///////////////////////////////////////////
        $('#formCursosCorp').submit(function(e){                         
        e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página
        opcion       = $.trim($('#opcCorpC').val());//ENVIAR LA OPCIÓN AL CRUD.PHP
        user_id      = $.trim($('#idCorpC').val());
        empleadoC    = $.trim($('#num_empCorpC').val());
        tituloCC     = $.trim($('#titulo').val());
        timeIncioCC  = $.trim($('#timeClockhrs').val());
        timeFinCC    = $.trim($('#timeClockMin').val());
        duracionCC   = $.trim($('#timeDuracion').val());
        imparteCC    = $.trim($('#imparte').val());
        escuelaCC    = $.trim($('#escuela').val());
        estatusCC    = $.trim($('#estatus').val());
        constanciaCC = $.trim($('#constancia').val());
            $.ajax({
              url: "bd/crud.php",
              type: "POST",
              datatype:"json",    
              data: {opcion:opcion,user_id:user_id, empleadoC:empleadoC,tituloCC:tituloCC,timeIncioCC:timeIncioCC,timeFinCC:timeFinCC,duracionCC:duracionCC,imparteCC:imparteCC,escuelaCC:escuelaCC,estatusCC:estatusCC,constanciaCC:constanciaCC},    
              success: function(data) {
                tablaExpExt.ajax.reload( function ( json ) {
                    $('#tablaExpExt').val( json.lastInput ); //Al guardar refreca tabla sin recargar toda la pagina
                });
                tablaUsuarios.ajax.reload( function ( json ) {
                    $('#tablaUsuarios').val( json.lastInput ); //al guardar refreca tabla sin recargar toda la pagina
                });
                tablaUsuariosAvance.ajax.reload( function ( json ) {
                    $('#tablaUsuariosAvance').val( json.lastInput ); //al guardar refreca tabla sin recargar toda la pagina
                });
                tablaCursosCorp.ajax.reload( function ( json ) {
                    $('#tablaCursosCorp').val( json.lastInput ); //al guardar refreca tabla sin recargar toda la pagina
                });
                alertify.success('Guardado correctamente');
               }
            });                 
            $('#CursoCORP').modal('hide');                                                          
        });
///////////////////////////////////////////////////// TERMINA SUBMIT GUARDA CURSOS CORP ///////////////////////////////////////////



// CIRRE DE MODAL´S    
    ////// CIERRA MODAL EXP EXT
    $("#cierreModalExt").click(function(){
        $('#modalExpExt').modal('hide');
    });

    //CIERRA MODAL AVANCE
    $("#cierreModal").click(function(){
        $('#modalCRUD').modal('hide');
    });
       //CIERRA MODAL CURSO
    $("#cierreModalC").click(function(){
        $('#modalCurso').modal('hide');
    });

    //CIERRA MODAL CURSO CORPO
    $("#cierreModalCursoCorpo").click(function(){
        $('#CursoCORP').modal('hide');
    });
//  TERMINA CIRRE DE MODAL´S


    //LLAMADA A CATALOGO NIVEL ACADEMICO Y CARRERAS
        $("#niv_acadT").change(function(){

            $("#niv_acadT option:selected").find(function(){

                id_nivacad = $(this).find(":selected").val();
                console.log(id_nivacad);
                $.post("bd/crud.php",{id_nivacad:id_nivacad,opcion:10},function(html,data){
                    removeChild(id_nivacad);
                    $("#nom_carrT").html(htmx);
                });
            });
        })    

// SELECT´S MODAL
    //LLAMADA A CATALOGO NIVEL ACADEMICO Y CARRERAS
        $("#niv_acadE").change(function(){

            // $("#niv_acad").html("<option value='".$rowC['nombrecarrera']."'>".$rowC['nombrecarrera']."</option>");
            $("#niv_acadE option:selected").find(function(){
                
                id_nivacad = $(this).find(":selected").val();
                console.log(id_nivacad);
                // $(this).find(":selected").empty();
                // $("#niv_acad option:selected").empty();
                $.post("bd/crud.php",{id_nivacad:id_nivacad,opcion:5},function(html,data){
                    $("#nom_carrE").html(html);
                    // formEstudios.removeChild(formEstudios,id_nivacad);
                });
            });
            // $("#niv_acad").find('option:selected').empty();
        })

    ////////////////////////////////////////////LLAMADA A CATALOGO CURSOS//////////////////////////////////////////
    // CATALOGO SUBCATEGORIAS
        $("#cat_curso").change(function(){

            $("cat_curso option:selected").find(function(){
                
                id_catcurso = $('#cat_curso').find(":selected").val();
                console.log(id_catcurso);

                $.post("bd/crud.php", {id_catcurso:id_catcurso,opcion:6},function(html,data){
                    $("#tip_curso").html(html);
                });
            });
        })

    // CATALOGO CURSOS
        $("#tip_curso").change(function(){

            $("tip_curso option:selected").find(function(){

                nom_curso = $('#tip_curso ').find(":selected").val();
                // nom_curso = $(this).attr('name');
                // nom_curso = $(this).find(":selected").val('name');
                console.log(nom_curso);

                $.post("bd/crud.php",{nom_curso:nom_curso,opcion:7},function(html,data){
                    //console.log(html);
                    $("#nom_curso").html(html);
                });
            });
        })
    //////////////////////////////////////////// TERMINA LLAMADA A CATALOGO CURSOS//////////////////////////////////////////
// TERMINA SELECT´S MODAL

///// CAMBIO ENTRE MODULOS Y MODIFICA CLASES
$(document).ready(function() {
    $('.cajactroCargo').hide("true");//centro a cargo por default encondido
    $('.cardMiInfo').hide("fast");//Card Mi Información por defauld escondido
    $('#miTablero').addClass("active");

    $("#miTablero").click(function(){ 
        $('.cajamiTablero').show("slow");
            $('.cardTablero').show("slow");
            $('#miTablero').addClass("active");
            $('.cardMiInfo').hide("fast");
        $('.cajamiInfo').hide("fast");
        $('.cajactroCargo').hide("fast");
        $('#miInfo').removeClass("active");
        $('#ctroCargo').removeClass("active");
        // $(".cajactroCargo").removeClass('card-header card-header-success');
        // $(".cajamiTablero").removeClass('btn btn-success bt round dropdown-toggle');
        // $(".cajactroCargo").addClass('card-header card-header-warning');
        // $(".cajamiTablero").addClass('btn btn-warning bt round dropdown-toggle');
    });
    $("#miInfo").click(function(){
        $('.cajamiInfo').show("slow");
            $('.cardMiInfo').show("slow");
            $('#miInfo').addClass("active");
            $('.cardTablero ').hide("fast");
        $('.cajamiTablero').hide("fast");
        $('.cajactroCargo').hide("fast");
        $('#miTablero').removeClass("active");
        $('#ctroCargo').removeClass("active");
    });
    $("#ctroCargo").click(function(){
        $('.cajactroCargo').show("slow");
            $('.cardCtroCargo').show("slow");
            $('#ctroCargo').addClass("active");
        $('.cajamiInfo').hide("fast");
        $('.cajamiTablero').hide("fast");
        $('#miTablero').removeClass("active");
        $('#miInfo').removeClass("active");

    });
   $("#myInfo").click(function(){
        $('.cajamiInfo').show("slow");
            $('.cardMiInfo').show("slow");
            $('#miInfo').addClass("active");
            $('.cardTablero ').hide("fast");
        $('.cajamiTablero').hide("fast");
        $('.cajactroCargo').hide("fast");
        $('#miTablero').removeClass("active");
        $('#ctroCargo').removeClass("active");
    });
});    


//NOTIFICACIONES
$("#notification").click(function() {
    alert('entro');
            var val = parseInt($('#notification').find('.badge').text());
            // console.log(val);
            // Check for the button clicked
            if (val >= 1 && val <= 4) {
                $('#notification').find('.badge').text(val - 1);
                $('.badge').removeClass('bg-danger');
                $('.badge').removeClass('bg-success');
                $('.badge').addClass('bg-warning');
            } else if (val >= 5) {
                    $('#notification').find('.badge').text(val - 1);
                    $('.badge').removeClass('bg-warning');
                    $('.badge').removeClass('bg-success');
                    $('.badge').addClass('bg-danger');
            }else{
                    $('#notification').find('.badge').text(0);
                    $('.badge').removeClass('bg-warning');
                    $('.badge').removeClass('bg-danger');
                    $('.badge').addClass('bg-success');
            }

            // if ($(this).hasClass('dropdown-item 1')) {
            //     alert('entro1');
            //     $('#notification').find('.badge').text(val - 1);
            // } else if ($(this).hasClass('btn-success')) {
            //     $('#notification').find('.badge').text(val + 1);
            // }
        });

const time_picker_element = document.querySelector('.time-picker');

const hr_element = document.querySelector('.time-picker .hour .hr');
const min_element = document.querySelector('.time-picker .minute .min');

const hr_up = document.querySelector('.time-picker .hour .hr-up');
const hr_down = document.querySelector('.time-picker .hour .hr-down');

const min_up = document.querySelector('.time-picker .minute .min-up');
const min_down = document.querySelector('.time-picker .minute .min-down');

let d = new Date();

let hour = d.getHours();
let minute = d.getMinutes();
setTime();

// EVENT LISTENERS
hr_up.addEventListener('click', hour_up);
hr_down.addEventListener('click', hour_down);

min_up.addEventListener('click', minute_up);
min_down.addEventListener('click', minute_down);

hr_element.addEventListener('change', hour_change);
min_element.addEventListener('change', minute_change);

function hour_change (e) {
    if (e.target.value > 23) {
        e.target.value = 23;
    } else if (e.target.value < 0) {
        e.target.value = '00';
    }

    if (e.target.value == "") {
        e.target.value = formatTime(hour);
    }

    hour = e.target.value;
}

function minute_change (e) {
    if (e.target.value > 59) {
        e.target.value = 59;
    } else if (e.target.value < 0) {
        e.target.value = '00';
    }

    if (e.target.value == "") {
        e.target.value = formatTime(minute);
    }

    minute = e.target.value;
}

function hour_up () {
    hour++;
    if (hour > 23) {
        hour = 0;
    }
    setTime();
}
function hour_down () {
    hour--;
    if (hour < 0) {
        hour = 23;
    }
    setTime();
}

function minute_up () {
    minute++;
    if (minute > 59) {
        minute = 0;
        hour++;
    }
    setTime();
}
function minute_down () {
    minute--;
    if (minute < 0) {
        minute = 59;
        hour--;
    }
    setTime();
}

function setTime () {
    hr_element.value = formatTime(hour);
    min_element.value = formatTime(minute);
    time_picker_element.dataset.time = formatTime(hour) + ':' + formatTime(minute);
}

function formatTime (time) {
    if (time < 10) {
        time = '0' + time;
    }
    return time;
}

//////////////////////////////////////////// GRAFICO CIRCULAR Y BARRA DE PROGRESO //////////////////////////////////////////////

    // $(".circle").knob({
    //     "min":0,
    //     "max":100,
    //     "width":250,
    //     "height":250,
    // })

            // $.ajax({
            //   url: "bd/crud.php",
            //   type: "POST",
            //   datatype:"json",    
            //   data:  {opcion:opcion},    
            //   success: function(data) {
            //     var datos = JSON.parse(data);
            //     console.log(datos);
                
            //     if(datos.)


            //     baja = 0;
            //     for (var i = 0; i < datos.length; i++) {
            //         i +
            //         console.log(i);

            //         for(a in datos) {

            //           if (datos[+i].causa_baja == '' || datos[+i].causa_baja == null) {
            //             baja = baja + 1;
            //             console.log('El valor de a es ' + datos[+i].causa_baja);
            //             console.log(baja);
            //           }
            //         }
            //     }




            //     var arr =  {"campo1":{"a":"b"},"campo2":{"a":"c"},"campo3":{"a":"d"},"campo4":{"a":"e"}};

            //     for(a in arr) {
            //       if (arr[a].a !== '' && arr[a].a !== null) {
            //         console.log('El valor de a es ' + arr[a].a);
            //       }
            //     }

            //     for(a in as) {
            //         for(b = 0; b = as ; b++){
            //           if (as.causa_baja !== '' && as.causa_baja !== null) {
            //             console.log('El valor de a es ' + as.causa_baja);
            //           }
            //         }  
            //     }


            //     contador =0;
            //     for(as in ''){
            //         contador ++;
            //         console.log(as);
            //     }
            //     if(as[0]['causa_baja'] == null)
            //         console.log('vacio');

            // },
            // });                 

        // var percent = 0;
     
        // timerId = setInterval(function() {
        //     //increment progress bar
        //     percent += 5;
        //     $('.progress-bar').css('width', percent+'%');
        //     // $('.progress-bar').attr('aria-valuenow', percent);
        //     $('.progress-bar').css('background-color','green');
        //     $('.progress-bar').css('border-radius','10px');
        //     $('.progress-bar').text(percent+'%');

        //     //completo
        //     if (percent == 100) {
        //         clearInterval(timerId);
        //         // $('.information').show();
        //     }
     
        // }, 500);
//////////////////////////////////////////// TERMINA GRAFICO CIRCULAR DE PROGRESO ////////////////////////////////////////////// 

});