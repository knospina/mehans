<?php session_start();
$serverlink = mysql_connect("mysql9.000webhost.com","a8339098_root","19zizeklis90") or die (mysql_error());//pieslēdzos db
header('Content-Type:text/html; charset=UTF-8');
mysql_select_db("a8339098_mehans") or die (mysql_error());
mysql_query('SET NAMES UTF8');

function strtolower_utf8($string){ //garumzīmes pārvēršu par latīņu burtiem
  $convert_to = array("A", "a", "C", "c", "E", "e", "G", "g", "I", "i", "K", "k", "L", "l", "N", "n", "S", "s", "U", "u", "Z", "z"); 
  $convert_from = array("Ā", "ā", "Č", "č", "Ē", "ē", "Ģ", "ģ", "Ī", "ī", "Ķ", "ķ", "Ļ", "ļ", "Ņ", "ņ", "Š", "š", "Ū", "ū", "Ž", "ž"); 

  return str_replace($convert_from, $convert_to, $string); 
}?>

<?php 
	$checkquery = mysql_query("SELECT * FROM article WHERE modelis LIKE '%".mysql_real_escape_string($_POST['modelis'])."%'");
	$rs = mysql_query($checkquery, $serverlink);
	$rows = mysql_num_rows($rs);
	
if (!isset($_GET['pagenum'])) 
{ 
$pagenum = 1; 
}
else {$pagenum = $_GET['pagenum'];}

?>
<link href="style.css" rel="stylesheet" type="text/css" />

 <fieldset>
<?php
if ($rows > 0 ) {
$page_rows = 30;
	$last = ceil($rows/$page_rows);
	if ($pagenum < 1) 
	{ 
		$pagenum = 1; 
	} 
	else if ($pagenum > $last) 
	{ 
		$pagenum = $last; 
	}
	$max = 'limit ' .($pagenum - 1) * $page_rows .',' .$page_rows;
	$query = "select * from article where MODELIS like '%".mysql_real_escape_string($_POST['modelis'])."%' order by modelis, marka, ID $max";
	$rs = mysql_query($query, $serverlink);
	$sk=0;
	while( $sk >= 0 )
	{
	if ($sk == 0){
	$row = mysql_fetch_array($rs);
	$theme = $row['modelis'];
	$sk = 1;}
		echo "<fieldset><table>";
		do
		{
		$comid = $row['ID'];
		echo "<tr><td width='300'>".$row['modelis']."</td>
		<td>Kategorija: ".$row['marka']."</td></tr>";
		if(!$row = mysql_fetch_array($rs)){$sk = -1;}
		}while($theme == $row['modelis'] && $sk >= 0);
		
		echo "</table></fieldset>";
		$theme = $row['modelis'];
	}
	$sk=1;
	echo "<center>";
	while ($sk != $last+1){
		if ($sk == $pagenum){echo $sk." ";}
		else{echo "<a href='?page=".$_SESSION['page']."&pagenum=".$sk."'>".$sk."</a> ";}
		$sk++;
	}
	echo "</center>";
} else {
		echo "Pēc Jūsu pieprasījuma nekas netika atrasts";
} 
?>
 </fieldset>
 
 
 
 
 
 
 
 