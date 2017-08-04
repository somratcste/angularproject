<?php
require_once 'connect.php';
$data = (array)json_decode(file_get_contents("php://input"));
$statement = $db->prepare("INSERT INTO stu_information (name,department,session,degree,p_year) VALUES (?,?,?,?,?)");
$statement->execute(array($data['name'],$data['department'],$data['session'], $data['degree'], $data['p_year']));

?>