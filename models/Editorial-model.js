'use strict'

var conn = require("../config/db-connection"),
    EditorialModel = () => {};

EditorialModel.getAll = (cl) => conn.query("SELECT * FROM EDITORIAL", cl);

EditorialModel.getOne = (numeroeditorial,cl) => conn.query("Select * From EDITORIAL where numeroeditorial =$1", [numeroeditorial], cl);

EditorialModel.post = (data, cl) => 
    conn.query("call public.P_INSERT_EDITORIAL ($1,$2,$3,$4,$5,$6,$7)",
    [
        data.numeroeditorial,
        data.nombreeditorial,
        data.direccion,
        data.pais,
        data.fechafundacion,
        data.cantidadlibrosimpresos,
        data.numerotelefono
    ],cl);

    EditorialModel.put = (data, cl) => 
    conn.query("call public.P_UPDATE_EDITORIAL ($1,$2,$3,$4,$5,$6,$7)",
    [
        data.numeroeditorial,
        data.nombreeditorial,
        data.direccion,
        data.pais,
        data.fechafundacion,
        data.cantidadlibrosimpresos,
        data.numerotelefono
    ],cl);

    EditorialModel.delete = (numeroeditorial ,cl) => conn.query("call public.P_DELETE_EDITORIAL ($1)", [numeroeditorial], cl);

module.exports = EditorialModel;