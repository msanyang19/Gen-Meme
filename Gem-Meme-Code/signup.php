<?php

require_once 'source/db_connect.php';

if(isset($_POST['sibgup-btn'])) {

            $username = $_POST['user-name'];
            $email = $_POST['user-email'];
            $password = $_POST['user-pass'];

            $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        try {
            $SQLInsert = "INSERT INTO USERS (username, password, email, to_date)
                         VALUES (:username, :password, :email, now())";

            $statement = $conn = $conn->prepare($SQLInsert);
            $statement->execute(array(':username' => $username, ':password' => $hashed_password, ':email' => $email));

            if($statement->rowCount() == 1) {
                $result = header('location: index.html');
            }
        }
        catch (PDOException $e) {
            echo "Error: " .$e->getMessage();
        }

        


}

?>