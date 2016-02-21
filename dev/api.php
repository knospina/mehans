<?php 
$serverlink = mysql_connect("mysql9.000webhost.com","a8339098_root","19zizeklis90") or die (mysql_error());//pieslēdzos db
//$serverlink = mysql_connect("localhost","root","") or die (mysql_error());//pieslēdzos db
mysql_select_db("a8339098_mehans") or die (mysql_error());
mysql_query('SET NAMES UTF8');
?>


<?php

function get_car_list()
{
  $sql = mysql_query("SELECT * FROM article order by marka, modelis");
  $car_list = array();
  if(mysql_num_rows($sql) > 0) {
    while($row = mysql_fetch_array($sql)) {
      array_push($car_list, (array("modelis" => $row['modelis'], "marka" => $row['marka'])));
    }
  }
  return $car_list;
}

function get_car_by_model($model)
{
  $sql = mysql_query("SELECT * FROM article WHERE marka LIKE '%".mysql_real_escape_string($model)."%' order by marka, modelis, ID");
  $car_list = array();
  if(mysql_num_rows($sql) > 0) {
    while($row = mysql_fetch_array($sql)) {
      array_push($car_list, (array("modelis" => $row['modelis'], "marka" => $row['marka'])));
    }
  }
  return $car_list;
}

function get_all_models()
{
  $sql = mysql_query("SELECT * FROM model order by model");
  $model_list = array();
  if(mysql_num_rows($sql) > 0) {
    while($row = mysql_fetch_array($sql)) {
      array_push($model_list, (array("model" => $row['model'])));
    }
  }
  return $model_list;
}

?>


<?php
// This is the API, 2 possibilities: show the app list or show a specific app by id.
// This would normally be pulled from a database but for demo purposes, I will be hardcoding the return values.

function get_app_by_id($id)
{
  $app_info = array();

  // normally this info would be pulled from a database.
  // build JSON array.
  switch ($id){
    case 1:
      $app_info = array("app_name" => "Web Demo", "app_price" => "Free", "app_version" => "2.0"); 
      break;
    case 2:
      $app_info = array("app_name" => "Audio Countdown", "app_price" => "Free", "app_version" => "1.1");
      break;
    case 3:
      $app_info = array("app_name" => "The Tab Key", "app_price" => "Free", "app_version" => "1.2");
      break;
    case 4:
      $app_info = array("app_name" => "Music Sleep Timer", "app_price" => "Free", "app_version" => "1.9");
      break;
  }

  return $app_info;
}

function get_app_list()
{
  //normally this info would be pulled from a database.
  //build JSON array
  $app_list = array(array("id" => 1, "name" => "Web Demo"), array("id" => 2, "name" => "Audio Countdown"), array("id" => 3, "name" => "The Tab Key"), array("id" => 4, "name" => "Music Sleep Timer")); 

  return $app_list;
}

$possible_url = array("get_app_list", "get_app", "get_car_list", "get_car_by_model", "get_all_models");

$value = "An error has occurred";

if (isset($_GET["action"]) && in_array($_GET["action"], $possible_url))
{
  switch ($_GET["action"])
    {
      case "get_app_list":
        $value = get_app_list();
        break;
      case "get_car_list":
        $value = get_car_list();
        break;
      case "get_all_models":
        $value = get_all_models();
        break;
      case "get_app":
        if (isset($_GET["id"]))
          $value = get_app_by_id($_GET["id"]);
        else
          $value = "Missing argument";
        break;
      case "get_car_by_model":
        if (isset($_GET["model"]))
          $value = get_car_by_model($_GET["model"]);
        else
          $value = "Missing argument";
        break;
    }
}

//return JSON array
exit(json_encode($value));
?>