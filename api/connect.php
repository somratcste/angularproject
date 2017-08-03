<?php
$dbhost = '127.0.0.1';
$dbname = 'student';
$dbuser = 'root';
$dbpass = '123456';
try {
    $db = new PDO("mysql:host={$dbhost};dbname={$dbname}",$dbuser,$dbpass);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e) {
    echo "Connection error: ".$e->getMessage();
}
?>