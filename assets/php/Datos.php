<?php
	include('conexiones.php');
	$conexion = conectaBD_195_bdd_user_adminaudi();

	$opcion = $_POST['opcion'];
	// var_dump($opcion);
	
	switch ($opcion) {
		case 1: // REALIZA CONSULTA PARA INICIAR SESIÓN

			session_start();
			$NumEmpleado = $_POST['numEmpleado'];
			$Clave  = $_POST['clave'];


			if (empty($NumEmpleado) || empty($clave)) {
				//$query = "SELECT 'OK'::text as estado,1::integer as mensaje FROM user_adminaudi WHERE numempleado = '$NumEmpleado' AND password = '$Clave'";
				$query  = "SELECT 1::integer as estado,'OK'::text as mensaje,numemp,numpuesto FROM (SELECT numemp,numpuesto FROM satcentroauditoria WHERE numemp = $NumEmpleado) AS PUESTOS";
				$query .= "			WHERE numpuesto = 346 OR numpuesto=370 "; // 346: COORDINADOR           - 370: DIRECTOR CORPORATIVO
				$query .= "			OR numpuesto=35  OR numpuesto=32";  //  35: GTE TITULAR                 -  32: GTE División
				$query .= "			OR numpuesto=134 OR numpuesto=158"; // 158: CENTRALIZADOR               - 134: GTE Proyectos
				$query .= "			OR numpuesto=412 OR numpuesto=492"; // 412: COORDINADOR AUDITORIA OBRAS - 492: ENTRENAMIENTO A
				$query .= "			OR numpuesto=285 OR numpuesto=510"; // 285: COORDINADOR DE AUDITORIA    - 510: DIRECTOR DE AUDITORIA
				$query .= "			OR numpuesto=165 OR numpuesto=166"; // 165: GERENTE DE RIESGO           - 166: GERENTE NACIONAL
				$query .= "			OR numpuesto=37  OR numpuesto=34";  //  37: ENTRENAMIENTO               -  34: GERENTE DE ZONA
				$query .= "			OR numpuesto=396 OR numpuesto=77";  //PUESTOS PRUEBA PROGRAMADOR Y ANALISTA 
				$query .= "			OR numpuesto=110";  //PUESTOS PRUEBA PROGRAMADOR Y ANALISTA 

				$resp = pg_query($conexion,$query);
				$data = array();

				while($row = pg_fetch_array($resp)) {
					$data = $row;
				}
				// var_dump($data);
				if(!empty($data)){
					// echo "Entro";
					$_SESSION['log']= 1;

					$auth = array($data,'estado' => 1, 'mensaje' => 'OK');
				}else{
					// echo"No Entro";
					$auth = array('estado' => 2, 'mensaje' => 'OK');
					session_destroy();
				}
				// if(!empty($data)) {	
				// 	$_SESSION['log']= 1;

				// 	$auth = array('estado' => 1, 'mensaje' => 'OK');

				// } else {
				// 	$auth = array('estado' => 2, 'mensaje' => 'OK');
				// 	session_destroy();
				// }
				echo json_encode($data);
			} else {
				echo "Falla en el Case1 (Datos.php)";
			}
			break;
		case 2: // REALIZA CONSULTA PARA BUSCAR EMPLEADO
			$NumEmpleado = $_POST['numEmpleado'];

			if (empty($NumEmpleado) || empty($clave)) {
			$query  = "SELECT c.numemp,c.nombre,c.numpuesto,c.puesto,b.numerocentro,b.nombrecentro FROM cat_empleados AS a ";
			$query .= "		INNER JOIN cat_centro AS B ";
			$query .= "			ON a.centro = b.numerocentro ";
			$query .= "		INNER JOIN satcentroauditoria AS c ";
			$query .= "			ON a.num_emp = CAST(c.numemp AS text) ";
			$query .= "		WHERE a.num_emp LIKE '%$NumEmpleado%'";
			$resp = pg_query($conexion,$query);
			$data = array();

			while($row = pg_fetch_array($resp)) {
				$data = $row;
			}

			if(!empty($data)) {	
				$_SESSION['log']= 1;

				$auth = array($data);

			} else {
				$data = array('estado' => 2, 'mensaje' => 'OK');
				// session_destroy();
			}
			echo json_encode($data);
		} else {
			echo "Falla en el query (Datos.php)";
		}
		break;
		case 3: //REGISTRO DE NUEVO USUARIO
			$numeroemp = $_POST['numeroemp'];
			$nomemp    = $_POST['nomemp'];
			$passw     = $_POST['passw'];
			$centroemp = explode("-", $_POST['centroemp']);
			// var_dump($centroemp);

			if(!empty($numeroemp) || !empty($nomemp) || !empty($passw) || !empty($centroemp))
			{
				$squery  = "INSERT INTO user_adminaudi AS a ";
    			$squery	.= "				(numempleado,nomempleado,password,numerocentro,nombrecentro) ";
				$squery	.= "					SELECT '".$numeroemp."','".$nomemp."','".$passw."','".$centroemp['0']."','".$centroemp['1']."' ";
				$squery	.= "						WHERE ";
    			$squery	.= "							EXISTS (SELECT numerocentro FROM cat_centro AS b WHERE numerocentro = '".$centroemp[0]."')";
    			$squery .= "						AND NOT EXISTS(SELECT numempleado FROM user_adminaudi WHERE numempleado = '".$numeroemp."');";

				$resp = pg_query($conexion,$squery);

				$row = pg_affected_rows($resp);
				// echo $row;

				if($row == '1')
				{	
					$auth = array('estado' => 1, 'mensaje' => 'TRUE');

				}	else {
						$auth = array('estado' => 2, 'mensaje' => 'FALSE');
					}
				echo json_encode($auth);
			}else{
					echo "Falla en el Case3 (Datos.php)";
				}
 			break;
	}

?>