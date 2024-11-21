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
    event.preventDefault();  // Empêche le formulaire de se soumettre réellement

    // Afficher la phrase
    document.getElementById('resetMessage').style.display = 'block';
    
    // Vous pouvez également ajouter une logique pour masquer le formulaire après l'envoi
    const form = document.getElementById('resetForm');
    form.style.display = 'none';
}
