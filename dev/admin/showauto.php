<?php
	$_SESSION["auto"] = mysql_real_escape_string($_GET["auto"]);
	$query = "select * from article where ID='".$_SESSION["auto"]."'";
	$rs = mysql_query($query, $serverlink);
	$obj = @mysql_fetch_object($rs);
	$marka= $obj->marka;
	$modelis= $obj->modelis;
	$gads= $obj->gads;
	$motors= $obj->motors;
	$komentari= $obj->komentari;
	
	$ti = $obj->ID;

	$autquerry = "select username, ID from user where ID='".$uid."'";
	$autcheck = mysql_query($autquerry, $serverlink);
	$auth = mysql_fetch_object($autcheck);
	$author = $auth->username;
	$authorid = $auth->ID;
	
$recset = mysql_query($comquery,$serverlink);
?>
<script type="text/javascript">
<!--
function del(){
var answer = confirm ('Vai esi pārliecināts?');
if (answer)
return true
else
return false
}
// -->
</script>
<link href="style.css" rel="stylesheet" type="text/css" />

<fieldset>
<table width='450px' border='1'>
<tr>
<th>Marka</th>
<th>Modelis</th>
</tr>
<tr>
<td width='100px'><?php echo $marka; ?></td>
<td width='100px'><?php echo $modelis; ?></td>
</tr>
</table>
<br />
 <?php 
 echo "<br></br><a href=index.php?page=4&auto=".$_SESSION["auto"].">Rediģēt</a>";
 echo "<br></br><a href='?page=6&delauto=".$_SESSION["auto"]."' onClick='if(del() == true) {return true} else return false'>Dzēst</a>";
 ?>
 </fieldset>



