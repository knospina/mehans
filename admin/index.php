<?php session_start();
$serverlink = mysql_connect("mysql9.000webhost.com","a8339098_root","19zizeklis90") or die (mysql_error());//pieslēdzos db
header('Content-Type:text/html; charset=UTF-8');
mysql_select_db("a8339098_mehans") or die (mysql_error());
mysql_query('SET NAMES UTF8');

function strtolower_utf8($string){ //garumzīmes pārvēršu par latīņu burtiem
  $convert_to = array("A", "a", "C", "c", "E", "e", "G", "g", "I", "i", "K", "k", "L", "l", "N", "n", "S", "s", "U", "u", "Z", "z"); 
  $convert_from = array("Ā", "ā", "Č", "č", "Ē", "ē", "Ģ", "ģ", "Ī", "ī", "Ķ", "ķ", "Ļ", "ļ", "Ņ", "ņ", "Š", "š", "Ū", "ū", "Ž", "ž"); 

  return str_replace($convert_from, $convert_to, $string); 
}

if(!isset($_SESSION['us'])){$_SESSION['us']=0;}
if(!isset($_SESSION['type'])){$_SESSION['type']="user";}
if (isset($_GET["logout"])){session_destroy();header("location:index.php"); $_SESSION['us']=0;}//izlogojos
if(!isset( $_GET['page'])){$_SESSION['page']=0;}
else {$_SESSION['page']=$_GET['page'];}


if($_SESSION["page"] == 6){

if(isset($_GET['autoedited'])){
	header( 'refresh: 3; url=./index.php?page=3&auto='.$_SESSION["auto"]); }
else if(isset($_GET['autoadded'])){
	header( 'refresh: 3; url=./index.php?auto=1'); }
else if(isset($_GET['autodeleted'])){
	header( 'refresh: 3; url=./index.php?auto=1'); }
else{header("location:?page=1");}
}

if(isset($_SESSION['us']) && $_SESSION['us'] > 0){
	$typeq="select type, username from user where ID = '".$_SESSION['us']."'";
	$res = mysql_query($typeq,$serverlink);
	$obj = mysql_fetch_object($res);
	$_SESSION['type'] = $obj->type;
	$_SESSION['username'] = $obj->username;
}

if(isset($_GET['delauto'])){ //dzēš ierakstu
	$_SESSION["del"] = mysql_real_escape_string($_GET["delauto"]);
	$query = "select * from article where ID='".$_SESSION["del"]."'";
	$res = mysql_query($query,$serverlink);
	if (mysql_num_rows($res) > 0 || $_SESSION['type']=="admin") { 
		$del = mysql_fetch_object($res);
		$qdel = "delete from article where ID ='".$_SESSION["del"]."'";
		$delcom = mysql_query($qdel,$serverlink);
		header("location:?page=6&autodeleted");
	}
}





if( isset($_POST["username"]) && (trim($_POST["username"])!="") && //login
	isset($_POST["password"]) && (trim($_POST["password"])!="")){
	$u = mysql_real_escape_string($_POST["username"]);
	$p = mysql_real_escape_string($_POST["password"]);
	$p = md5($p); //jauncējfunkcija
	$query = "select ID, username, type, status, reason from user where username='".$u."' and password='".$p."'";
	$result = mysql_query($query, $serverlink);
	if (mysql_num_rows($result) > 0 ) { //ja lietotājs ir , pārbauda lietotāja tipu un tt
		$userrow = @mysql_fetch_object($result);
		$_SESSION['status'] = $userrow->status;
		if($_SESSION['status'] == "active"){
			$_SESSION["us"] = $userrow->ID;
			$_SESSION["username"] = $userrow->username;
			$_SESSION["type"] = $userrow->type;
		}
		
		
	} 
	else {
		$logerrormsg = "Nepareizi ievadīti dati";
	}
}

//PIEVIENO RAKSTU!!!!
if ( isset($_POST["modelis"]) && (trim($_POST["modelis"])!="")){
	$marka = mysql_real_escape_string($_POST["marka"]);
	$modelis = mysql_real_escape_string($_POST["modelis"]);
	$query = "insert into article (marka, modelis) values('$marka','$modelis')";
			$rs = mysql_query($query, $serverlink);
			$result2=mysql_query($rsquery, $serverlink);
			$obj = @mysql_fetch_object($result2);
			$_SESSION["auto"]= $obj->ID;
			header("location:?page=6&autoadded");
		}




//rediģē rakstu
if (isset($_POST["editmodelis"]) && (trim($_POST["editmodelis"])!="")){
	$marka = mysql_real_escape_string($_POST["editmarka"]);
	$modelis = mysql_real_escape_string($_POST["editmodelis"]);
	$query = "update article set marka='".$marka."', modelis='".$modelis."' where ID='".$_SESSION["auto"]."'";
	$rs = mysql_query($query, $serverlink);
	header("location:?page=6&autoedited");
}



if ( isset($_POST["fuser"]) && (trim($_POST["fuser"])!="") && //pareoles atgūšanas 1.daļa
	 isset($_POST["fmail"]) && (trim($_POST["fmail"])!="")){
	$fu = mysql_real_escape_string($_POST["fuser"]);
	$fe = mysql_real_escape_string($_POST["fmail"]);
	$query = "select ID, question, answer, type, status from user 
			  where username='".$fu."' and 
			  email='".$fe."'";
	$result=mysql_query($query, $serverlink);
	$userrow = @mysql_fetch_object($result);
	if (mysql_num_rows($result) > 0 && $userrow->status == "active") {
		$_SESSION['id'] = $userrow->ID;
		header("location:?page=8");
	} else {
		$errormsg = "Nepareizi dati";
	}
}
if ( isset($_POST["fanswer"]) && (trim($_POST["fanswer"])!="")){// paroles atgūšanas 2.daļa
	$fa = mysql_real_escape_string($_POST["fanswer"]);
	$fa = md5($fa);
	$query = "select username, answer, type from user 
			  where ID='".$_SESSION['id']."'";
	$result=mysql_query($query, $serverlink);
	$userrow = @mysql_fetch_object($result);
	if ($fa == $userrow->answer) {
		$_SESSION["us"]= $_SESSION['id'];
		$_SESSION["username"]=$userrow->login;
		$_SESSION["type"]=$userrow->type;
		header("location:?page=1");
	} else {
		$errormsg = "Nepareiza atbilde";
	}
}	


?>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<title>Mehans administrēšana</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="description" content="Place your description here" />
<meta name="keywords" content="put, your, keyword, here" />
<link href="style.css" rel="stylesheet" type="text/css" />
</head>
<body id="page1">
<!-- HEADER -->
<div id="header">
  <div class="site-nav">
  <ul>
			<li><a href="../index.html">Pakalpojumi</a></li>
			<li><a href="../articles.php">Auto</a></li>
            <li><a href="../contact.html">Kontakti</a></li>
		</ul>
	</div>
</div>
<!-- CONTENT -->
<div id="content">
	<div class="top">
		<div class="bot" style="min-height:1300px;height:auto !important;height:713px">
			<div class="inner">
				<div class="wrapper">
                	<div class="col-1">
                    	<div>
<?php if (isset($_SESSION["us"]
) && ($_SESSION["us"]>0)) {
	 		include("./logged.php");}
			else include("./login.php"); ?>
            	</div> 
					</div>
					<div class="col-2">
<?php switch($_SESSION['page'])
{
  case 0: if ($_SESSION['us'] > 0){include("./auto.php");} break;
  case 1: if ($_SESSION['us'] > 0){include("./auto.php");} break;
  case 3: if($_SESSION['us'] > 0 && isset($_GET['auto'])){include("./showauto.php");} break;
  case 4: if($_SESSION['us'] > 0 && isset($_SESSION['auto'])){include("./editauto.php");} break;	
  case 5: if ($_SESSION['us'] > 0){include("./insertauto.php");} break;
  case 6: include ("./msg.php"); break;
  case 7: include("./fpass1.php"); break;
  case 8: include("./fpass2.php"); break;}
?>						
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- FOOTER -->
<div id="footer">
	<div class="indent">
		<div class="fleft">Copyright - <a href="http://lotart.tumblr.com/">Lotart foto</a></div>
    </div>
</div>
<script type="text/javascript"> Cufon.now(); </script>
</body>
</html>
