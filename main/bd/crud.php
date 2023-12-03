<?php
include('../../assets/php/conexiones.php'); //CONEXION TRADICIONAL
include('../bd/conexion.php'); //CONEXIÓN PDO
$objeto      = new Conexion(); //OBJETO PDO INSTANCIAR
$conexion    = $objeto->Conectar(); // LLAMAR A FUNCION CONECTAR

$opcion      =  (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$empleado    =  (isset($_POST['empleado'])) ? $_POST['empleado'] : '';//EMPLEADO SESION
$nomEmpleado    =  (isset($_POST['nomEmp'])) ? $_POST['nomEmp'] : '';// NOM - EMPLEADO SESION
$empleadoE    =  (isset($_POST['empleadoE'])) ? $_POST['empleadoE'] : '';//EMPLEADO ESTUDIOS PARA LLENAR DATATABLE
$empleadoC    =  (isset($_POST['empleadoC'])) ? $_POST['empleadoC'] : '';//EMPLEADO CURSOS PARA LLENAR DATATABLE
$num_empE    =  (isset($_POST['num_emp'])) ? $_POST['num_emp'] : '';//EMPLEADO ESTUDIOS PARA UPDATE
$empleadoExpCpl    =  (isset($_POST['empleadoExpC'])) ? $_POST['empleadoExpC'] : '';//EMPLEADO EXP CPPL PARA LLENAR DATATABLE

$user_id     =  (isset($_POST['user_id'])) ? $_POST['user_id'] : '';

$niv_acad    =  (isset($_POST['niv_acad'])) ? $_POST['niv_acad'] : '';
$nom_carr    =  (isset($_POST['nom_carr'])) ? $_POST['nom_carr'] : '';
$titulo      =  (isset($_POST['titulo'])) ? $_POST['titulo'] : '';
$cedula      =  (isset($_POST['cedula'])) ? $_POST['cedula'] : '';
$compro      =  (isset($_POST['compro'])) ? $_POST['compro'] : '';
$nom_institu =  (isset($_POST['nom_institu'])) ? $_POST['nom_institu'] : '';
$fech_inic   =  (isset($_POST['fech_inic']) ? $_POST['fech_inic'] : '');
$fech_conc   =  (isset($_POST['fech_conc'])) ? $_POST['fech_conc'] : '';

$cate_cursos =  (isset($_POST['cate_cursos'])) ? $_POST['cate_cursos'] : '';
$tipo_curso  =  (isset($_POST['tipo_curso'])) ? $_POST['tipo_curso'] : '';
$cursos      =  (isset($_POST['cursos'])) ? $_POST['cursos'] : '';

$fechaExt    =  (isset($_POST['fechaExt'])) ? $_POST['fechaExt'] : '';
$empreExt    =  (isset($_POST['empreExt'])) ? $_POST['empreExt'] : '';
$puestExt    =  (isset($_POST['puestExt'])) ? $_POST['puestExt'] : '';
$actExt      =  (isset($_POST['actExt'])) ? $_POST['actExt'] : '';
$antigExt    =  (isset($_POST['antigExt'])) ? $_POST['antigExt'] : '';

$id_nivacad  =  (isset($_POST['id_nivacad'])) ? $_POST['id_nivacad'] : '';
$id_catcurso =  (isset($_POST['id_catcurso'])) ? $_POST['id_catcurso'] : '';
$nom_curso   =  (isset($_POST['nom_curso'])) ? $_POST['nom_curso'] : '';

$tituloCC    =  (isset($_POST['tituloCC'])) ? $_POST['tituloCC'] : '';
$timeIncioCC =  (isset($_POST['timeIncioCC'])) ? $_POST['timeIncioCC'] : '';
$timeFinCC   =  (isset($_POST['timeFinCC'])) ? $_POST['timeFinCC'] : '';
$duracionCC  =  (isset($_POST['duracionCC'])) ? $_POST['duracionCC'] : '';
$imparteCC   =  (isset($_POST['imparteCC'])) ? $_POST['imparteCC'] : '';
$escuelaCC   =  (isset($_POST['escuelaCC'])) ? $_POST['escuelaCC'] : '';
$estatusCC   =  (isset($_POST['estatusCC'])) ? $_POST['estatusCC'] : '';
$constanciaCC=  (isset($_POST['constanciaCC'])) ? $_POST['constanciaCC'] : '';

// echo $user_id;
// echo $username;


switch($opcion){
    case 1://CONSULTA LLENA TODO EL DATATABLE AVANCE
        $consulta   = "SELECT gte_tit_respo AS gte_resp,COUNT(gte_tit_respo) AS emp_a_cargo,(SELECT COUNT(porc_captura) FROM datosemp WHERE gte_tit_respo='$empleado' ";
        $consulta  .= "AND porc_captura = 100) AS cap_fin,(SELECT COUNT(porc_captura) FROM datosemp WHERE gte_tit_respo='$empleado' AND porc_captura < 100) ";
        $consulta  .= "AS cap_pen,(SELECT AVG(porc_captura) FROM datosemp WHERE gte_tit_respo='$empleado') AS porc ";
        $consulta  .= " FROM datosemp WHERE gte_tit_respo='$empleado' GROUP BY gte_tit_respo"; //optiene solo los que tienen avance menor a 100
        $resultado  = $conexion->prepare($consulta);
        $resultado->execute();

        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
    break;    
    case 2: // QUERY PARA MUESTRA DATOS MODULO MI INFO ESTUDIOS
        $consulta  = "SELECT idestudio, num_emp, ";
        $consulta .= "  CASE nivel_acad ";
        $consulta .= "      WHEN '1' THEN 'Licenciatura' ";
        $consulta .= "      WHEN '2' THEN 'Ingenieria' ";
        $consulta .= "      WHEN '3' THEN 'Maestria' ";
        $consulta .= "      WHEN '4' THEN 'Doctorado' ";
        $consulta .= "  END AS nivel_acad, nom_carrer, ";
        $consulta .= "  CASE titulo ";
        $consulta .= "      WHEN '1' THEN 'SI' ";
        $consulta .= "      WHEN '2' THEN 'NO' ";
        $consulta .= "  END AS titulo, ";
        $consulta .= "  CASE cedula ";
        $consulta .= "      WHEN '1' THEN 'SI' ";
        $consulta .= "      WHEN '2' THEN 'NO' ";
        $consulta .= "  END AS cedula, ";
        $consulta .= "  CASE comprobante ";
        $consulta .= "      WHEN '1' THEN 'SI' ";
        $consulta .= "      WHEN '2' THEN 'NO' ";
        $consulta .= "  END AS comprobante, nom_intitu, fech_inic, fech_conc FROM estudiosemp WHERE num_emp=$empleado";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute(); 

        // $to = "edgar.velazquez@coppel.com, ramon.pio@coppel.com";
        // $subject = "Enviado desde PHP";
        // $message = "Se inicio sesión como programador";
        // $headers = "From: edgar.velazquez@coppel.com" . "\r\n" . "CC: pmartineza@coppel.com";
 
        // mail($to, $subject, $message, $headers);

        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
    break;
    case 3: //BORRA REGISTRO DEL DATATABLE ESTUDIOS       
        $consulta = "SELECT * FROM func_conteo_campos_vaciosEst($num_empE)"; //función calcula campos vacios para %captura
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();

        $consulta = "DELETE FROM estudiosemp WHERE idestudio=$user_id";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        // $resultado1 = pg_query($conexion2,$consulta);
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
    break;
    case 4: //CONSULTA LLENA DATATABLE COLABORADORES A CARGO
        $consulta = "SELECT * FROM datosemp WHERE gte_tit_respo='$nomEmpleado'"; //consulta optiene datos
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();

        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
    break;
    case 5: // LLAMADA A CATALOGO NIVEL ACADEMICO Y CARRERAS MODAL
        $conexion2 = conectaBD_195_bdd_user_adminaudi(); // LLAMAR A CLASE PARA ESTABLECER CONEXION 
        $consulta = "SELECT idcarrera,nombrecarrera FROM cat_carrera WHERE nivelacad='$id_nivacad'";
        $resultado = pg_query($conexion2,$consulta); //EJECUTAR CONEXION Y QUERY      
        $data=pg_fetch_assoc($resultado);

        $html= "<option value='0' selected='selected'>Selecciona tu Carrera</option>";
        while ($rowC = pg_fetch_assoc($resultado)) {
            $html .= "<option value='".$rowC['nombrecarrera']."'>".$rowC['nombrecarrera']."</option>";
        }
        echo $html;
    break;
    case 6: // CATALOGO SUBCATEGORIAS
        $conexion2 = conectaBD_195_bdd_user_adminaudi(); // LLAMAR A CLASE PARA ESTABLECER CONEXION 
        $consulta = "SELECT idsubcategcursos,nomsubcategcursos FROM cat_subcategcursos WHERE idcategcursos='$id_catcurso'";
        $resultado = pg_query($conexion2,$consulta); //EJECUTAR CONEXION Y QUERY      
        // $data=pg_fetch_assoc($resultado);

        $html= "<option value='0' selected='selected'>Selecciona Curso</option>";
        $clase= 0;
        while ($rowC = pg_fetch_assoc($resultado)) {
            $clase ++;
            $html .= "<option value='".$rowC['nomsubcategcursos']."' name='".$rowC['idsubcategcursos']."'>".$rowC['nomsubcategcursos']."</option>";
        }
        echo $html;
    break;
    case 7: // CATALOGO CATCURSOS
        $conexion2 = conectaBD_195_bdd_user_adminaudi(); // LLAMAR A CLASE PARA ESTABLECER CONEXION 
        $consulta  = "SELECT idcursos,nomcursos FROM cat_cursos ";
        $consulta .= "                WHERE idcategcursos = (SELECT idsubcategcursos FROM cat_subcategcursos ";
        $consulta .= "                                       WHERE nomsubcategcursos='$nom_curso') ORDER BY 1 ASC";
        $resultado = pg_query($conexion2,$consulta); //EJECUTAR CONEXION Y QUERY      
        //$data=pg_fetch_assoc($resultado);

        $html= "<option value='0' selected='selected'>Selecciona Curso</option>";
        $clase= 0;
        while ($rowC = pg_fetch_assoc($resultado)) {
            $clase ++;
            $html .= "<option value='".$rowC['idcursos']."' name='".$rowC['nomcursos']."'>".$rowC['nomcursos']."</option>";
        }
        echo $html;
    break;
    case 8: //CONSULTA LLENA MODULO "YO" Y "MI INFORMACIÓN"
        $consulta = "SELECT * FROM datosemp WHERE num_emp=$empleado";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
    break;
    case 9: //LLENA DATATABLE MI INFO CURSOS
        $consulta  = " SELECT idcurso, num_emp,";
        $consulta .= "  CASE cate_cursos";
        $consulta .= "  WHEN '1' THEN 'Coorporativo'";
        $consulta .= "  WHEN '2' THEN 'Metodologías Obra y Construcción'";
        $consulta .= "  WHEN '3' THEN 'Finanzas'";
        $consulta .= "  WHEN '4' THEN 'Liderazgo'";
        $consulta .= "  WHEN '5' THEN 'Idiomas'";
        $consulta .= "  WHEN '6' THEN 'Administración y/o Planificaicón Proyectos'";
        $consulta .= "  WHEN '7' THEN 'Auditoria'";
        $consulta .= "  WHEN '8' THEN 'TI'";
        $consulta .= "  WHEN '9' THEN 'KPI´S'";
        $consulta .= "  WHEN '10' THEN 'GBD'";
        $consulta .= "  WHEN '11' THEN 'Desarrollo'";
        $consulta .= "  WHEN '12' THEN 'ETL´S'";
        $consulta .= "  WHEN '13' THEN 'Administrativo'";
        $consulta .= "  WHEN '14' THEN 'Otros'";
        $consulta .= "  WHEN '15' THEN 'Agregar Categoria'";
        $consulta .= " END AS cate_cursos";
        $consulta .= " ,tipocurso, cursos FROM cursosemp WHERE num_emp=$empleado";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        

        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
    break;
    case 10: // LLAMADA A CATALOGO NIVEL ACADEMICO Y CARRERAS MODAL
        $conexion2 = conectaBD_195_bdd_user_adminaudi(); // LLAMAR A CLASE PARA ESTABLECER CONEXION 
        $consulta = "SELECT idcarrera,nombrecarrera FROM cat_carrera WHERE nivelacad='$id_nivacad'";
        $resultado = pg_query($conexion2,$consulta); //EJECUTAR CONEXION Y QUERY      
        $data=pg_fetch_assoc($resultado);

        $html= "<option value='0' selected='selected'>Selecciona tu Carrera</option>";
        while ($rowC = pg_fetch_assoc($resultado)) {
            $html .= "<option value='".$rowC['nombrecarrera']."'>".$rowC['nombrecarrera']."</option>";
        }
        echo $html;
    break;
    case 11: //CONSULTA LLENA EL DATATABLE ESTUDIOS
        $consulta = "SELECT * FROM func_conteo_campos_vaciosEst($empleadoE)"; //función calcula campos vacios para %captura
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();

        $consulta  = "SELECT idestudio, num_emp, ";
        $consulta .= "  CASE nivel_acad ";
        $consulta .= "      WHEN '1' THEN 'Licenciatura' ";
        $consulta .= "      WHEN '2' THEN 'Ingenieria' ";
        $consulta .= "      WHEN '3' THEN 'Maestria' ";
        $consulta .= "      WHEN '4' THEN 'Doctorado' ";
        $consulta .= "  END AS nivel_acad ";
        $consulta .= "  ,nom_carrer, titulo, cedula, comprobante, nom_intitu, fech_inic, fech_conc FROM estudiosemp WHERE num_emp=$empleadoE"; //consulta optiene datos
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();

        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
    break;
    case 12: //INSERT DATATABLE ESTUDIOS
        $consulta  = "INSERT INTO estudiosemp(num_emp,nivel_acad,nom_carrer,titulo,cedula,comprobante,nom_intitu,fech_inic,fech_conc)";
        $consulta .= "VALUES($num_empE,'$niv_acad','$nom_carr','$titulo','$cedula','$compro','$nom_institu','$fech_inic','$fech_conc')";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();

        $consulta = "SELECT * FROM func_conteo_campos_vaciosEst($num_empE)"; //función calcula campos vacios para %captura
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();

        $consulta  = "SELECT * FROM estudiosemp WHERE num_emp=$empleadoE"; //consulta optiene datos
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();

        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
    break;
    case 13: //EDITAR DATATABLE ESTUDIOS
        $consulta = "UPDATE estudiosemp SET nivel_acad='$niv_acad', nom_carrer='$nom_carr', titulo='$titulo', cedula='$cedula', comprobante='$compro', nom_intitu='$nom_institu', fech_inic='$fech_inic',fech_conc='$fech_conc' WHERE num_emp=$num_empE AND idestudio=$user_id";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();

        $consulta = "SELECT * FROM func_conteo_campos_vaciosEst($num_empE)"; //función calcula campos vacios para %captura
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();

        $consulta  = "SELECT * FROM estudiosemp WHERE num_emp=$empleadoE"; //consulta optiene datos
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();

        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
    break;
    case 14: //CONSULTA LLENA EL DATATABLE CURSOS
        $consulta = "SELECT * from func_conteo_campos_vaciosCurso($empleadoC)"; //función calcula campos vacios para %captura
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();

        $consulta  = " SELECT idcurso, num_emp,";
        $consulta .= "  CASE cate_cursos";
        $consulta .= "  WHEN '1' THEN 'Coorporativo'";
        $consulta .= "  WHEN '2' THEN 'Metodologías Obra y Construcción'";
        $consulta .= "  WHEN '3' THEN 'Finanzas'";
        $consulta .= "  WHEN '4' THEN 'Liderazgo'";
        $consulta .= "  WHEN '5' THEN 'Idiomas'";
        $consulta .= "  WHEN '6' THEN 'Administración y/o Planificaicón Proyectos'";
        $consulta .= "  WHEN '7' THEN 'Auditoria'";
        $consulta .= "  WHEN '8' THEN 'TI'";
        $consulta .= "  WHEN '9' THEN 'KPI´S'";
        $consulta .= "  WHEN '10' THEN 'GBD'";
        $consulta .= "  WHEN '11' THEN 'Desarrollo'";
        $consulta .= "  WHEN '12' THEN 'ETL´S'";
        $consulta .= "  WHEN '13' THEN 'Administrativo'";
        $consulta .= "  WHEN '14' THEN 'Otros'";
        $consulta .= "  WHEN '15' THEN 'Agregar Categoria'";
        $consulta .= " END AS cate_cursos";
        $consulta .= " ,tipocurso, cursos FROM cursosemp WHERE num_emp=$empleadoC"; //consulta optiene datos
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();

        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
    break;
    case 15: //EDITAR DATATABLE CURSOS
        $consulta = "UPDATE cursosemp SET cate_cursos='$cate_cursos',tipocurso='$tipo_curso',cursos='$cursos' WHERE num_emp=$empleadoC AND idcurso=$user_id";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();

        $consulta = "SELECT * from func_conteo_campos_vaciosCurso($empleadoC)"; //función calcula campos vacios para %captura
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();

        $consulta  = "SELECT * FROM cursosemp WHERE num_emp=$empleadoC"; //consulta optiene datos
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();

        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
    break;
    case 16: //INSERT DATATABLE CURSOS
        $consulta  = "INSERT INTO cursosemp(num_emp,cate_cursos,tipocurso,cursos)";
        $consulta .= "VALUES($empleadoC,'$cate_cursos','$tipo_curso','$cursos')";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();

        $consulta = "SELECT * from func_conteo_campos_vaciosCurso($empleadoC)"; //función calcula campos vacios para %captura
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();

        $consulta  = "SELECT * FROM cursosemp WHERE num_emp=$empleadoC"; //consulta optiene datos
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();

        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
    break;
    case 17: //BORRA REGISTRO DEL DATATABLE CURSOS       
        $consulta = "DELETE FROM cursosemp WHERE idcurso=$user_id";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        // $resultado1 = pg_query($conexion2,$consulta);
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);

       $consulta = "SELECT * from func_conteo_campos_vaciosCurso($empleadoC)"; //función calcula campos vacios para %captura
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
    break;
    case 18: //CONSULTA DATATABLE EXPERIENCIA COPPEL
        $consulta  = "SELECT numemp, TO_CHAR(fecha,'DD-tmMonth-YYYY') AS fechao, centro, puesto,SUBSTRING(CAST(antiguedad_mes/12 AS VARCHAR),1,1) as año, ";
        $consulta .= " TRUNC(MOD(antiguedad_mes,12)) AS mes FROM epcpplemp WHERE numemp=$empleadoExpCpl ORDER BY fecha desc ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        // $resultado1 = pg_query($conexion2,$consulta);
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
    break;
    case 19: //CONSULTA DATATABLE EXPERIENCIA EXTERNA
        $consulta = "SELECT * FROM func_conteo_campos_vaciosExpExt($empleadoExpCpl)"; //función calcula campos vacios para %captura
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();        

        $consulta = "SELECT * FROM expempext WHERE num_emp=$empleadoExpCpl ORDER BY 3 DESC";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();

        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
    break;
    case 20: //INSERT DATATABLE EXPERIENCIA EXTERNA
        $consulta  = "INSERT INTO expempext(num_emp,fexplabo_coppel,empexplabo_ext,pexplabo_ext,actexplabo_ext,antexplabo_coppel)";
        $consulta .= "VALUES($empleadoC,'$fechaExt','$empreExt','$puestExt','$actExt',$antigExt)";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();

        $consulta = "SELECT * FROM func_conteo_campos_vaciosExpExt($empleadoC)"; //función calcula campos vacios para %captura
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();

        $consulta  = "SELECT * FROM expempext WHERE num_emp=$empleadoExpCpl ORDER BY 3 DESC"; //consulta optiene datos
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();

        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
    break;
    case 21: //EDITAR DATATABLE EXPERIENCIA EXTERNA
        $consulta  = "UPDATE expempext SET fexplabo_coppel='$fechaExt',empexplabo_ext='$empreExt',pexplabo_ext='$puestExt',actexplabo_ext='$actExt',antexplabo_coppel=$antigExt ";
        $consulta .= "WHERE num_emp=$empleadoC AND idexpext=$user_id";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();

        $consulta = "SELECT * FROM func_conteo_campos_vaciosExpExt($empleadoC)"; //función calcula campos vacios para %captura
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();

        $consulta  = "SELECT * FROM expempext WHERE num_emp=$empleadoExpCpl ORDER BY 3 DESC"; //consulta optiene datos
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();

        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
    break;
    case 22: //BORRA REGISTRO DE DATATABLE EXPERIENCIA EXTERNA      
        $consulta = "DELETE FROM expempext WHERE idexpext=$user_id";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        // $resultado1 = pg_query($conexion2,$consulta);
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);

        $consulta = "SELECT * FROM func_conteo_campos_vaciosExpExt($empleadoC)"; //función calcula campos vacios para %captura
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
    break;
    case 23: //LLENA DATATABLE MI INFO EXPERIENCIA COPPEL
        $consulta  = "SELECT numemp, TO_CHAR(fecha,'DD-tmMonth-YYYY') AS fechao, centro, puesto,SUBSTRING(CAST(antiguedad_mes/12 AS VARCHAR),1,1) as año, ";
        $consulta .= " TRUNC(MOD(antiguedad_mes,12)) AS mes FROM epcpplemp WHERE numemp=$empleado ORDER BY fecha desc ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        

        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
    break;
    case 24: //LLENA DATATABLE MI INFO EXPERIENCIA EXTERNA
        $consulta  = "SELECT * FROM expempext WHERE num_emp = $empleado";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        

        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
    break;
    case 25://CONSULTA LLENA DATATABLEL AVANCE CENTRO - UNIC EMP
        $consulta   = "SELECT A.gte_tit_respo, TRUNC(AVG(B.porc_captura))AS PORCEST, ";
        $consulta  .= "TRUNC(AVG(C.porc_captura))AS PORCUR, ";
        $consulta  .= "TRUNC(AVG(D.porc_captura))AS PORCEXP, ";
        $consulta  .= "TRUNC(AVG(A.porc_captura))AS porcgral ";
        $consulta  .= "FROM datosemp AS A ";
        $consulta  .= "INNER JOIN estudiosemp AS B ON A.num_emp = B.num_emp ";
        $consulta  .= "INNER JOIN cursosemp   AS C ON A.num_emp = C.num_emp ";
        $consulta  .= "INNER JOIN expempext   AS D ON A.num_emp = D.num_emp ";
        $consulta  .= " WHERE a.nom_emp='$empleado' GROUP BY a.gte_tit_respo "; //optiene solo los que tienen avance menor a 100
        $resultado  = $conexion->prepare($consulta);
        $resultado->execute();

        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
    break;
    case 26: //SELECT LLENAR TABLA CURSOS CORPORATIVOS
        $consulta   = "SELECT * FROM cursocorp WHERE num_emp = $empleadoC"; 
        $resultado  = $conexion->prepare($consulta);
        $resultado->execute(); 

        $data=$resultado->fetchAll(PDO::FETCH_ASSOC); 
    break;
    case 27: //EDITAR DATATABLE CURSOS CORPORATIVOS
        $consulta  = "UPDATE cursocorp SET titulo='$tituloCC',duracion='$duracionCC',empresa_imparte='$imparteCC',escuela='$escuelaCC',periodo_inic='$timeIncioCC',periodo_fin='$timeFinCC',const_certif=$constanciaCC,estatus=$estatusCC";
        $consulta .= " WHERE num_emp=$empleadoC AND idccorp=$user_id";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();

        // $consulta = "SELECT * FROM func_conteo_campos_vaciosExpExt($empleadoC)"; //función calcula campos vacios para %captura
        //     $resultado = $conexion->prepare($consulta);
        //     $resultado->execute();

        $consulta  = "SELECT * FROM cursocorp WHERE num_emp = $empleadoC"; //consulta optiene datos
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();

        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
    break;
}
print json_encode($data, JSON_UNESCAPED_UNICODE); //envio el array final en formato json a AJAX



// <?php
// header('Content-type: application/json');
// include_once 'conexion.php';

// $objeto = new Conexion();
// $conexion = $objeto->Conectar();

// $result = array();

// $consulta = "SELECT nom_prod, sum(stock) FROM productos GROUP BY nom_prod ORDER BY sum(stock) DESC";
// $resultado = $conexion->prepare($consulta);
// $resultado->execute();

// while ($fila = $resultado->fetch(PDO::FETCH_ASSOC)){
//     array_push($result, array($fila["nom_prod"], $fila["sum(stock)"] ));
// }

// print json_encode($result, JSON_NUMERIC_CHECK);
// $conexion=null;