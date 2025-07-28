<?php
// Database configuration
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "signin";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$email = $_POST['email'];
$password = $_POST['password'];

// Hash the password for security (recommended)
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// Insert data into the users table
$sql = "INSERT INTO users (email, password) VALUES ('$email', '$hashed_password')";

if ($conn->query($sql) === TRUE) {
    echo "Sign-in successful. Your data has been stored securely.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();
?>
