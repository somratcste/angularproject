<?php
require_once 'connect.php';

$statement = $db->prepare("DELETE FROM stu_information WHERE id = ?");
$statement->execute(array($_REQUEST['id']));

?>