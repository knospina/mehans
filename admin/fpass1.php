<script language="javascript" type="text/javascript">
function CheckPassForm(){
	filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	epasts = document.getElementById("fmail").value;
	form = document.getElementById("flog");
	if(flog.fuser.value.length==0 || flog.fmail.value.length==0) {alert('Aizpildiet visus laukus'); return false} 
	else if (filter.test(epasts)!=true){alert("Nepareizs e-pasta formats"); return false}
	else 
	{
	return true
	}
 }
</script>

<link href="style.css" rel="stylesheet" type="text/css" />
<form id="flog" action='' method="post" onsubmit="if(CheckPassForm() == true) {return true} else return false">
 <fieldset class="width">
  <h3>Aizmirsi paroli?</h3>
  <?php if (isset($errormsg)){ ?><p><?php echo $errormsg ?></p><?php } ?>
 <h4>Lietotaja vards: </h4><input type="text" name="fuser" id="fuser" /><br/>
 <h4>E-pasta adrese: </h4><input type="text" name="fmail" id="fmail" />
<br></br>
 <input type="submit" value="Tālāk"/>
 </fieldset>
</form>