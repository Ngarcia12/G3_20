"use strict";
//ESTO ES UN EJEMPLO DE LAS RUTAS
var  LibroController = require("../controllers/libro-controller"),
     EscritorController = require("../controllers/Escritor-controller"),
  express = require("express"),
  router = express.Router();

router
  //****LIBRO EJEMPLO****
  .get("/libro/getAll", LibroController.getAll)
  .post("/libro/getone/:codigolibro", LibroController.getOne)
  .post("/libro/insertar/codigolibro", LibroController.post)
  .put("/libro/actualizar/:codigolibro", LibroController.put)
  .delete("/libro/eliminar/:codigolibro", LibroController.delete)
  

 //****ESCRITOR EJEMPLO****
 .get("/escritor/getAll", EscritorController.getAll)
 .post("/escritor/getone/:numeroescritor", EscritorController.getOne)
 .post("/escritor/insertar/numeroescritor", EscritorController.post)
 .put("/escritor/actualizar/:numeroescritor", EscritorController.put)
 .delete("/escritor/eliminar/:numeroescritor", EscritorController.delete)
 .use(LibroController.error404)
 .use(EscritorController.error404)


module.exports = router;
