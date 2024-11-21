// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function () {

    // Sélectionner le formulaire par son ID
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();  // Empêche la soumission normale du formulaire et la redirection de page

        // Récupérer les valeurs des champs email et mot de passe
        const email = document.querySelector('input[type="email"]').value;
        const password = document.querySelector('input[type="password"]').value;

        // Optionnel : Ajouter une vérification des champs email et mot de passe
        if (!email || !password) {
            alert('Veuillez remplir tous les champs');
            return;
        }

        // **Rediriger vers un autre site ou une autre page après validation**
        window.location.href = "https://pubg.com/fr";  // Remplace par l'URL de ton choix window.open("URL");

    });
});

function handleFormSubmit(event) {
    event.preventDefault(); // Empêche la soumission réelle du formulaire

    // Référence au formulaire et au message
    const emailInput = document.querySelector('.input-box');
    const submitButton = document.querySelector('.btn');
    const message = document.getElementById('resetMessage');

    // Masquer les champs et le bouton
    emailInput.style.display = 'none';
    submitButton.style.display = 'none';

    // Afficher le message de confirmation
    message.textContent = "Un lien pour réinitialiser votre mot de passe a été envoyé à votre adresse email.";
    message.style.display = 'block';
}

