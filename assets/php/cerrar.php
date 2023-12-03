<?php

session_start();
$_SESSION['numempleado'];
// $_SESSION['log'];
session_destroy();

header('location: ../../login_audi.php');

?>