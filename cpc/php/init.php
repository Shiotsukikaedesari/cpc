<?php
header("Access-Control-Allow-Origin:http://localhost:8080");
$conn = mysqli_connect('127.0.0.1', 'root', '', 'cpc', '3306', '');
$sql = "SET NAMES UTF8";
$result = mysqli_query($conn, $sql);
?>