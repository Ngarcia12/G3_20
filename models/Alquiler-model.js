'use strict'

var conn = require("../config/db-connection"),
    AlquilerModel = () => {};

AlquilerModel.getAll = (cl) => conn.query("SELECT*FROM ALQUILER", cl);

AlquilerModel.getOne = (codigolibro,cl) => conn.query("Select * From ALQUILER where codigolibro =$1", [codigolibro], cl);

AlquilerModel.post = (data, cl) => 
    conn.query("call public.P_INSERT_ALQUILER ($1,$2,$3,$4,$5,$6,$7)",
    [
        data.codigolibro,
        data.nombrelibro,
        data.fechaalquiler,
        data.nombrecliente,
        data.direccion,
        data.diasalquilar,
        data.precioalquiler
    ],cl);

AlquilerModel.put = (data, cl) => 
    conn.query("call public.P_UPDATE_ALQUILER ($1,$2,$3,$4,$5,$6,$7)",
    [
        data.codigolibro,
        data.nombrelibro,
        data.fechaalquiler,
        data.nombrecliente,
        data.direccion,
        data.diasalquilar,
        data.precioalquiler
    ],cl);

AlquilerModel.delete = (codigolibro ,cl) => conn.query("call public.P_DELETE_ALQUILER ($1)", [codigolibro], cl);

module.exports = AlquilerModel;