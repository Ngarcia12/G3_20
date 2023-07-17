'use strict'

var EscritorModel = require('../models/Escritor-model'),
EscritorController = () => {}

EscritorController.getAll = (req, res, next) => {
    EscritorModel.getAll((err, rows) => { 
        if (err)
        {
            let locals = {
                title : 'Error al consultar la base de datos',
                description : 'Error de Sintaxis SQL',
                error : err
            }
            res.render('error', locals)
        }
        else
        {
            let locals = {
                title : 'Lista de Escritores',
                data : rows
            }
            res.status(200).send(rows.rows)
        }
    })
    EscritorModel.use = req
}




EscritorController.getOne = (req, res, next) => {
    let numeroescritor = req.body.numeroescritor
    console.log(numeroescritor)

    EscritorModel.getOne(numeroescritor, (err, rows) => {
        console.log(err, '---', rows)
        if (err)
        {
            let locals = {
                title :  `Error al buscar el escritor con el codigo: ${numeroescritor}`,
                description : 'Error de Sintaxis SQL',
                error : err
            }
            res.render('error', locals)
        }else{
            let locals = {
                title : 'Lista de escritor',
                data : rows
            }
            res.status(200).send(rows.rows)
        }
    })
}



EscritorController.post = (req, res, next) => {
    let escritor = {
        numeroescritor : req.body.numeroescritor,
        nombreescritor : req.body.nombreescritor,
        apellidosescritor : req.body.apellidosescritor,
        fechanacimiento : req.body.fechanacimiento,
        nacionalidad : req.body.nacionalidad,
        cantidadlibrosescritos : req.body.cantidadlibrosescritos,
        email : req.body.email
    }
    console.log(escritor)

    EscritorModel.post(escritor, (err) => {
        if (err)
        {
            let locals = {
                title :  `Error al guardar el escritor con el codigo: ${escritor.numeroescritor}`,
                description : 'Error de Sintaxis SQL',
                error : err
            }
            res.status(520).send(err)
        }else{
            res.send('Escritor Ingresado de forma correcta')
        }
    })
}






EscritorController.put = (req, res, next) => {
    let escritor = {
        numeroescritor : req.body.numeroescritor,
        nombreescritor : req.body.nombreescritor,
        apellidosescritor : req.body.apellidosescritor,
        fechanacimiento : req.body.fechanacimiento,
        nacionalidad : req.body.nacionalidad,
        cantidadlibrosescritos : req.body.cantidadlibrosescritos,
        email : req.body.email
    }
    console.log(escritor)

    EscritorModel.put(escritor, (err) => {
        if (err)
        {
            let locals = {
                title :  `Error al actualizar el escritor con el codigo: ${numeroescritor}`,
                description : 'Error de Sintaxis SQL',
                error : err
            }
            res.status(520).send(err)
        }else{
            res.send('Escritor Actualizado Correctamente')
        }
    })
}







EscritorController.delete = (req, res, next) => {
    let numeroescritor = req.body.numeroescritor;
    console.log(numeroescritor)

    EscritorModel.delete(numeroescritor, (err) => {
        if (err)
        {
            let locals = {
                title :  `Error al eliminar el escritor con el codigo: ${numeroescritor}`,
                description : 'Error de Sintaxis SQL',
                error : err
            }
            res.status(520).send(err)
        }else{
            res.send('Escritor eliminado exitosamente')
        }
    })
}







EscritorController.addForm = (req, res, next) => res.render('add-escritor', { title: 'Agregar Escritor' })

EscritorController.error404 = (req, res, next) => {
    let error = new Error(),
    locals = {
        title : 'Error 404',
        description : 'Recurso no encontrado',
        error  : error
    }
    error.status = 404
    res.render('error', locals)
    next()
}

module.exports = EscritorController;