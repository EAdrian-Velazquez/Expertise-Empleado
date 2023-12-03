<?php
  // Programador: Adrian Velazquez.
  // Programado entre Julio-2022 / en curso.


    include('../assets/php/conexiones.php');//CONEXION TRADICIONAL
    include('bd/conexion.php'); //CONEXIÓN PDO
    $objeto      = new Conexion(); //OBJETO PDO INSTANCIAR
    $conexionp    = $objeto->Conectar(); // LLAMAR A FUNCION CONECTAR
    $conexion = conectaBD_195_bdd_user_adminaudi();



//// CONSULTA PARA SELECT NIVEL ACADEMICO TABLERO ////////////////
    // $consultaT = "SELECT * FROM cat_nivacad ORDER BY 1 ASC";
    //     $resultadoT = pg_query($conexion,$consultaT);
//// TERMINA  ////////////////

//// CONSULTA PARA SELECT NIVEL ACADEMICO MODAL ////////////////
    $consultaM = "SELECT * FROM cat_nivacad ORDER BY 1 ASC";
        $resultadoM = pg_query($conexion,$consultaM);
//// TERMINA  ////////////////

//// CONSULTA PARA SELECT CATEGORIA CURSOS MODAL////////////////
    $consultaM1 = "SELECT * FROM cat_categcursos ORDER BY 1 ASC";
        $resultadoM1 = pg_query($conexion,$consultaM1);
        // print_r (pg_fetch_assoc($resultado1));
//// TERMINA  ////////////////

//// SELECT SI - NO TITULO MODAL ESTUDIOS          ////////////////
    $consultaSNT = "SELECT * FROM cat_sino";
        $resultadoSNT = pg_query($conexion,$consultaSNT);
        // print_r (pg_fetch_assoc($resultado1));
//// TERMINA  SELECT SI - NO TITULO MODAL ESTUDIOS ////////////////

//// SELECT SI - NO COMP MODAL ESTUDIOS            ////////////////
    $consultaSNC = "SELECT * FROM cat_sino";
        $resultadoSNC = pg_query($conexion,$consultaSNC);
        // print_r (pg_fetch_assoc($resultado1));
//// TERMINA SELECT SI - NO COMP MODAL ESTUDIOS    ////////////////

//// SELECT SI - NO CED PROF MODAL ESTUDIOS        ////////////////
    $consultaSNCP = "SELECT * FROM cat_sino";
        $resultadoSNCP = pg_query($conexion,$consultaSNCP);
        // print_r (pg_fetch_assoc($resultado1));
/// TERMINA SELECT SI - NO CED PROF MODAL ESTUDIOS ////////////////

//// SELECT SI - NO CONSTANCIA MODAL CURSO CORPO        ////////////////
$consultaSNCCC = "SELECT * FROM cat_sino";
$resultadoSNCCC = pg_query($conexion,$consultaSNCCC);
// print_r (pg_fetch_assoc($resultado1));
/// TERMINA SELECT SI - NO CONSTANCIA MODAL CURSO CORPO ////////////////

//// SELECT SI - NO CONSTANCIA MODAL CURSO CORPO        ////////////////
$consultaSTATUS = "SELECT * FROM cat_estatus";
$resultadoSTATUS = pg_query($conexion,$consultaSTATUS);
// print_r (pg_fetch_assoc($resultado1));
/// TERMINA SELECT SI - NO CONSTANCIA MODAL CURSO CORPO ////////////////
    
    $result = array();
    $consultaf = "SELECT * FROM func_conteo_campos_vacios()"; //función calcula campos vacios para %captura
        $resultadof = $conexionp->prepare($consultaf);
        $resultadof->execute();        
   
    $consulta2 = "SELECT AVG(porc_captura) AS PORC FROM datosemp"; //CONSULTA PARA GRAFICA DE PASTEL
        $resultado2 = $conexionp->prepare($consulta2);
        $resultado2->execute();

//// SELECT GRAFICO BARRAS AVANCE CAPTURA CENTRO////////////////
    // Obtengo nombre de usuario de la sesión de la URL
    $nomEmpleado   = $_GET['nomEmpleado'];
    $apepaEmpleado = $_GET['apepaEmpleado'];
    $apemaEmpleado = $_GET['apemaEmpleado'];
    $empleado = $nomEmpleado.' '.$apepaEmpleado.' '.$apemaEmpleado;
    $consulta3 = "SELECT nom_emp,porc_captura FROM datosemp WHERE gte_tit_respo='$empleado'";
        $resultado3 = pg_query($conexion,$consulta3);

    $consulta4 = "SELECT nom_emp,porc_captura FROM datosemp WHERE gte_tit_respo='$empleado'";
        $resultado4 = pg_query($conexion,$consulta4);
?>