// Define translation objects for the registration page
const registrationTranslations = {
    en: {
		loginTitle: "Create your new Account",
        enterDetailsText : "Enter your Details",
        idPlaceholder: "Enter your ID",
        idLabel: "ID",
        firstNamePlaceholder: "Enter your first Name",
        firstNameLabel: "First Name",
        lastNameLabel: "Last Name",
        emailLabel: "Email",
        phoneNumberLabel: "Phone Number",
        nationalityLabel: "Nationality",
        facultyLabel:"Faculty",
        departmentLabel: "Department",
        passwordLabel: "Password",
        retypePasswordLabel: "Confirm Password",
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
        passportLabel: "Passport Picture(Jpg or Png Only)",
        certificatesLabel : "Certificate(PDF Only)",
        changeLanguageBtn : "Change language",
        
    },
    fr: {
       loginTitle: "Créer votre nouveau Compte",
        enterDetailsText : "Entrer les informations Requises",
        idPlaceholder: "Entrer votre Identification",
        idLabel: "Indentifiant",
        firstNamePlaceholder: "Entrer votre Nom",
        firstNameLabel: "Nom",
        lastNameLabel: "Prénom",
        emailLabel: "Email",
        phoneNumberLabel: "Numero de Téléphone",
        nationalityLabel: "Nationalité",
        facultyLabel:"Faculté",
        departmentLabel: "Département",
        passwordLabel: "Mot de passe",
        retypePasswordLabel: "Confirmer le Mot de passe",
        lastNamePlaceholder: "Entrer votre Prénom",
        emailPlaceholder: "Entre votre Email",
        phoneNumberPlaceholder: "Entrer votre Numéro de Téléphone",
        nationalityPlaceholder: "Entrer votre Nationalité",
        facultyPlaceholder: "Entre votre faculté",
        departmentPlaceholder: "Entrer votre départment",
        passwordPlaceholder: "Entrer votre Mot de Passe",
        retypePasswordPlaceholder: "réécrivez le Mot de Passe",
        passportLabel: "Photo Passport (jpg or png):",
        certificatesLabel: "Certificats (PDF only):",
        registerButtonText: "S'inscrire",
        account: "Déja un compte?",
        loginLinkText: "Se Connecter",
        passportLabel: "Photo Passport(Jpg ou Png Seulement)",
        certificatesLabel : "Certificat(PDF Seulement)",
        changeLanguageBtn : "Changer de langue",
        
    },
    rw: {
      loginTitle: "Konti nshasha",
        enterDetailsText : "Shiramwo amakuru asabwa",
        idPlaceholder: "Andikamwo Indangamuntu y'umunyeshuri",
        idLabel: "Indangamuntu y'umunyeshuri",
        firstNamePlaceholder: "Andikamwo Izina ry'ikinyarrwanda",
        firstNameLabel: "Izina ry'ikinyarrwanda",
        lastNameLabel: "Ayandi mazina",
        emailLabel: "Emeyili",
        phoneNumberLabel: "Nimero ya Telephone",
        nationalityLabel: "Ubwenegihugu",
        facultyLabel:"Ishami",
        departmentLabel: "Departema",
        passwordLabel: "Ijambo ry'ibanga",
        retypePasswordLabel: "Emeza Ijambo ry'ibanga",
        lastNamePlaceholder: "Andikamwo ayandi mazina",
        emailPlaceholder: "Andika Emeyili",
        phoneNumberPlaceholder: "Andikamwo nimero ya telefone",
        nationalityPlaceholder: "Andikamwo ubwenegihugu",
        facultyPlaceholder: "Andikamwo ishami",
        departmentPlaceholder: "Andikamwo departema",
        passwordPlaceholder: "Andikamwo ijambo ry'ibanga",
        retypePasswordPlaceholder: "Ongera wandike Ijambo ry'ibanga",
        passportLabel: "Ifoto ya passiport (jpg cangwa png):",
        certificatesLabel: "Impamyabumenyi (PDF only):",
        registerButtonText: "Kwiyandikisha",
        account: "Musanganywe konti?",
        loginLinkText: "Injira",
        passportLabel: "foto ya passiporo(Jpg cangwa Png gusa)",
        certificatesLabel : "Impamyabumenyi(PDF gusa)",
        changeLanguageBtn : "Guhindura ururimi",
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
    document.getElementById("changeLanguageBtn").textContent = translation.changeLanguageBtn;
    document.getElementById("loginTitle").textContent = translation.loginTitle;
    document.getElementById("enterDetailsText").textContent = translation.enterDetailsText;
    document.querySelector('label[for="passport"]').textContent = translation.passportLabel;
    document.querySelector('label[for="certificates"]').textContent = translation.certificatesLabel;
    document.querySelector('button[type="submit"]').textContent = translation.registerButtonText;
    document.querySelector('p a[href="index.html"]').textContent = translation.loginLinkText;
    document.querySelector('button[type="submit"]').textContent = translation.registerButtonText;
    document.getElementById("noAccountText").textContent = translation.account;
    
    
   
    
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
