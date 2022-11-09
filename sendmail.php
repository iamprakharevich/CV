<?php
    require 'phpMailer/Exception.php';
    require 'phpMailer/PHPMailer.php';
    require 'phpMailer/SMTP.php';

    $mail = PHPMailer\PHPMailer\PHPMailer();
    

    try{
        $mail->isSMTP();
        $mail->IsHTML(true);
        $mail->SMTPAuth = true;
        $mail->CharSet = 'UTF-8';
        $mail->Host = 'smtp.gmail.com';
        $mail->Username = 'iamprakharevich@gmail.com';
        $mail->Password = '';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;
        $mail->setFrom('iamprakharevich@gmail.com', 'Aleh Prakharevich');
        $mail->addAddress('iamprakharevich@gmail.com');
        $mail->Subject = "You have new letter!";
        $body = '<h1>New message!</h1>';
    if(trim(!empty($_POST['name']))){
        $body.='<p>Name: '.$_POST['name'].'</p>';
    };
    if(trim(!empty($_POST['email']))){
        $body.='<p>E-mail: '.$_POST['email'].'</p>';
    };
    if(trim(!empty($_POST['message']))){
        $body.='<p>Message: '.$_POST['message'].'</p>';
    };
    } catch (Exception $e) {
        $status = 'Error! {$mail->ErrorInfo}';
    }

    $mail->Body = $body;
    $mail->send();
    if(!$mail->send()){
        $message = 'Error! An error occurred while sending data.';
    } else {
        $message = 'Your message has been sent. I will be very glad to cooperate with you.';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>