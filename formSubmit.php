<?php

$sendTo = 'INSERT_EMAIL_HERE';
$name = $_GET['Name'];
$email = $_GET['Email'];
$message = $_GET['Message'];
$subject = "Website Enquiry";


$headers  = "From: $name <$email> \r\n";
$headers .= 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$msg = $message;
mail($sendTo, $subject, $msg, $headers);

echo "sent=success";

?>