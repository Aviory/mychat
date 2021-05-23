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
    $stmt = $pdo->prepare("DELETE FROM msg where message =:message AND name =:name" );
    $stmt->execute(array(':name'=>$name,':message'=>$text));
    $stmt = null;
    $pdo = null;
    echo "send ".$text;

