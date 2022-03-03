<?php
    $hostname = "localhost";
    $username = "root";
    $passwd = "";
    $dbName = "event_management";

    $dbConn = mysqli_connect("localhost", "root", "", "event_management");
    

    if(mysqli_connect_errno($dbConn))
    {
        echo "Failed to connecct to Mysql:". mysqli_connect_error();
    }
    
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $contact = $_POST['contact'];
    $location = $_POST['location'];
    $dob = $_POST['dob'];
    $gen = $_POST['gen'];

    $sql = "INSERT INTO users(FNAME, LNAME, EMAIL_ID, PASSWORD, CONTACT_NO, LOCATION, DOB, GENDER) VALUES ('$fname', '$lname', '$email', '$password', '$contact', '$location', '$dob', '$gen')";
    mysqli_query($dbConn, $sql);


?>

