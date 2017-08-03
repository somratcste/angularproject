<?php
require_once 'connect.php';

$statement = $db->prepare("INSERT INTO stu_information (name,department,session,degree,p_year) VALUES (?,?,?,?,?)");
$statement->execute(array($_POST['name'],$_POST['department'],$_POST['session'], $_POST['degree'], $_POST['p_year']));

?>