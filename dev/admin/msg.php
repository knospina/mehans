<link href="style.css" rel="stylesheet" type="text/css" />
<?php 
if(isset($_GET['autoadded'])){
	echo "<h3>Auto pievienots.</h3>";}
else if(isset($_GET['autoedited'])){
	echo "<h3>Auto saglabāts.</h3>";}
else if(isset($_GET['autodeleted'])){
	echo "<h3>Auto izdzēsts.</h3>";}
?>