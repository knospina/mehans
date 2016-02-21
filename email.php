<h2><?php echo $contactForm1[$language]; ?></h2>

<?php
function spamcheck($field) {
    // Sanitize e-mail address
    $field=filter_var($field, FILTER_SANITIZE_EMAIL);
    // Validate e-mail address
    if(filter_var($field, FILTER_VALIDATE_EMAIL)) {
        return TRUE;
    } else {
        return FALSE;
    }
}
?>

<?php
    // display form if user has not clicked submit
    if (!isset($_POST["submit"])) {
?>
<form id="email-form" method="post" action="<?php echo $_SERVER["PHP_SELF"];?>">
    <label for="from"><span class="req">* </span><?php echo $contactForm2[$language]; ?></label>
    <input type="text" name="from" id="from" required />
    <label for="email"><span class="req">* </span><?php echo $contactForm3[$language]; ?></label>
    <input type="text" name="email" id="email" required />
    <label for="subject"><?php echo $contactForm4[$language]; ?></label>
    <input type="text" name="subject" id="subject" />
    <label for="message"><span class="req">* </span><?php echo $contactForm5[$language]; ?></label>
    <textarea rows="10" cols="40" name="message" id="message" required></textarea>
    <p><span class="req">* </span>- <?php echo $contactForm7[$language]; ?></p>
    <input type="submit" name="submit" value="<?php echo $contactForm6[$language]; ?>">
</form>
<?php 
    } else {    // the user has submitted the form
    // Check if the "from" input field is filled out
        if (isset($_POST["email"])) {

            // Check if "from" email address is valid
            $mailcheck = spamcheck($_POST["email"]);

            if ($mailcheck==FALSE) {
                echo $contactForm8[$language];
            } else {
                $from = $_POST["from"]; // sender
                $email = $_POST["email"];
                $subject = $_POST["subject"];
                $message = $_POST["message"];
                // message lines should not exceed 70 characters (PHP rule), so wrap it
                $message = wordwrap($message, 70);
                // send mail
                $completeSubject = $from . ' ' . $subject;    
                mail("siamehans@gmail.com",$completeSubject,$message,"From: $email\n");
                echo $contactForm9[$language];
            }                   
        }
    }
?>