'use strict'

var conn = require("../config/db-connection"),
    LibroModel = () => {};

LibroModel.getAll = (cl) => conn.query("SELECT*FROM LIBRO", cl);

LibroModel.getOne = (codigolibro,cl) => conn.query("Select * From LIBRO where codigolibro =$1", [codigolibro], cl);

LibroModel.post = (data, cl) => 
    conn.query("call public.P_INSERT_LIBRO ($1,$2,$3,$4,$5,$6,$7)",
    [
        data.codigolibro,
        data.nombrelibro,
        data.nombreescritor,
        data.fechapublicacion,
        data.isbn,
        data.precio,
        data.editorial
    ],cl);

LibroModel.put = (data, cl) => 
    conn.query("call public.P_UPDATE_LIBRO ($1,$2,$3,$4,$5,$6,$7)",
    [
        data.codigolibro,
        data.nombrelibro,
        data.nombreescritor,
        data.fechapublicacion,
        data.isbn,
        data.precio,
        data.editorial
    ],cl);

LibroModel.delete = (codigolibro ,cl) => conn.query("call public.P_DELETE_LIBRO ($1)", [codigolibro], cl);

module.exports = LibroModel;