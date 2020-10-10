<?php

if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$email = $_POST['email'];

	$mailTo = 'creatives@athl.com.hk';
	$headers = "From ".$email;

	mail($name, $email, $headers);
	header("Location: index.php?mailsend");
}