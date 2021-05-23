<?php
$a = $_POST["text"];
$name = $_POST["name"];
if ($a=="1")
    echo "Привет, от сервера,".$name;
if ($a=="2")
    echo "Пока, от сервера,".$name;