"use strict";
//ESTO ES UN EJEMPLO DE LAS RUTAS
var  LibroController = require("../controllers/libro-controller"),
     EscritorController = require("../controllers/Escritor-controller"),
     AlquilerController = require("../controllers/Alquiler-controller"),
     EditorialController = require("../controllers/Editorial-controller"),
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


 //****ALQUILER EJEMPLO****
.get("/alquiler/getAll", AlquilerController.getAll)
.post("/alquiler/getone/:codigolibro", AlquilerController.getOne)
.post("/alquiler/insertar/codigolibro", AlquilerController.post)
.put("/alquiler/actualizar/:codigolibro", AlquilerController.put)
.delete("/alquiler/eliminar/:codigolibro", AlquilerController.delete)


 //****EDITORIAL EJEMPLO****
 .get("/editorial/getAll", EditorialController.getAll)
 .post("/editorial/getone/:numeroeditorial", EditorialController.getOne)
 .post("/editorial/insertar/numeroeditorial", EditorialController.post)
 .put("/editorial/actualizar/:numeroeditorial", EditorialController.put)
 .delete("/editorial/eliminar/:numeroeditorial", EditorialController.delete)

 .use(LibroController.error404)
 .use(EscritorController.error404)
 .use(AlquilerController.error404)
 .use(EditorialController.error404)
module.exports = router;
