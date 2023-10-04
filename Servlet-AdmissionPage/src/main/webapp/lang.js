// Define translation objects for each language
const translations = {
    en: {
        loginTitle: "Login",
        enterDetailsText: "Please enter your details",
        idLabel: "ID", // Add translations for ID and Password labels
        passwordLabel: "Password",
        idPlaceholder: "Enter your ID",
        passwordPlaceholder: "Enter Password",
        loginButtonText: "Login",
        noAccountText: "No Account? Register",
        forgotPasswordText: "Forgot Password?",
    },
    fr: {
        loginTitle: "Connexion",
        enterDetailsText: "Veuillez entrer vos informations",
        idLabel: "Identifiant", // Add translations for ID and Password labels
        passwordLabel: "Mot de Passe",
        idPlaceholder: "Entrez votre identifiant",
        passwordPlaceholder: "Entrez le mot de passe",
        loginButtonText: "Connexion",
        noAccountText: "Pas de compte ? S'inscrire",
        forgotPasswordText: "Mot de passe oublié ?",
    },
    si: {
	 loginTitle: "Login",
        enterDetailsText: "Please enter your details",
        idLabel: "ID", // Add translations for ID and Password labels
        passwordLabel: "Password",
        idPlaceholder: "Enter your ID",
        passwordPlaceholder: "Enter Password",
        loginButtonText: "Login",
        noAccountText: "No Account? Register",
        forgotPasswordText: "Forgot Password?",
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
}

// Initialize the page with English as the default language
changeLanguage();
