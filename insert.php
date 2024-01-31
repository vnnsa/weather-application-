<?php
include('api.php');
$search= isset($_GET['title']) ? $_GET['title']:'';
$apiURL = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q='.$search.'&appid=4354d10655c26c4c0ace6b5030ebaaa3';

$api_data = file_get_contents($apiURL);
$api_data = json_decode($api_data, true);

$value1 = $api_data['main']['temp'];
$value2 = $api_data['main']['humidity'];
$value3 = $api_data['wind']['speed'];
$value4 = $api_data['main']['pressure'];
$value5 = $api_data['name'];
$value6 = $api_data['timezone'];
$value7 = $api_data['visibility'];
$value8 = $api_data['weather']['0']['main'];
$value9 = $api_data['weather']['0']['description'];

?>