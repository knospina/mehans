<div id="site-nav">
    <ul>		
        <li><a href="index.php?lang=<?php echo $_SESSION['lang']; ?>"><?php echo $menuPakalpojumi[$language]; ?></a></li>
        <li><a href="articles.php?lang=<?php echo $_SESSION['lang']; ?>"><?php echo $menuAuto[$language]; ?></a></li>
        <li><a href="art.php?lang=<?php echo $_SESSION['lang']; ?>"><?php echo $menuMetalaMaksla[$language]; ?></a></li>
        <li><a href="contact.php?lang=<?php echo $_SESSION['lang']; ?>"><?php echo $menuKontakti[$language]; ?></a></li>
    </ul>
</div>
<div id="language-bar">
    <ul>
        <li>
            <a href="?lang=lv"><img src="images/lv.gif" height="12px" width="21px" alt="lv" /></a>
            <a href="?lang=ru"><img src="images/ru.png" height="12px" width="21px" alt="ru" /></a>
        </li>
    </ul>
</div>
