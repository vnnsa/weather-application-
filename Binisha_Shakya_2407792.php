
<?php
    // Display weather data
    require_once 'config.php';

    $conn = new mysqli($host, $username, $password, $database);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT * FROM weather_data";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "<h2>Weather Data</h2>";
        echo "<ul>";
        while ($row = $result->fetch_assoc()) {
            echo "<li>{$row['city']}: {$row['temperature']}°C, {$row['conditions']}</li>";
        }
        echo "</ul>";
    } else {
        echo "<p>No weather data available</p>";
    }

    $conn->close();
    ?>