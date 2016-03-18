<?php

$post_date = file_get_contents("php://input");
$data = json_decode($post_date);

$completeSubject = $data->name . ' ' . $data->subject; 
$response = mail("evita.knospina@gmail.com",$completeSubject,$data->message,"From: ".$data->email."\n");
echo $response;

?>