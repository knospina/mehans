<script language="javascript" type="text/javascript">
function CheckLogForm(){
	form = document.getElementById("log");
	if(form.username.value.length==0 || form.password.value.length==0) {alert('Visi lauki nav aizpildīti'); return false}
	else {
	return true
	}
}
function capsLock(e){
	 keycode = e.keyCode?e.keyCode:e.which;
	 shift = e.shiftKey?e.shiftKey:((keycode == 16)?true:false);
	 if(((keycode >= 65 && keycode <= 90) && !shift)||((keycode >= 97 && keycode <= 122) && shift))
	  document.getElementById('caps_lock').style.display = 'block';
	 else
	  document.getElementById('caps_lock').style.display = 'none';
}
</script>
<link href="style.css" rel="stylesheet" type="text/css" />
<form id="log" action='' method="post" onsubmit="if(CheckLogForm() == true) {return true} else return false">
	<div>
	<?php if (isset($logerrormsg)){ ?><p class="error"><?php echo $logerrormsg ?></p><?php } ?>
	<h4>Lietotājs:</h4>
    <div><input type="text" name="username" id="username" />
    </div>
   <h4>Parole:</h4>
    <div> <input type="password" name="password" id="password" onKeyPress="return capsLock(event)" />	</div>
	<input type="Submit" value="Log in!" />
    <a href='?page=7'><p style='padding: 0px;'>Aizmirsi paroli?</p></a>
    <div id="caps_lock" style="display:none; color:red; font-weight:bold">
	<p>Ieslēgts Caps Lock taustiņš. Pārliecinies, ka raksti paroli pareizi!</p></div>	
	</div>
    </form>
