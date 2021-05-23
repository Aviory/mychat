<?php

$host = "localhost";
$db = "chat";
$charset = "UTF8";
$user = "root";
$pass = "";


//    $host = "sql11.freemysqlhosting.net";
//$db = "sql11394318";
//$charset = "UTF8";
//$user = "sql11394318";
//$pass = "QZwWN86ybF";

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$opt = array(
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
);
$pdo = new PDO($dsn, $user, $pass, $opt);

//www.freemysqlhosting.net
//BiGp6Zb)Vx4Kp7en