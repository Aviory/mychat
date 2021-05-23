<?php 


$fname = $_POST["firstname"];
$lname = $_POST["lname"];
$login = $_POST["login"];
$password = $_POST["password"];

if ($login=="navi"&&$password=="pork"){
	echo " my magysty ".$fname;
}
else{
	echo "privet krystyanin";
}
?>