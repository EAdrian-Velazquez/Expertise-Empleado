<?php
  // Programador: Adrian Velazquez.
  // Programado entre Julio-2023 / Nov-2023.

    session_start();
        if (!isset($_SESSION['log']) == 1){
            print_r($_SESSION);
            header('Location: ../login_audi.php');
        die();
        }
    // include('../assets/php/conexiones.php');//CONEXION TRADICIONAL
    // include('bd/conexion.php'); //CONEXIÓN PDO
    include_once('bd/main.php'); //CONEXIÓN PDO
    // $objeto      = new Conexion(); //OBJETO PDO INSTANCIAR
    // $conexionp    = $objeto->Conectar(); // LLAMAR A FUNCION CONECTAR
    // $conexion = conectaBD_195_bdd_user_adminaudi();

    // $consulta = "SELECT * FROM cat_nivacad ORDER BY 1 ASC";//CONSULTA PARA SELECT NIVEL ACADEMICO
    //     $resultado = pg_query($conexion,$consulta);
    // $consulta1 = "SELECT * FROM cat_categcursos ORDER BY 1 ASC";//CONSULTA PARA SELECT CATEGORIA CURSOS
    //     $resultado1 = pg_query($conexion,$consulta1);
    //     // print_r (pg_fetch_assoc($resultado1));
    
    // $result = array();
    // $consultaf = "SELECT * FROM func_conteo_campos_vacios()"; //función calcula campos vacios para %captura
    // $resultadof = $conexionp->prepare($consultaf);
    // $resultadof->execute();        
    // $consulta2 = "SELECT AVG(porc_captura) AS PORC FROM datoscolab"; //CONSULTA PARA GRAFICA DE PASTEL
    //     $resultado2 = $conexionp->prepare($consulta2);
    //     $resultado2->execute();

        // $data=$resultado2->fetchAll(PDO::FETCH_ASSOC);
        // print_r($data);
?>
<!doctype html>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" HTTP-EQUIV="REFRESH" >
        <link rel="shortcut icon" type="image/x-icon" href="../assets/css/imagenes/key_coppel.ico">
        <title>Expertise Empleados</title>

        <!-- Bootstrap CSS para diseño en general-->
        <!-- <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css"> -->

        <!-- Booststrap CSS para Barra laterar -->
        <link rel="stylesheet" href="assets/bootstrap/css/material-dashboard.css">
        <!-- CSS personalizado --> 
        <link rel="stylesheet" href="main.css">  
        <!--datables CSS básico-->
        <link rel="stylesheet" type="text/css" href="assets/datatables/datatables.min.css"/>

        <!-- Plugin Mensajes Alertas-Notificaciones -->
        <link rel="stylesheet"  type="text/css" href="../assets/css/default.min.css"   />
        <link rel="stylesheet"  type="text/css" href="../assets/css/semantic.min.css"  />
        <link rel="stylesheet"  type="text/css" href="../assets/css/alertify.min.css"  />  
        <!-- <link rel="stylesheet"  type="text/css" href="../assets/css/css_dasboard.css"  /> -->
        <!-- <link rel="stylesheet"  type="text/css" href="../assets/css/bootstrap.min.css" /> -->

        <!-- <link href="https://cdn.jsdelivr.net/timepicker.js/latest/timepicker.min.css" rel="stylesheet"/> -->

        <!--datables estilo bootstrap 4 CSS-->  
        <link rel="stylesheet"  type="text/css" href="assets/datatables/DataTables-1.10.18/css/dataTables.bootstrap4.min.css">
        <link href="https://cdn.jsdelivr.net/npm/boo+tstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      
        <link href="assets/css/family_Material_Icons.css" rel="stylesheet">  
        <link rel="stylesheet" href="assets/datatables/DataTables-1.10.18/css/table.css">
        <!-- CSS DE SIDEBAR BARRA LATERAl -->
        <link rel="stylesheet" href="assets/css/sidebar-navbar.css">
        <link href="assets/css/mdb-ui-kit_4.4.0_mdb.min.css" rel="stylesheet"/> <!-- boostarp 5 -->

    </head>
    <style>
        .contenedor{
          margin:0 auto;
          text-align: center
        }
        h1{
            font-family: 'raleway';
            font-size:40px;
            margin-bottom: 100px;
        }
        footer{
            /*position: absolute;*/
            background: #ece9e6;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #ece9e6, #ffffff); /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, #ece9e6, #ffffff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            text-align: center;
            color: black;
        }
    </style>    
  <body onload="progressBar();"> 
     <header>
     <h3 class='text-center'></h3>
     </header>

<!----------------------------------------------------- BARRA LATERAL ------------------------------------------------------------> 
  <div class="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
    <div class="logo">
      <a href="index.php" class="simple-text logo-normal">
        <!-- <img width="70%" src="../assets/css/imagenes/Logo_auditoria-removebg-preview.png" />
        <br><br> -->
        <label style="color: black;">Control Capacitaciones <br> Expetise Empleados</label>
        <!-- <img src="../assets/img/Imagen1.png" width="70px" height="40">  -->
      </a>
    </div>
    <div class="sidebar-wrapper">
      <ul class="collapse d-lg-block sidebar collapse bg-light">
            <div class="position-sticky">
                <div class="list-group list-group-flush mx-1 mt-2">
                    <a href="#" id="miTablero" class="list-group-item list-group-item-action py-4 ripple" aria-current="true">
                        <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Mi Tablero</span>
                    </a>
                    <a href="#" id="miInfo" class="list-group-item list-group-item-action py-2 ripple" onclick="">
                        <i class="fas fa-chart-area fa-fw me-3"></i><span>Mi Información</span>
                    </a>
                    <a href="#" id="ctroCargo" class="list-group-item list-group-item-action py-2 ripple">
                        <i class="fas fa-lock fa-fw me-3"></i><span>Personal a Cargo</span>
                    </a>
                    <!-- <a href="#" id="kpis" class="list-group-item list-group-item-action py-2 ripple">
                        <i class="fas fa-lock fa-fw me-3"></i><span>KPI´s</span>
                    </a> -->
                </div>
            </div>
      </ul>
    </div>
  </div>
<!----------------------------------------------------- TERMINA BARRA LATERAL ------------------------------------------------------------>
  <!--NAVBAR-->

            <!-- Navbar -->
            <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
              <!-- Container wrapper -->
              <div class="container-fluid">
                <!-- Toggle button -->
                <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#sidebarMenu"
                  aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                  <i class="fas fa-bars"></i>
                </button>

                <!-- Brand -->
                <a class="navbar-brand" href="javascript:location.reload()">
                  <img src="../assets/css/imagenes/Logo_auditoria-removebg-preview.png" style="position:absolute; width:150px; height:60px; top: -5px; left: 0px" 
                  alt="audi_logo"loading="lazy" />
                </a>

                <!-- Right links -->
                <ul class="navbar-nav ms-auto d-flex flex-row">
                  <!-- Notification dropdown -->
                  <li class="nav-item dropdown" id="notification">
                    <!-- <a class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown"
                    aria-expanded="false">
                      <i class="material-icons" >notifications</i>
                      <span class="badge rounded-pill badge-notification bg-danger">5</span>
                    </a> -->
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                      <li>
                        <a class="dropdown-item" href="#">Novedades Auditoría</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">Nuevo Colaborador</a>
                      </li>
                    </ul>
                  </li>          
                  <!-- Avatar -->
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                      <i class="material-icons">settings</i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                      <li>
                        <a class="dropdown-item" href="#" id="myInfo">
                          <i class="material-icons">home</i>Mi Perfil
                        </a>
                      </li>
                      <!-- <li>
                        <a class="dropdown-item" href="#">Settings</a>
                      </li> -->
                      <li>                       
                        <a class="dropdown-item" href="../assets/php/cerrar.php">
                          <i class="material-icons">logout</i>Cerrar Sesión
                        </a>    
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <!-- Container wrapper -->
            </nav>
            <!-- Navbar -->
          </header>
          <!--Main Navigation-->

          <!--Main layout-->
          <main style="margin-top: 50px;">
            <div class="container pt-1"></div>
          </main>
          <!--Main layout-->
    <br>
<!---------------------------------------------------------- CAJA TABLERO         --------------------------------------------------------------->
    <div class="container cajamiTablero responsive">
    <div id="accordion">
    <div class="card cardTablero">
        <div class="card-header" id="headingOne">
          <h5 class="mb">
            <button class="btn btn-info" data-toggle="collapse" tabindex="0" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              TABLERO
            </button>
          </h5>
        </div>
        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
          <div class="card-body  col-lg-12 row">
            <div class="col-lg-4">
                <div class="card border" style="top:-30px; background-color:#afadad">  
                    <h4> <div class="card-header" id="tituloMiInfo"></div> </h4>
                    <div class="card-body" style="top:-20px">
                        <form>
                            <div class="row">
                                <div class="col-lg-12">
                                  <div class="form" data-tooltip="nombre">
                                    <label class="col-form-label" for="form6Example1" style="color:black;font-weight:bold;">Nombre</label>
                                    <input type="text" id="nomY" class="form-control" disabled="true" />
                                  </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-12">
                                  <div class="form"data-tooltip="puesto">
                                    <label class="col-form-label" for="form6Example1" style="color:black;font-weight:bold;">Puesto</label>
                                    <input type="text" id="puestoY" class="form-control" disabled="true">
                                  </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-12">
                                  <div class="form"data-tooltip="centro">
                                    <label class="col-form-label" for="form6Example1" style="color:black;font-weight:bold;">Centro</label>
                                    <input type="text" id="centroY" class="form-control" disabled="true">
                                  </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form"data-tooltip="centro">
                                        <label class="col-form-label" for="form6Example1" style="color:black;font-weight:bold;">Gerente Responsable</label>
                                        <input type="text" id="gteY" class="form-control" disabled="true">
                                     </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form"data-tooltip="fecha alta">
                                        <label class="col-form-label" for="form6Example1" style="color:black;font-weight:bold;">Fecha Alta</label>
                                        <input type="date" id="fech_altaY" class="form-control" disabled="true">
                                     </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="card border col-lg-8">
            <h4><div class="card-header" id="tituloMiAvance">Avance Captura de Centro</div></h4>
                <div class="table">        
                    <table id="tablaUsuariosAvance" class="table table-striped table-bordered table-condensed tablaUsuariosAvance" style="width:100%; margin-left:-0px;">
                        <thead class="text-center">
                            <tr>
                                <th>Gte Resp                         </th>
                                <th>#Colaboradores                   </th>
                                <th>#Cap Finalizada                  </th>
                                <th>#Cap Pendiente                   </th>
                                <th>%Cap Centro                      </th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>        
                    </table>
                    <table id="tablaAvanceUnicEmp" class="table table-striped table-bordered table-condensed" style="width:100%; margin-left:-0px;">
                        <thead class="text-center">
                            <tr>
                                <th>Gte Responsable    </th>
                                <th>% Estudios         </th>
                                <th>% Cursos           </th>
                                <th>% Experiencia      </th>
                                <th>%Avance Gral       </th>
                            </tr>
                        </thead>
                    </table>
                    <!-- <div class="contenedor" id="knob">
                        <input type="text" value="<?php while ($row = $resultado2->fetchAll(PDO::FETCH_ASSOC)){print_r($row['0']['porc']);}?>" class="dial">
                    </div> -->
                    <figure class="highcharts-figure">
                        <div id="container"></div>
                        <p class="highcharts-description">
                            Avance de Captura Individual
                        </p>
                    </figure>
                </div>
            </div>                      
          </div>
        </div>
      </div>
    </div>          
    </div>   
<!---------------------------------------------------------- TERMINA CAJA TABLERO --------------------------------------------------------------->

<!---------------------------------------------------------- CAJA MI INFORMACIÓN         --------------------------------------------------------------->
    <div class="container cajamiInfo responsive">
    <div id="accordion">
      <div class="card  cardMiInfo">
        <div class="card-header" id="headingMiInfo">
          <h5 class="mb-0">
            <button class="btn btn-info" data-toggle="collapse" data-target="#collapseMiInfo" aria-expanded="true" aria-controls="collapseMiInfo">
                Mi información
            </button>
          </h5>
        </div>
        <div id="collapseMiInfo" class="collapse show" aria-labelledby="headingMiInfo" data-parent="#accordion">
          <div class="card-body" id="miInfoGraf">
            <div class="row">
                <div class="col-responsive">
                    <form id="formUsuariosT">    
                        <div class="modal-body" scrollY="true">
                <!-------------------------------------------------- 1 LINEA -------------------------------------------------------------------------->
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="form-group" data-tooltip="area auditoria">
                                        <label for="" class="col-form-label">Área Auditoria</label>
                                        <input type="text" class="form-control" id="idT" style="display:none ">
                                        <input type="text" class="form-control" id="area_audiT" disabled="true">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="" class="col-form-label">Gerente de Zona</label>
                                        <input type="text" class="form-control" id="gte_zonaT" disabled="true">
                                    </div>
                                </div>
                                <div class="col-lg-2">
                                    <div class="form-group">
                                        <label for="" class="col-form-label">Región</label>
                                        <input type="text" class="form-control" id="regionT" disabled="true">
                                    </div>
                                </div>
                            </div>
                <!-------------------------------------------------- 2 LINEA -------------------------------------------------------------------------->
                            <div class="row"> 
                                <div class="col-lg-5">
                                    <div class="form-group">
                                        <label for="" class="col-form-label">Gerente Responsable</label>
                                        <input type="text" class="form-control" id="gte_respoT" disabled="true">
                                    </div>               
                                </div>
                                <div class="col-lg-4">
                                    <div class="form-group">
                                        <label for="" class="col-form-label">Centro</label>
                                        <input type="numeric" class="form-control" id="centroT" disabled="true">
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="form-group">
                                        <label for="" class="col-form-label">Ciudad</label>
                                        <input type="text" class="form-control" id="ciudadT" disabled="true">
                                    </div>
                                </div>
                            </div>
                <!-------------------------------------------------- 3 LINEA -------------------------------------------------------------------------->
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="" class="col-form-label">Empleado</label>
                                        <input type="text" class="form-control" id="empleadoT" disabled="true">
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="form-group">
                                        <label for="" class="col-form-label">Puesto</label>
                                        <input type="text" class="form-control" id="puestoT" disabled="true">
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="form-group">
                                        <label for="startDate" class="col-form-label">Fecha Ingreso</label>
                                        <input type="date" class="form-control" id="fech_ingT" disabled="true">
                                    </div>
                                </div>
                            </div>
                <!-------------------------------------------------- 4 LINEA -------------------------------------------------------------------------->
                            <div class="row">
                                <div class="col-lg-2">
                                    <div class="form-group">
                                        <label for="startDate" class="col-form-label">Fecha Nacimiento</label>
                                        <input type="date" class="form-control" id="fech_nacT" disabled="true">
                                    </div>
                                </div>
                                <div class="col-lg-1">
                                    <div class="form-group">
                                        <label for="" class="col-form-label">Edad</label>
                                        <input type="text" class="form-control" id="edadT" disabled="true">
                                    </div>
                                </div>
                                <div class="col-lg-1">
                                    <div class="form-group">
                                        <label for="" class="col-form-label">Sexo</label>
                                        <input type="text" class="form-control" id="sexoT" disabled="true">
                                    </div>
                                </div>
                                <div class="col-lg-2">
                                    <div class="form-group">
                                        <label for="startDate" class="col-form-label fbajaY">Reingreso(F.Baja)</label>
                                        <input type="date" class="form-control" id="fech_bajaT" disabled="true">
                                    </div>
                                </div>
                                    <!-- <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="" class="col-form-label">Causa Baja</label>
                                        <textarea class="form-control" id="cbaja" disabled="true"></textarea>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                        <div class="modal-footer">
                           <!--  <button type="button" class="btn btn-danger" id ="cierreModalT">Cancelar</button> -->
                           <!--  <button type="submit" id="btnGuardarT" class="btn btn-primary">Guardar</button> -->
                        </div>
                    </form>    
                </div>
            </div>  
          </div>
        </div>
      </div>
      <div class="card  cardMiInfo">
        <div class="card-header" id="headingTwo">
          <h5 class="mb-0">
            <button class="btn btn-info" data-toggle="collapse" data-target="#collapsemisEst" aria-expanded="true" aria-controls="collapseTwo">
                Mis Estudios
            </button>
          </h5>
        </div>
        <div id="collapsemisEst" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
          <div class="card-body" id="miInfoGraf">
            <div class="row">
                <div class="col-responsive">
                    <div class="table-responsive">
                        <!-- <i class="material-icons"> <button disabled="true" id="btnAddEstudio" type="button" class="btn btn-success">library_add</i> </button> -->
                        <table id="tablamiInfoEst" class="table table-striped table-bordered table-condensed" style="width:100%;margin-left:0px">
                            <thead class="text-center">
                                <tr>
                                    <th>id                               </th>
                                    <th>#Emp                             </th>
                                    <th>Nivel Académico                  </th>
                                    <th>Nom.Carrera                      </th>
                                    <th>Titulo                           </th>
                                    <th>Cédula                           </th>
                                    <th>Comprobante                      </th>
                                    <th>Institución                      </th>
                                    <th>Fecha Inicio                     </th>
                                    <th>Fecha Concio                     </th>
                                </tr>
                            </thead>
                            <tbody>                           
                            </tbody>        
                        </table>                                   
                    </div>
                </div>
            </div>  
          </div>
        </div>
      </div>
      <div class="card  cardMiInfo">
        <div class="card-header" id="headingTwo">
          <h5 class="mb-0">
            <button class="btn btn-info" data-toggle="collapse" data-target="#collapsemiCurso" aria-expanded="true" aria-controls="collapseTwo">
                Mis Cursos
            </button>
          </h5>
        </div>
        <div id="collapsemiCurso" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
          <div class="card-body" >
            <div class="row">
                <div class="col-responsive">
                    <div class="table-responsive">
                        <!-- <i class="material-icons"> <button disabled="true" id="btnAddEstudio" type="button" class="btn btn-success">library_add</i> </button> -->
                        <table id="tablamiInfoCurso" class="table table-striped table-bordered table-condensed" style="width:100%;margin-left:0px">
                            <thead class="text-center">
                                <tr>
                                    <th>id                               </th>
                                    <th>#Emp                             </th>
                                    <th>Categoria                        </th>
                                    <th>Tipo Curso                       </th>
                                    <th>Curso                            </th>
                                </tr>
                            </thead>
                            <tbody>                           
                            </tbody>        
                        </table>                                   
                    </div>
                </div>
            </div>  
          </div>
        </div>
      </div>
      <div class="card  cardMiInfo">
        <div class="card-header" id="headingCursoCorp">
          <h5 class="mb-0">
            <button class="btn btn-info" data-toggle="collapse" data-target="#CursoCorp" aria-expanded="true" aria-controls="collapseTwo">
                Cursos Coorporativos
            </button>
          </h5>
        </div>
        <div id="CursoCorp" class="collapse" aria-labelledby="headingCursoCorp" data-parent="#accordion">
          <div class="card-body" >
            <div class="row">
                <div class="col-responsive">
                    <div class="table-responsive">
                        <!-- <i class="material-icons"> <button disabled="true" id="btnAddEstudio" type="button" class="btn btn-success">library_add</i> </button> -->
                        <table id="tablamiInfoCursoCorp" class="table table-striped table-bordered table-condensed" style="width:100%;margin-left:0px">
                            <thead class="text-center">
                                <tr>
                                  <th>id                  </th>
                                  <th>#Emp                </th>
                                  <th>Titulo              </th>
                                  <th>Duración Hrs        </th>
                                  <th>Imparte             </th>
                                  <th>Escuela             </th>
                                  <th>Periodo             </th>
                                  <th>Const/Certificado   </th>
                                  <th>Estatus             </th>
                                </tr>
                            </thead>
                            <tbody>                           
                            </tbody>        
                        </table>                                   
                    </div>
                </div>
            </div>  
          </div>
        </div>
      </div>
      <div class="card  cardMiInfo">
        <div class="card-header" id="headingTwo">
          <h5 class="mb-0">
            <button class="btn btn-info" data-toggle="collapse" data-target="#collapsemisExpCppl" aria-expanded="true" aria-controls="collapseTwo">
                Mi Experiencia Empresa
            </button>
          </h5>
        </div>
        <div id="collapsemisExpCppl" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
          <div class="card-body" >
            <div class="row">
                <div class="col-responsive">
                    <div class="table-responsive">
                        <!-- <i class="material-icons"> <button disabled="true" id="btnAddEstudio" type="button" class="btn btn-success">library_add</i> </button> -->
                        <table id="tablamiInfoExpCppl" class="table table-striped table-bordered table-condensed" style="width:100%;margin-left:0px">
                            <thead class="text-center">
                                <tr>
                                   <!--  <th>id                             </th> -->
                                    <th>#Emp                           </th>
                                    <th>Fecha                          </th>
                                    <th>Centro                         </th>
                                    <th>Puesto                         </th>
                                    <th>Antiguedad                      </th>
                                </tr>
                            </thead>
                            <tbody>                           
                            </tbody>        
                        </table>                                   
                    </div>
                </div>
            </div>  
          </div>
        </div>
      </div>
      <div class="card  cardMiInfo">
        <div class="card-header" id="headingTwo">
          <h5 class="mb-0">
            <button class="btn btn-info" data-toggle="collapse" data-target="#collapsemisExpExt" aria-expanded="true" aria-controls="collapseTwo">
                Mi Experiencia Externa
            </button>
          </h5>
        </div>
        <div id="collapsemisExpExt" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
          <div class="card-body" >
            <div class="row">
                <div class="col-responsive">
                    <div class="table-responsive">
                        <!-- <i class="material-icons"> <button disabled="true" id="btnAddEstudio" type="button" class="btn btn-success">library_add</i> </button> -->
                        <table id="tablamiInfoExpExt" class="table table-striped table-bordered table-condensed" style="width:100%;margin-left:0px">
                            <thead class="text-center">
                                <tr>
                                    <th>id                         </th>
                                    <th>#Emp                       </th>
                                    <th>Fecha                      </th>
                                    <th>Empresa                    </th>
                                    <th>Puesto                     </th>
                                    <th>Actividad                  </th>
                                    <th>Antiguedad/años            </th>
                                </tr>
                            </thead>
                            <tbody>                           
                            </tbody>        
                        </table>                                   
                    </div>
                </div>
            </div>  
          </div>
        </div>
      </div>
    </div>          
    </div>   
<!---------------------------------------------------------- TERMINA CAJA MI INFORMACIÓN --------------------------------------------------------------->

<!---------------------------------------------------------- CAJA CENTROS A CARGO    --------------------------------------------------------------->
    <div class="container cajactroCargo responsive">
    <div id="accordion">
    <div class="card cardCtroCargo">
        <div class="card-header" id="headingOne">
          <h5 class="mb">
            <button class="btn btn-info" data-toggle="collapse" tabindex="0" data-target="#collapseCtroCargo" aria-expanded="true" aria-controls="collapseOne">
              PERSONAL A CARGO
            </button>
          </h5>
        </div>
        <div id="collapseCtroCargo" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
          <div class="card-body  col-lg-12 row">
            <div class="card border col-lg-12">
                <!-- <h4><div class="card-header">Captura</div></h4> -->
                <div class="card-body" id="containercajactroCargo">
                    <div class="row">
                        <div class="col-responsive">
                        <div class="table-responsive">        
                            <table id="tablaUsuarios" class="table table-striped table-bordered table-condensed" style="width:100%; margin-left:0px">
                                <thead class="text-center">
                                    <tr>
                                        <th>id                               </th>
                                        <th>Área Auditoría                   </th>
                                        <th>Gte Div Resp                     </th>
                                        <th>Gte Nac Resp                     </th>
                                        <th>Gte Zona Resp                    </th>
                                        <th>Gte Responsable                  </th>
                                        <th>Región                           </th>
                                        <th>#Centro                          </th>
                                        <th>Centro                           </th>
                                        <th>Ciudad                           </th>
                                        <th>#Emp                             </th>
                                        <th>Nom.Emp                          </th>
                                        <th>Fecha Ing                        </th>
                                        <th>#Puesto                          </th>
                                        <th>Nom.Puesto                       </th>
                                        <th>Fecha Nac                        </th>
                                        <th>Edad                             </th>
                                        <th>Sexo                             </th>
                                        <th>Reingreso(F.Baja)                </th>
                                        <th>%Captura                         </th>
                                        <th>Acción                           </th>
                                    </tr>
                                </thead>
                                <tbody>                           
                                </tbody>        
                            </table>               
                        </div>
                        </div>
                        <div class="container graficoUsuarios"> </div>
                    </div>  
                </div>
            </div>                      
          </div>
        </div>
      </div>
    </div>          
    </div>   
<!---------------------------------------------------------- TERMINA CENTROS A CARGO --------------------------------------------------------------->

<!---------------------------------------------------------- CAJA ESTUDIOS    --------------------------------------------------------------->
    <div class="container cajactroCargo responsive">
        <div id="accordion">
            <div class="card cardCtroCargoE">
                <div class="card-header" id="headingOne">
                    <h5 class="mb">
                        <button class="btn btn-info" data-toggle="collapse" tabindex="0" data-target="#collapseEstudios" aria-expanded="true" aria-controls="collapseOne">
                            Estudios
                        </button>
                    </h5>
                </div>
                <div id="collapseEstudios" class="collapse hide" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body  col-lg-12 row">
                        <div class="card border col-lg-12">
                            <!-- <h4><div class="card-header">Captura</div></h4> -->
                            <div class="card-body" id="containercajactroAcademia">
                                <div class="row">
                                    <div class="col-responsive">
                                        <div class="table-responsive">
                                            <i class="material-icons"><button disabled="true" id="btnAddEstudio" type="button" class="btn btn-success">library_add</i></button>
                                            <table id="tablaprueba" class="table table-striped table-bordered table-condensed" style="width:100%;margin-left:0px">
                                                <thead class="text-center">
                                                    <tr>
                                                        <th>id                               </th>
                                                        <th>#Emp                             </th>
                                                        <th>Nivel Académico                  </th>
                                                        <th>Nom.Carrera                      </th>
                                                        <th>Titulo                           </th>
                                                        <th>Cédula                           </th>
                                                        <th>Comprobante                      </th>
                                                        <th>Institución                      </th>
                                                        <th>Fecha Inicio                     </th>
                                                        <th>Fecha Concio                     </th>
                                                        <th >Acción                          </th>
                                                    </tr>
                                                </thead>
                                                <tbody>                           
                                                </tbody>        
                                            </table>                                   
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                      
                    </div>
                </div>
            </div>
        </div>          
    </div>
    <?php include_once('assets/modal/modalEstudios.php'); ?>
<!---------------------------------------------------------- TERMINA ESTUDIOS --------------------------------------------------------------->

<!---------------------------------------------------------- CAJA CURSOS    --------------------------------------------------------------->
    <div class="container cajactroCargo responsive">
        <div id="accordion">
            <div class="card cardCtroCargoC">
                <div class="card-header" id="headingOne">
                    <h5 class="mb">
                        <button class="btn btn-info" data-toggle="collapse" tabindex="0" data-target="#collapseCursos" aria-expanded="true" aria-controls="collapseOne">
                            Cursos
                        </button>
                    </h5>
                </div>
                <div id="collapseCursos" class="collapse hide" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body  col-lg-12 row">
                        <div class="card border col-lg-12">
                            <!-- <h4><div class="card-header">Captura</div></h4> -->
                            <div class="card-body" id="containercajactroCurso">
                                <div class="row">
                                    <div class="col-responsive">
                                        <div class="table-responsive">
                                            <i class="material-icons"><button disabled="true" id="btnAddCurso" type="button" class="btn btn-success">library_add</i></button>
                                            <table id="tablaCursos" class="table table-striped table-bordered table-condensed" style="width:100%;margin-left:0px">
                                                <thead class="text-center">
                                                    <tr>
                                                        <th>id                               </th>
                                                        <th>#Emp                             </th>
                                                        <th>Categoria                        </th>
                                                        <th>Tipo Curso                       </th>
                                                        <th>Curso                            </th>
                                                        <th >Acción                          </th>
                                                    </tr>
                                                </thead>
                                                <tbody>                           
                                                </tbody>        
                                            </table>                                   
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                      
                    </div>
                </div>
            </div>
        </div>          
    </div>
    <?php include_once('assets/modal/modalCursos.php'); ?>
<!---------------------------------------------------------- TERMINA CURSOS --------------------------------------------------------------->

<!---------------------------------------------------------- CAJA CURSOS COORPORATIVOS   --------------------------------------------------------------->
    <div class="container cajactroCargo responsive">
        <div id="accordion">
            <div class="card cardCtroCargoC">
                <div class="card-header" id="headingOne">
                    <h5 class="mb">
                        <button class="btn btn-info" data-toggle="collapse" tabindex="0" data-target="#collapseCursosC" aria-expanded="true" aria-controls="collapseOne">
                            Cursos Coorporativo
                        </button>
                    </h5>
                </div>
                <div id="collapseCursosC" class="collapse hide" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body  col-lg-12 row">
                        <div class="card border col-lg-12">
                            <!-- <h4><div class="card-header">Captura</div></h4> -->
                            <div class="card-body" id="containercajactroCursoCorp">
                                <div class="row">
                                    <div class="col-responsive">
                                        <div class="table-responsive">
                                            <!-- i class="material-icons"><button disabled="true" id="btnAddCurso" type="button" class="btn btn-success">library_add</i></button> -->
                                            <table id="tablaCursosCorp" class="table table-striped table-bordered table-condensed" style="width:100%;margin-left:0px">
                                                <thead class="text-center">
                                                    <tr>
                                                        <th>id                  </th>
                                                        <th>#Emp                </th>
                                                        <th>Titulo              </th>
                                                        <th>Duración Hrs        </th>
                                                        <th>Imparte             </th>
                                                        <th>Escuela             </th>
                                                        <th>Periodo             </th>
                                                        <th>Const/Certificado   </th>
                                                        <th>Estatus             </th>
                                                        <th>Acción              </th>
                                                    </tr>
                                                </thead>
                                                <tbody>                           
                                                </tbody>        
                                            </table>                                   
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                      
                    </div>
                </div>
            </div>
        </div>          
    </div>
    <?php include_once('assets/modal/modalCursosCorp.php'); ?>
<!---------------------------------------------------------- TERMINA CURSOS COORPORATIVOS --------------------------------------------------------------->

<!---------------------------------------------------------- CAJA EXPERIENCIA CPLL    --------------------------------------------------------------->
    <div class="container cajactroCargo responsive">
        <div id="accordion">
            <div class="card cardCtroCargoExpCppl">
                <div class="card-header" id="headingOne">
                    <h5 class="mb">
                        <button class="btn btn-info" data-toggle="collapse" tabindex="0" data-target="#collapseExpCppl" aria-expanded="true" aria-controls="collapseOne">
                            HistoriaL Empresa
                        </button>
                    </h5>
                </div>
                <div id="collapseExpCppl" class="collapse hide" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body  col-lg-12 row">
                        <div class="card border col-lg-12">
                            <!-- <h4><div class="card-header">Captura</div></h4> -->
                            <div class="card-body" id="containercajactroExpCppl">
                                <div class="row">
                                    <div class="col-responsive">
                                        <div class="table-responsive">
                                            <table id="tablaExpCppl" class="table table-striped table-bordered table-condensed" style="width:100%;margin-left:0px">
                                                <thead class="text-center">
                                                    <tr>
                                                       <!--  <th>id                             </th> -->
                                                        <th>#Emp                           </th>
                                                        <th>Fecha                          </th>
                                                        <th>Centro                         </th>
                                                        <th>Puesto                         </th>
                                                        <th>Antiguedad                     </th>
                                                    </tr>
                                                </thead>
                                                <tbody>                           
                                                </tbody>        
                                            </table>                                   
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                      
                    </div>
                </div>
            </div>
        </div>          
    </div>
<!---------------------------------------------------------- TERMINA EXPERIENCIA CPLL --------------------------------------------------------------->

<!---------------------------------------------------------- CAJA EXPERIENCIA EXT    --------------------------------------------------------------->
    <div class="container cajactroCargo responsive">
        <div id="accordion">
            <div class="card cardCtroCargoExpExt">
                <div class="card-header" id="headingOne">
                    <h5 class="mb">
                        <button class="btn btn-info" data-toggle="collapse" tabindex="0" data-target="#collapseExpExt" aria-expanded="true" aria-controls="collapseOne">
                            Experiencia Externa
                        </button>
                    </h5>
                </div>
                <div id="collapseExpExt" class="collapse hide" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body  col-lg-12 row">
                        <div class="card border col-lg-12">
                            <!-- <h4><div class="card-header">Captura</div></h4> -->
                            <div class="card-body" id="containercajactroExpCppl">
                                <div class="row">
                                    <div class="col-responsive">
                                        <div class="table-responsive">
                                            <button disabled="true" id="btnAddExpExt" type="button" class="btn btn-success"><i class="material-icons">library_add</i></button>
                                            <table id="tablaExpExt" class="table table-striped table-bordered table-condensed" style="width:100%;margin-left:0px">
                                                <thead class="text-center">
                                                    <tr>
                                                        <th>id                         </th>
                                                        <th>#Emp                       </th>
                                                        <th>Fecha                      </th>
                                                        <th>Empresa                    </th>
                                                        <th>Puesto                     </th>
                                                        <th>Actividad                  </th>
                                                        <th>Antiguedad/años            </th>
                                                        <th>Acción                     </th>
                                                    </tr>
                                                </thead>
                                                <tbody>                           
                                                </tbody>        
                                            </table>                                   
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                      
                    </div>
                </div>
            </div>
        </div>          
    </div>
   <?php include_once('assets/modal/modalExpExp.php'); ?>    
<!---------------------------------------------------------- TERMINA EXPERIENCIA EXT --------------------------------------------------------------->

<!---------------------------------------------------------- MODAL INFORMACIÓN COMPLETA EMPLEADO --------------------------------------------------->
<div class="modal fade" id="modalCRUD" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                </button>
            </div>
        <form id="formUsuarios">    
            <div class="modal-body" scrollY="true">
    <!-------------------------------------------------- 1 LINEA -------------------------------------------------------------------------->
                <div class="row">
                    <div class="col-lg-4">
                        <div class="form-group" data-tooltip="area auditoria">
                            <label for="" class="col-form-label">Área </label>
                            <input type="text" class="form-control" id="id" style="display:none ">
                            <input type="text" class="form-control" id="area_audi" disabled="true">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="" class="col-form-label">Gerente de Zona</label>
                            <input type="text" class="form-control" id="gte_zona" disabled="true">
                        </div>
                    </div>
                    <div class="col-lg-2">
                        <div class="form-group">
                            <label for="" class="col-form-label">Región</label>
                            <input type="text" class="form-control" id="region" disabled="true">
                        </div>
                    </div>
                </div>
    <!-------------------------------------------------- 2 LINEA -------------------------------------------------------------------------->
                <div class="row"> 
                    <div class="col-lg-5">
                        <div class="form-group">
                            <label for="" class="col-form-label">Gerente Responsable</label>
                            <input type="text" class="form-control" id="gte_respo" disabled="true">
                        </div>               
                    </div>
                    <div class="col-lg-4">
                        <div class="form-group">
                            <label for="" class="col-form-label">Centro</label>
                            <input type="numeric" class="form-control" id="centro" disabled="true">
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="form-group">
                            <label for="" class="col-form-label">Ciudad</label>
                            <input type="text" class="form-control" id="ciudad" disabled="true">
                        </div>
                    </div>
                </div>
    <!-------------------------------------------------- 3 LINEA -------------------------------------------------------------------------->
                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="" class="col-form-label">Empleado</label>
                            <input type="text" class="form-control" id="empleado" disabled="true">
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="form-group">
                            <label for="" class="col-form-label">Puesto</label>
                            <input type="text" class="form-control" id="puesto1" disabled="true">
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="form-group">
                            <label for="startDate" class="col-form-label">Fecha Ingreso</label>
                            <input type="date" class="form-control" id="fech_ing" disabled="true">
                        </div>
                    </div>
                </div>
    <!-------------------------------------------------- 4 LINEA -------------------------------------------------------------------------->
                <div class="row">
                    <div class="col-lg-2">
                        <div class="form-group">
                            <label for="startDate" class="col-form-label">Fecha Nacimiento</label>
                            <input type="date" class="form-control" id="fech_nac" disabled="true">
                        </div>
                    </div>
                    <div class="col-lg-1">
                        <div class="form-group">
                            <label for="" class="col-form-label">Edad</label>
                            <input type="text" class="form-control" id="edad" disabled="true">
                        </div>
                    </div>
                    <div class="col-lg-1">
                        <div class="form-group">
                            <label for="" class="col-form-label">Sexo</label>
                            <input type="text" class="form-control" id="sexo" disabled="true">
                        </div>
                    </div>
                    <div class="col-lg-2">
                        <div class="form-group">
                            <label for="startDate" class="col-form-label">Fecha Baja</label>
                            <input type="date" class="form-control" id="fech_baja" disabled="true">
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" id ="cierreModal">Atras</button>
                <!-- <button type="submit" id="btnGuardar" class="btn btn-success">Guardar</button> -->
            </div>
        </form>    
        </div>
    </div>
</div>
  </body>
    <footer class="footer">
        <!-- <p>© 2022 Coppel SA de CV Derecho Reservados. Auditoria Proyectos</p> -->
        <div class="container-fluid">
          <div class="copyright float-right">
            &copy;
            <script>
              document.write(new Date().getFullYear())
            </script>, TuEmpresa SA de CV Derecho Reservados. Sistema Expetise Empleados
          </div>
        </div>
        <!-- jQuery, Popper.js, Bootstrap JS -->
            <script src="assets/jquery/jquery-3.5.1.js"></script>
            <script src="assets/popper/popper.min.js"></script>
            <script src="assets/bootstrap/js/bootstrap.min.js"></script>
        <!-- <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script> -->
        <script type="text/javascript" src="main.js"></script>

        <!-- datatables JS -->
        <script type="text/javascript" src="assets/datatables/datatables.min.js"></script>
        <!-- <script type="text/javascript" src="assets/datatables/DataTables_Lenguaje_Spanish.js"></script> -->
         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

         <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/4.4.0/mdb.min.js"></script>

        <!-- Plugin select datatable-->
        <script type="text/javascript" src="assets/jquery/select.datatable.js"></script>

        <script src="../assets/js/alertify.min.js" type="text/javascript"></script>

        <!-- PLUGIN QUER AGREGAR BARRA DE PROGRESO A DATATABLE -->
            <script type="text/javascript" src="assets/jquery/percentageBars.js"></script>
            <!--  <script type="text/javascript" src="assets/jquery/highcharts.js"></script> -->
        <!-- TERMINA PLUGIN QUER AGREGAR BARRA DE PROGRESO A DATATABLE -->

       <!-- PLUGIN GRAFICO BARRAS HIGHCHARTS -->
            <script src="https://code.highcharts.com/highcharts.js"></script>
            <script src="https://code.highcharts.com/modules/data.js"></script>
            <!-- <script src="https://code.highcharts.com/modules/drilldown.js"></script> -->
            <script src="https://code.highcharts.com/modules/exporting.js"></script>
            <script src="https://code.highcharts.com/modules/export-data.js"></script>
            <script src="https://code.highcharts.com/modules/accessibility.js"></script>
        <!-- TERMINA PLUGIN GRAFICO BARRAS HIGHCHARTS -->

            <!-- <script src="https://cdn.jsdelivr.net/timepicker.js/latest/timepicker.min.js"></script> -->

       <!-- PLUGIN PARA GRAFICOS CIRCULO PROGRESO -->
            <script src="assets/jquery/jquery.knob.js"></script>
            <!-- <script src="assets/jquery/jquery.knob.min.js"></script> -->
            <script type="text/javascript">
                    function progressBar(){
                        //$(".dial").knob();
                        $('.dial').knob({
                        'min':0, //minimo de inicio del circulo
                        'max':100, //maximo de inicio del circulo
                        'width':250, //hancho de inicio del circulo
                        'height':250, //alto de inicio del circulo
                        'displayInput':true, //esconde o no el texto dentro del circulo
                        // 'fgColor':"#19E115",//cambia color de barra y texto
                        'inputColor' : '#B2BABB',
                        'draw': function() {
                            let v = parseInt(this.i[0].value);
                            // let a = this.i[0].value;
                            // console.log(a);
                            if(v >= 95){
                                this.o.fgColor = '#59BD05';
                                }else if(v >= 80){
                                    this.o.fgColor = '#FE9D08';
                                    // this.o.inputColor ='#FE9D08';
                                }else{ 
                                    this.o.fgColor = '#F33A08';
                                }
                         },
                        // 'release':function(v){
                        //         if(v > '87.5'){
                        //             alert('si entro');
                        //             $('.dial').attr('ctx.fillStyle','#156CE1');//cambia color de barra y texto
                        //         }x
                        //     }, // ejecuta función enviando como parametro el valor de grafica
                        'readOnly':true //activida o desactiva mover barra con mause
                        });
                    }
                $("#btnGuardar").click(function(){
                    progressBar();
                });
                //Cierra Modal ESTUDIOS
                $("#cierreModalEstudios").click(function(){
                    $("#modalEstudios").modal('hide');      
                });
            </script>
        <!-- TERMINA PLUGIN PARA GRAFICOS -->

        <script type="text/javascript">
            // Data retrieved from https://gs.statcounter.com/browser-market-share#monthly-202201-202201-bar

            // Create the chart
            Highcharts.chart('container', {
                chart: {
                    type: 'column'
                },
                title: {
                    align: 'left',
                    text: '% de Avance por Colaborador'
                },
                // subtitle: {
                //     align: 'left',
                //     text: 'Posiciona el cursor en las columnas para mas detalles. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
                // },
                accessibility: {
                    announceNewData: {
                        enabled: false
                    }
                },
                xAxis: {
                    // type: 'category'
                    categories: [<?php while($row3 = pg_fetch_assoc($resultado3))
                                {
                                ?>
                                    '<?php echo $row3["nom_emp"]; ?>',
                                <?php 
                                } ?>]
                },
                yAxis: {
                    title: {
                        text: '% Capturado'
                    }
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        borderWidth: 0,
                        dataLabels: {
                            enabled: true,
                            format: '{point.y:.1f}%'
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
                },
                series: [
                    {
                        name: "Avance",
                        colorByPoint: true,
                        data: [
                                <?php while($row4 = pg_fetch_assoc($resultado4))
                                {
                                ?>
                                    <?php echo $row4['porc_captura']; ?>,
                                <?php 
                                } ?>
                            // {
                            //     name: "Chrome",
                            //     y: 63.06,
                            //     drilldown: "Chrome"
                            // },
                        ]
                    }
                ]
                // drilldown: {
                //     breadcrumbs: {
                //         position: {
                //             align: 'left'
                //         }
                //     },
                //     series: [
                //         {
                //             name: "Chrome",
                //             id: "Chrome",
                //             data: [
                //                 [
                //                     "v65.0",
                //                     0.1
                //                 ],
                //             ]
                //         }
                //     ]
                // }
            });

        </script>
    </footer>
</html>