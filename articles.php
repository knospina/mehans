<!DOCTYPE html>
<html ng-app="Mehans">
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
    </head>
    <body>
        <div id="header">
            <?php include 'header.php'; ?>
        </div>
        <div id="articlescontent">
            <div class="top">
                <div id="bot">
                    <div class="inner">
                        <div class="wrapper">
                            <div class="saraksts" ng-controller="SearchController as SearchCtrl">

                                <label for="marka"><?php echo $listLabel[$language]; ?></label>
                                <select ng-model="selectedCar" id="marka" name="marka" size="1" width="50px">
                                    <option value=""><?php echo $listAllCars[$language]; ?></option>
                                    <option ng-repeat="model in models" value="{{model.model}}">{{model.model}}</option>
                                </select>
                                <input ng-click="searchCars(selectedCar)" type='submit' name='username' value='<?php echo $listSearch[$language]; ?>' />

                                <h4><?php echo $listDisclaimer[$language]; ?></h4>
                                <p ng-show="itemCount==0 && cars">Sazinieties ar mums, lai pārliecinātos par {{model}} detaļu pieejamību.</p>
                                <table>
                                    <tr ng-show="itemCount>0">
                                        
                                        <th>Marka</th>
                                        <th>Modelis</th>
                                    </tr>
                                    <tr ng-repeat="car in cars">
                                        <td>{{car.marka}}</td>
                                        <td>{{car.modelis}}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php include 'footer.php'; ?>
    </body>
</html>