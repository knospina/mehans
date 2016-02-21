<!DOCTYPE html>
<html>
    <head>
        <?php include 'head.php'; ?>
        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                                    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-25524769-1', 'auto');
            ga('send', 'pageview');

        </script>
        <script type="text/javascript">
            //<![CDATA[
            function load() {
                if (GBrowserIsCompatible()) {
                    var map = new GMap2(document.getElementById("map_canvas"));
                    map.addControl(new GSmallMapControl());
                    map.setCenter(new GLatLng(57.044494, 24.181518), 15);
                    var marker = new GMarker(new GLatLng(57.044494, 24.181518));
                    map.addOverlay(marker);

                }
            }
            //]]>
        </script>
    </head>
    <body>
        <div id="header">
            <?php include 'header.php'; ?>
        </div>
        <div id="contactcontent">
            <div class="top">
                <div id="bot">
                    <div class="wrapper">
                        <div class="col-1">

                            <iframe width="400" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?f=d&amp;source=s_d&amp;saddr=%2B57%C2%B0+2'+40.18%22,+%2B24%C2%B0+10'+53.46%22+(57.044494,+24.181518)&amp;daddr=&amp;geocode=FQ5uZgMdDvtwAQ&amp;sll=57.044494,24.181518&amp;sspn=0.006712,0.01929&amp;vpsrc=6&amp;hl=en&amp;mra=mr&amp;ie=UTF8&amp;ll=57.044722,24.177346&amp;spn=0.009338,0.017123&amp;z=15&amp;output=embed"></iframe><br />

                        </div>
                        <div class="col-2">
                            <h4><?php echo $adress1[$language]; ?></h4>
                            <ul>
                                <li><?php echo $adress2[$language]; ?></li>
                            </ul>
                            <h4><?php echo $phone[$language]; ?></h4>
                            <ul>
                                <li>29417373</li>
                                <li>67348276</li>
                            </ul>
                            <h4><?php echo $workTimeLabel[$language]; ?></h4>
                            <ul>
                                <li><?php echo $workTime1[$language]; ?></li>
                                <li><?php echo $workTime2[$language]; ?></li>
                                <li><?php echo $workTime3[$language]; ?></li>
                                <li><?php echo $workTime4[$language]; ?></li>
                                <li><?php echo $workTime5[$language]; ?></li>
                                <li><?php echo $workTime6[$language]; ?></li>
                            </ul>
                            <h4><?php echo $email[$language]; ?></h4>
                            <ul>
                                <li>siamehans@gmail.com</li>
                            </ul>  

                            <?php include 'email.php'; ?>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php include 'footer.php'; ?>
    </body>
</html>