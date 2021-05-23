<?php
require_once 'config.php';
$stmt = $pdo->query('SELECT * FROM msg');
$reclist = array();
while ($row = $stmt->fetch())
{
    $rec              = array(
        "name"          => $row['name'],
        "message"        => $row['message']
    );
    $reclist[] = $rec;
}
echo json_encode($reclist);
$stmt = null;
$pdo = null;