<!DOCTYPE html>
<html>

    <head>
        <?php include 'head.php'; ?>
    </head>

    <body>
        <div id="header">
            <?php include 'header.php'; ?>
        </div>
        <div id="indexcontent">
            <div class="top">
                <div id="bot">
                    <div class="inner">
                        <div class="wrapper">
                            <div class="col-1"><img src="images/slideshow.gif" alt="Sia Mehāns fotogrāfijās" height="300px" width="400px"/></div>
                            <div id="about">
                                <div class="indent">
                                    <h3><?php echo $first1[$language]; ?></h3>
                                    <p><?php echo $first2[$language]; ?></p><br />
                                    <h3><?php echo $first3[$language]; ?></h3>
                                    <p><?php echo $first4[$language]; ?></p><!--tikai lv valodai -->
                                    <ul id="offer">
                                        <li><?php echo $firstArt[$language]; ?></li>
                                        <li><?php echo $first5[$language]; ?></li>
                                        <li><?php echo $first6[$language]; ?></li>
                                        <li><?php echo $first7[$language]; ?></li>
                                        <li><?php echo $first8[$language]; ?></li>
                                        <li><?php echo $first9[$language]; ?></li>
                                    </ul>
                                    <br />
                                    <h2><?php echo $first10[$language]; ?></h2><!-- tikai ru valodai -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
        <?php include 'footer.php'; ?>
        <p id="loadingtime" style="color:white; size:18px;"></p>
    </body>
</html>
