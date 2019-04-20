<?php
require('../init.php');
header('Content-Type:application/json');
$sql = "SELECT ibid, ib_msg, ib_color FROM cpc_index_barrage";
$result = mysqli_fetch_all(mysqli_query($conn, $sql), 1);
echo json_encode($result);
?>