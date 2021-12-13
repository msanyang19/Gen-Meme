<?php

include_once 'source/session.php';

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Genmemes</title>
    <link rel="stylesheet" href="gen.css">

</head>
<body>
    
    <?php if(!isset($_SESSION['username'])): header("location: logout.php");?>

    <?php else: ?>
    
    <?php endif ?>

    <?php echo "<h1> ".$_SESSION['username']." Welcom To <i>Gen Memes</i></h1>" ?>

    <h2><a href="logout.php">Logout</a></h2>
    
    <h1><i>Generate Memes</i></h1>
    <div class="container">
        <canvas id="canvas"></canvas>
        <div class="sidebar">
            <p>Add Image</p>
            <input type="file" id="file">
            <div class="group">
                <textarea placeholder="Type something" id="text"></textarea>
                <input type="color" id="color">
                <button id="addText">Add Text</button>
            </div>
            <button id="save">Save</button>
        </div>
    </div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/460/fabric.js" integrity="sha512-d5yqsvICrC8y0ivNsNizSCHXjzireXYU6LmzAvcrL97GMwEn0VKx1vclEwvtsh/yPD2EcATnUG1oEtJuFcTE3Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="js/gen.js"></script>

    
</body>
</html>

