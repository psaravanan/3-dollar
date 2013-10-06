<?php
if(isset($_POST['email'])) {
     
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "psaravanan11@gmail.com";
    $email_subject = "Someone send Artwork hey :)";
     
     
    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
     
    // validation expected data exists
    if(!isset($_POST['name']) ||
        !isset($_POST['email']) ||
        // !isset($_POST['email']) ||
        !isset($_POST['description'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
     
    $name = $_POST['name']; // required
    //$last_name = $_POST['last_name']; // required
    $email = $_POST['email']; // required
    $description = $_POST['description']; // not required
     
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
    $string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$name)) {
    $error_message .= 'The First Name you entered does not appear to be valid.<br />';
  }
  if(strlen($error_message) > 0) {
    died($error_message);
  }
    $email_message = "Form details below.\n\n";
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }


$upload_name=$_FILES["artwork"]["name"];
$upload_type=$_FILES["artwork"]["type"];
$upload_size=$_FILES["artwork"]["size"];
$upload_temp=$_FILES["artwork"]["tmp_name"];

    $fp = fopen($upload_temp, "rb");
    $file = fread($fp, $upload_size);

    $file = chunk_split(base64_encode($file));
    $num = md5(time());

     
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email)."\n";
    $email_message .= "Telephone: ".clean_string($description)."\n";
     
     
// create email headers


    $headers .= "Content-Type: text/html; charset=iso-8859-1\r\n";
       $headers .= "Content-Transfer-Encoding: 8bit\r\n";
       $headers .= "".$description."\n";
       $headers .= "--".$num."\n";

        // Attachment headers

    $headers  .= "Content-Type:".$upload_type." ";
       $headers  .= "name=\"".$upload_name."\"r\n";
       $headers  .= "Content-Transfer-Encoding: base64\r\n";
       $headers  .= "Content-Disposition: attachment; ";
       $headers  .= "filename=\"".$upload_name."\"\r\n\n";
       $headers  .= "".$file."\r\n";
       $headers  .= "--".$num."--";
    // SEND MAIL
       @mail($to, $subject, $message, $headers);
     fclose($fp);


//$headers = 'From: '.$email."\r\n".
//'Reply-To: '.$email."\r\n" .
//'X-Mailer: PHP/' . phpversion();

//@mail($email_to, $email_subject, $email_message, $headers);
?>
 
<!-- include your own success html here -->
 
Thank you for contacting us. We will be in touch with you very soon.
 
<?php
}else{
  echo "email not there man";
}
?>