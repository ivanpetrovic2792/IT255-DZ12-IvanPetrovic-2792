<?php
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Methods: GET, POST');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token ,
    Authorization, Token, token, TOKEN');
    include("functions.php");
    if(isset($_POST['name']) && isset($_POST['capital']) &&
    isset($_POST['beds'])){
    $name = $_POST['roomName'];
    $capital = intval($_POST['capital']);
    $language = intval($_POST['language']);
    echo addRoom($name,$capital,$language);
    }
?>