<?php
require_once 'connect.php';

$statement = $db->prepare("SELECT * FROM stu_information WHERE id = ?");
$statement->execute(array($_REQUEST['id']));
$result = $statement->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($result);

?>