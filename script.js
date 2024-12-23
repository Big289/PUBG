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

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();  // Empêche la soumission classique du formulaire

        // Récupérer les valeurs des champs email et mot de passe
        const email = document.querySelector('input[type="email"]').value;
        const password = document.querySelector('input[type="password"]').value;

        // Vérification si les champs sont vides
        if (!email || !password) {
            alert('Veuillez remplir tous les champs');
            return;
        }

        // Envoi des données vers le serveur (backend)
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);  // Affiche le message de réponse
        })
        .catch(error => {
            alert('Erreur : ' + error);
        });
    });
});



