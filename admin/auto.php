<link href="style.css" rel="stylesheet" type="text/css" />

<?php $sql = mysql_query("SELECT * FROM article order by marka, modelis, gads");
	
echo "<fieldset><table border='1' width='450px'><tr>
		<th>Marka</th>
		<th>Modelis</th>
		</tr>";
while($row = mysql_fetch_array($sql)) {
		$comid = $row['ID'];
		echo "<tr>
		<td width='250'><a href='?page=3&auto=".$comid."'>".$row['marka']."</a></td>
		<td width='200'>".$row['modelis']."</td>
		</tr>";
}
echo "</table>";
?>