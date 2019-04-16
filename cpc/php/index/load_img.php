<?php
require('../init.php');
header("Content-Type:application/json");
$sql = "SELECT ic_img, ic_pid FROM cpc_index_corsouel LIMIT 0, 4";
$result = mysqli_fetch_all(mysqli_query($conn, $sql), 1);
echo json_encode($result);
?>