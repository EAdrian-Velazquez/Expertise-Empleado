<?php 
class Conexion{	  
    public static function Conectar() {        
        define('servidor', 'localhost');
        define('nombre_bd', 'postgres');
        define('usuario', 'postgres');
        define('password', '1234');					        
        // $opciones = array(PDO::PGSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8');
        // $opciones = array(PDO::rowCount());
        try{
            $conexion = new PDO("pgsql:host=".servidor."; dbname=".nombre_bd, usuario, password);			
            return $conexion;
        }catch (Exception $e){
            die("El error de Conexión es: ". $e->getMessage());
        }
    }
}

$conexion2=pg_connect("host=localhost dbname=postgres user=postgres password=1234");
?>