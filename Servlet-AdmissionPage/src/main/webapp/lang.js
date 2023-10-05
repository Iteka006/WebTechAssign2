// Define translation objects for each language
const translations = {
    en: {
        loginTitle: "Login",
        enterDetailsText: "Please enter your details",
        idLabel: "Username", // Add translations for ID and Password labels
        passwordLabel: "Password",
        idPlaceholder: "Enter your Email",
        passwordPlaceholder: "Enter Password",
        loginButtonText: "Login",
        noAccountText: "Register",
        forgotPasswordText: "Forgot Password?",
        account: "No Account?",
        changeLanguageBtn: "Change language",
    },
    fr: {
        loginTitle: "Connexion",
        enterDetailsText: "Veuillez entrer vos informations",
        idLabel: "Identifiant", // Add translations for ID and Password labels
        passwordLabel: "Mot de Passe",
        idPlaceholder: "Entrez votre identifiant",
        passwordPlaceholder: "Entrez le mot de passe",
        loginButtonText: "Connexion",
        noAccountText: "S'inscrire",
        forgotPasswordText: "Mot de passe oublié ?",
        account: "Pas de Compte?",
        changeLanguageBtn: "Change de langue",
    },
    rw: {
	 loginTitle: "Injira",
        enterDetailsText: "Andika amakuru asabwa",
        idLabel: "Izina", // Add translations for ID and Password labels
        passwordLabel: "Ijambo ry'ibanga",
        idPlaceholder: "Andika izina",
        passwordPlaceholder: "Andika ijambo ry'ibanga",
        loginButtonText: "Injira",
        noAccountText: "Iyandikishe",
        forgotPasswordText: "Wibagiye ijambo ry'ibanga?",
        account: "Nta Konti?",
        changeLanguageBtn: "Guhindura ururimi",
    },
};

// Function to change the language based on user selection
function changeLanguage() {
    // Get the selected language from the dropdown
    const selectedLanguage = document.getElementById("languageSelector").value;

    // Update the content based on the selected language
    const translation = translations[selectedLanguage];

    document.getElementById("loginTitle").textContent = translation.loginTitle;
    document.getElementById("enterDetailsText").textContent = translation.enterDetailsText;
    document.querySelector('label[for="email"]').textContent = translation.idLabel;
    document.querySelector('label[for="password"]').textContent = translation.passwordLabel;
    document.getElementById("email").placeholder = translation.idPlaceholder;
    document.getElementById("password").placeholder = translation.passwordPlaceholder;
    document.querySelector('button[type="submit"]').textContent = translation.loginButtonText;
    document.querySelector('p a[href="register.html"]').textContent = translation.noAccountText;
    document.querySelector('p a[href="forgotPassword.html"]').textContent = translation.forgotPasswordText;
     document.getElementById("noAccountText").textContent = translation.account;
     document.getElementById("changeLanguageBtn").textContent = translation.changeLanguageBtn;
     
}

// Initialize the page with English as the default language
changeLanguage();
