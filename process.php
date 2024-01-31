<?php


require_once 'config.php';

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the city from the form
    $city = $_POST['city'];

    // Connect to the database
    $conn = new mysqli($host, $username, $password, $database);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Loop through 7 days
    for ($day = 1; $day <= 7; $day++) {
        // You can use an API to get live weather data, but for simplicity, let's assume it's provided manually.
        $temperature = rand(-10, 30); // Random temperature between -10°C and 30°C
        $conditions = ['Clear', 'Cloudy', 'Rainy', 'Snowy'][rand(0, 3)]; // Random condition

        // Calculate the date for the current day
        $date = date('Y-m-d', strtotime("+$day days"));

        // Insert the weather data into the database
        $sql = "INSERT INTO weather_data (city, temperature, conditions, date) VALUES ('$city', $temperature, '$conditions', '$date')";
        $conn->query($sql);
    }

    // Close the database connection
    $conn->close();
}

?>
