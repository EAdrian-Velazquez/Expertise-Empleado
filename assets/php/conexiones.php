<?php	
function conectaBD_195_bdd_user_adminaudi() {
      $server = 'localhost';
      $user = 'postgres';
      $pass = '1234';
      $bd = 'postgres';
      $connection = pg_connect("host=$server dbname=$bd user=$user password=$pass") or die ("Error de conexion servidor ".$server);
      return $connection;
};
?>