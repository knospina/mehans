<?php 	$query = "select question from user
			  where ID='".$_SESSION['id']."'";
	$result=mysql_query($query, $serverlink);
	$userrow = @mysql_fetch_object($result);
	?>
<script language="javascript" type="text/javascript">
function CheckPassForm(){
	fpass2 = document.getElementById("fpass2");
	if(fpass2.fanswer.value.length==0) {alert('Ievadiet atbildi'); return false} 
	else {
	return true
	}
 }
</script>

<link href="style.css" rel="stylesheet" type="text/css" />
<form id="fpass2" action='' method="post" onsubmit="if(CheckPassForm() == true) {return true} else return false">
 <fieldset>
  <h3>Aizmirsi paroli?</h3>
  <?php if (isset($errormsg)){ ?><?php echo $errormsg ?><?php } ?>
 <h4>Slepenais jautajums:</h4><p style="color:#600;"><?php echo $userrow->question; ?></p>
 <h4>Atbilde: </h4><input type="text" name="fanswer" id="fanswer" />
<br></br>
 <input type="submit" value="Atjaunot"/>
 </fieldset>
</form>