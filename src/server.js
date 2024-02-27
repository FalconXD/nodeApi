const express = require("express");

const app = express();

app.get("/message/:id/:user", (request, response) => {
  const { id, user } = request.params;
  response.send(`Olá ${user}. O ID informado foi: ${id}`);
});

app.get("/users", (request, response) => {
  const { page, limit } = request.query;
  response.send(`Você está na página ${page} de ${limit}`);
});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));