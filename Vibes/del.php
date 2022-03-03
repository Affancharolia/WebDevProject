<?php
    $dbConn = mysqli_connect("localhost", "root", "", "event_management");
    if(mysqli_connect_errno($dbConn))
    {
        echo "Failed to connecct to Mysql:". mysqli_connect_error();
    }
    
    
    $sql = "INSERT INTO users(FNAME, LNAME, EMAIL_ID, PASSWORD, CONTACT_NO, LOCATION, DOB, GENDER) VALUES ('$fname', '$lname', '$email', '$password', '$contact', '$location', '$dob', '$gen')";
    mysqli_query($dbConn, $sql);


?>
