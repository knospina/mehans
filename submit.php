<?php include 'session.php'; ?>
<?php

$post_date = file_get_contents("php://input");
$data = json_decode($post_date);

$completeSubject = $data->name . ' ' . $data->subject; 
mail("siamehans@gmail.com",$completeSubject,$data->message,"From: ".$data->email."\n");
echo $contactForm9[$language];

?>