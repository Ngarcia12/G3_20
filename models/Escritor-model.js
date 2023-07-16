'use strict'

var conn = require("../config/db-connection"),
    EscritorModel = () => {};

EscritorModel.getAll = (cl) => conn.query("SELECT * FROM ESCRITOR", cl);

EscritorModel.getOne = (numeroescritor,cl) => conn.query("Select * From ESCRITOR where numeroescritor =$1", [numeroescritor], cl);

EscritorModel.post = (data, cl) => 
    conn.query("call public.P_INSERT_ESCRITOR ($1,$2,$3,$4,$5,$6,$7)",
    [
        data.numeroescritor,
        data.nombreescritor,
        data.apellidosescritor,
        data.fechanacimiento,
        data.nacionalidad,
        data.cantidadlibrosescritos,
        data.email
    ],cl);

EscritorModel.put = (data, cl) => 
    conn.query("call public.P_UPDATE_ESCRITOR ($1,$2,$3,$4,$5,$6,$7)",
    [
        data.numeroescritor,
        data.nombreescritor,
        data.apellidosescritor,
        data.fechanacimiento,
        data.nacionalidad,
        data.cantidadlibrosescritos,
        data.email
    ],cl);

EscritorModel.delete = (numeroescritor ,cl) => conn.query("call public.P_DELETE_ESCRITOR ($1)", [numeroescritor], cl);

module.exports = EscritorModel;