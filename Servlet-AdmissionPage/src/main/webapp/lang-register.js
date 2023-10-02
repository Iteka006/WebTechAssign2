// Define translation objects for the registration page
const registrationTranslations = {
    en: {
        loginTitle: "Create your new Account",
        enterDetailsText : "Enter your Details",
        idPlaceholder: "Enter your ID",
        firstNamePlaceholder: "Enter your first Name",
        lastNamePlaceholder: "Enter your last Name",
        emailPlaceholder: "Enter your Email",
        phoneNumberPlaceholder: "Enter your phone Number",
        nationalityPlaceholder: "Enter your nationality",
        facultyPlaceholder: "Enter your faculty",
        departmentPlaceholder: "Enter your department",
        passwordPlaceholder: "Enter your password",
        retypePasswordPlaceholder: "Retype Password",
        passportLabel: "Passport Picture (jpg or png):",
        certificatesLabel: "Certificates (PDF only):",
        registerButtonText: "Register",
        loginLinkText: "Already have an account? Login",
    },
    fr: {
       loginTitle: "Creez votre nouveau Compte",
        enterDetailsText : "Entrer vos Details",
        idPlaceholder: "Entrer votre Identification",
        idLabel: "Indentifiant",
        firstNamePlaceholder: "Entrer votre Nom",
        firstNameLabel: "Nom",
        lastNameLabel: "Prenom",
        emailLabel: "Email",
        phoneNumberLabel: "Numero de Téléphone",
        nationalityLabel: "Nationalité",
        facultyLabel:"Faculte",
        departmentLabel: "Departement",
        passwordLabel: "Mot de passe",
        retypePasswordLabel: "Confirmer Mot de passe",
        lastNamePlaceholder: "Entrer votre Prénom",
        emailPlaceholder: "Entre votre Email",
        phoneNumberPlaceholder: "Entrer votre Numéro de Téléphone",
        nationalityPlaceholder: "Entrer votre Nationalité",
        facultyPlaceholder: "Entre votre faculte",
        departmentPlaceholder: "Entrer votre department",
        passwordPlaceholder: "Enter your password",
        retypePasswordPlaceholder: "Retype Password",
        passportLabel: "Passport Picture (jpg or png):",
        certificatesLabel: "Certificates (PDF only):",
        registerButtonText: "Register",
        loginLinkText: "Deja un Compte? Login",
        passportLabel: "Photo passeport(Jpg ou Png Seulement)",
        certificatesLabel : "Certificat(PDF Seulement)",
        
    },
    local: {
        // Local language translations here
    },
};

// Function to change the language for the registration page
function changeLanguageRegister() {
    // Get the selected language from the dropdown
    const selectedLanguage = document.getElementById("languageSelector").value;

    // Update the content based on the selected language
    const translation = registrationTranslations[selectedLanguage];

    document.title = translation.pageTitle;
    document.getElementById("id").placeholder = translation.idPlaceholder;
    document.getElementById("firstname").placeholder = translation.firstNamePlaceholder;
    document.getElementById("lastname").placeholder = translation.lastNamePlaceholder;
    document.getElementById("email").placeholder = translation.emailPlaceholder;
    document.getElementById("phonenumber").placeholder = translation.phoneNumberPlaceholder;
    document.getElementById("nationality").placeholder = translation.nationalityPlaceholder;
    document.getElementById("faculty").placeholder = translation.facultyPlaceholder;
    document.getElementById("department").placeholder = translation.departmentPlaceholder;
    document.getElementById("password").placeholder = translation.passwordPlaceholder;
    document.getElementById("retypepassword").placeholder = translation.retypePasswordPlaceholder;
    document.querySelector('label[for="passport"]').textContent = translation.passportLabel;
    document.querySelector('label[for="certificates"]').textContent = translation.certificatesLabel;
    document.querySelector('button[type="submit"]').textContent = translation.registerButtonText;
    document.querySelector('p a[href="index.html"]').textContent = translation.loginLinkText;
    
   
    
document.querySelector('label[for="id"]').textContent = translation.idLabel;
document.querySelector('label[for="firstname"]').textContent = translation.firstNameLabel;
document.querySelector('label[for="lastname"]').textContent = translation.lastNameLabel;
document.querySelector('label[for="email"]').textContent = translation.emailLabel;
document.querySelector('label[for="phonenumber"]').textContent = translation.phoneNumberLabel;
document.querySelector('label[for="nationality"]').textContent = translation.nationalityLabel;
document.querySelector('label[for="faculty"]').textContent = translation.facultyLabel;
document.querySelector('label[for="department"]').textContent = translation.departmentLabel;
document.querySelector('label[for="password"]').textContent = translation.passwordLabel;
document.querySelector('label[for="retypepassword"]').textContent = translation.retypePasswordLabel;

document.querySelector('label[for="passport"]').textContent = translation.passportLabel;
document.querySelector('label[for="certificates"]').textContent = translation.certificatesLabel;


}

// Initialize the page with English as the default language
changeLanguageRegister();
