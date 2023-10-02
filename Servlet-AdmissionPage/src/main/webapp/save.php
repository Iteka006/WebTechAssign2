<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST["id"];
    // Retrieve other form data

    // Handle file uploads
    $passport = $_FILES["passport"];
    $certificates = $_FILES["certificates"];

    // Check file types and move them to a secure directory
    if (isValidFileType($passport, "jpg") && isValidFileType($certificates, "pdf")) {
        move_uploaded_file($passport["tmp_name"], "uploads/passport_" . $id . ".jpg");
        move_uploaded_file($certificates["tmp_name"], "uploads/certificates_" . $id . ".pdf");

        // Send confirmation email using JavaMail API
        // You'll need JavaMail API and Java code here

        // Redirect to a confirmation page or display a success message
        header("Location: confirmation_page.html");
        exit();
    } else {
        // Handle invalid file types
        echo "Invalid file types. Passport: jpg, Certificates: pdf";
    }
}

function isValidFileType($file, $allowedExtension) {
    $fileExtension = strtolower(pathinfo($file["name"], PATHINFO_EXTENSION));
    return $fileExtension == $allowedExtension;
}
?>
