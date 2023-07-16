"use strict";
//ESTO ES UN EJEMPLO DE LAS RUTAS
var  LibroController = require("../controllers/libro-controller"),
  express = require("express"),
  router = express.Router();

router
  //****ALUMNO EJEMPLO****
  .get("/libro/getAll", LibroController.getAll)
  .post("/libro/getone/:codigolibro", LibroController.getOne)
  .post("/libro/insertar/codigolibro", LibroController.post)
  .put("/libro/actualizar/:codigolibro", LibroController.put)
  .delete("/libro/eliminar/:codigolibro", LibroController.delete)
  .use(LibroController.error404);

module.exports = router;
