const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware pour analyser les requêtes JSON
app.use(bodyParser.json());

// Route POST pour la connexion
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Exemple simple de validation
    if (email === 'test@example.com' && password === 'password123') {
        res.json({ message: 'Connexion réussie' });
    } else {
        res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    }
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
