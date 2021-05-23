<?php
require_once 'config.php';
$text = "";
$name = "";
if(isset($_POST['text'])){
    $text= $_POST["text"];
}
if(isset($_POST['name'])) {
    $name = $_POST["name"];
}
$stmt = $pdo->prepare("INSERT into msg (name, message) VALUES (:r_name, :message)");
$stmt->execute(array(':r_name' => $name, ':message'=>$text));
$stmt = null;
$pdo = null;
echo "send";