import express from "express"; // wenn du Node ≥16 nutzt, setze "type":"module" in package.json
// alternativ mit CommonJS:
// const express = require('express');

const app = express();
const port = process.env.PORT || 3000; // Render definiert process.env.PORT automatisch

// einfache Route
app.get("/", (req, res) => {
  res.send("👋 Hallo Welt von Express auf Render!");
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
