const express = require("express");

const app = express();

app.get("/message/:id", (request, response) => {
  response.send(`Olá ${request.params.id}`);
});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));