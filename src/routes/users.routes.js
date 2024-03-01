const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();

// -------------- Exemplo de Middleware -----------------
// function myMiddleware(request, response, next){
//   console.log("Middleware acionado!");

//   if(!request.body.isAdmin){
//     return response.json({mesage: "User unauthorized"});
//   }

//   next();
// }

const usersController = new UsersController();

// Aplicando o Middleware para todas as rotas
//usersRoutes.use(myMiddleware);

// Middleware aplicado para rota específica
// usersRoutes.post("/", myMiddleware, usersController.create);

usersRoutes.post("/", usersController.create);
usersRoutes.put("/:id", usersController.update);

module.exports = usersRoutes;