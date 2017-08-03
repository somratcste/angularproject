<?php
require_once 'connect.php';

$statement = $db->prepare("SELECT * FROM stu_information");
$statement->execute();
$result = $statement->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($result);

?>