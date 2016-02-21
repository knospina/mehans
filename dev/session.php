<?php

if(!isset($_SESSION)) 
{ 
    session_start(); 
} 

$language;


if(isset($_GET['lang'])){
    if($_GET['lang'] == 'ru'){
        $language = 'ru';
    } else {
        $language = 'lv';
    }
} else {
    $language = 'lv';
}

$_SESSION['lang'] = $language;

include 'translations.php';

?>