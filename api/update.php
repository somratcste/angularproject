<?php
require_once 'connect.php';

$data = (array)json_decode(file_get_contents("php://input"));
$statement = $db->prepare("UPDATE stu_information SET name=?,department=?,session=?,degree=?,p_year=? WHERE id=?");
$statement->execute(array($data['name'],$data['department'],$data['session'], $data['degree'], $data['p_year'],$data['id']));

?>