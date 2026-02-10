// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/script', (req, res) => {
    // Code Lua que tu veux renvoyer à Roblox
    const luaScript = `
        -- Exemple de script Lua exécuté dans Roblox
        print("Bonjour depuis le serveur !")
        -- Charger et exécuter le script depuis GitHub
        loadstring(game:HttpGet("https://raw.githubusercontent.com/plantapi662-lab/APSPAMMERSAB/refs/heads/main/W"))()
    `;
    
    res.type('text/plain');  // Indiquer que la réponse est du texte
    res.send(luaScript);     // Renvoyer le code Lua
});

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
