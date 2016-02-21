<?php
if(isset($_GET['req'])){
$query = "select marka, modelis from requests where ID = '".mysql_real_escape_string($_GET['req'])."'";
$rs = mysql_query($query, $serverlink);
$req = mysql_fetch_object($rs);
}
?>
<script language="javascript" type="text/javascript">
function CheckAddAutoForm(){
	form = document.getElementById("autoadd");
	if(form.modelis.value.length==0) {alert('Visi lauki nav aizpildīti'); return false}
	else {
	return true
	}
}
</script>

<script type="text/javascript">
function loadingDiv ()
{
	document.getElementById("load").style.display = "block";
}
</script>
<link href="style.css" rel="stylesheet" type="text/css" />
<form id="autoadd" action='' method="post" enctype='multipart/form-data' onsubmit="if(CheckAddAutoForm() == true) {return true} else return false">
 <fieldset>
 <h3>Pievienot auto</h3>
  <?php if (isset($autoinserrormsg)){ ?><p class="error"><?php echo $autoinserrormsg ?></p><?php } ?>
  <h4>Marka: </h4> <select id="marka" name="marka" size="1">
<option value="Acura">Acura</option>
<option value="Alfa Romeo">Alfa Romeo</option>
<option value="Audi">Audi</option>
<option value="BMW">BMW</option>
<option value="Buick">Buick</option>
<option value="Cadillac">Cadillac</option>
<option value="Chevrolet">Chevrolet</option>
<option value="Chrysler">Chrysler</option>
<option value="Citroen">Citroen</option>
<option value="Daewoo">Daewoo</option>
<option value="DAF">DAF</option>
<option value="Daihatsu">Daihatsu</option>
<option value="Daimler-Benz">Daimler-Benz</option>
<option value="Dodge">Dodge</option>
<option value="Fiat">Fiat</option>
<option value="Ford">Ford</option>
<option value="GAZ">GAZ</option>
<option value="GMC">GMC</option>
<option value="Honda">Honda</option>
<option value="Hummer">Hummer</option>
<option value="Hyundai">Hyundai</option>
<option value="IFA">IFA</option>
<option value="Infiniti">Infiniti</option>
<option value="Isuzu">Isuzu</option>
<option value="Iveco">Iveco</option>
<option value="IŽ">IŽ</option>
<option value="Jaguar">Jaguar</option>
<option value="Jeep">Jeep</option>
<option value="Kia">Kia</option>
<option value="Lancia">Lancia</option>
<option value="Land Rover">Land Rover</option>
<option value="Lexus">Lexus</option>
<option value="Lincoln">Lincoln</option>
<option value="MAN">MAN</option>
<option value="Maserati">Maserati</option>
<option value="Mazda">Mazda</option>
<option value="Mercedes-Benz">Mercedes-Benz</option>
<option value="MG">MG</option>
<option value="Mini">Mini</option>
<option value="Mitsubishi">Mitsubishi</option>
<option value="Moskvičs">Moskvičs</option>
<option value="Nissan">Nissan</option>
<option value="Oldsmobile">Oldsmobile</option>
<option value="Opel">Opel</option>
<option value="Peugeot">Peugeot</option>
<option value="Plymouth">Plymouth</option>
<option value="Pontiac">Pontiac</option>
<option value="Porsche">Porsche</option>
<option value="RAF">RAF</option>
<option value="Renault">Renault</option>
<option value="Rolls-Royce">Rolls-Royce</option>
<option value="Rover">Rover</option>
<option value="Saab">Saab</option>
<option value="Scion">Scion</option>
<option value="Seat">Seat</option>
<option value="Sisu">Sisu</option>
<option value="Smart">Smart</option>
<option value="SsangYong">SsangYong</option>
<option value="Subaru">Subaru</option>
<option value="Suzuki">Suzuki</option>
<option value="Škoda">Škoda</option>
<option value="Toyota">Toyota</option>
<option value="UAZ">UAZ</option>
<option value="VAZ">VAZ</option>
<option value="Volvo">Volvo</option>
<option value="VW">VW</option>
<option value="ZAZ">ZAZ</option>>
</select>
<br />
<h4>Modelis:</h4><input type="text" name="modelis" id="modelis" value="<?php if(isset($_GET['req'])){echo $req->modelis;}?>"/>
<br />
 <input type="submit" value="Pievienot!" onclick='loadingDiv ()' />
 </fieldset>
</form>