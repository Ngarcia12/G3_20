'use strict'

var AlquilerModel = require('../models/Alquiler-model'),
AlquilerController = () => {}

AlquilerController.getAll = (req, res, next) => {
    AlquilerModel.getAll((err, rows) => { 
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
                title : 'Lista de los Libros Alquilados',
                data : rows
            }
            res.status(200).send(rows.rows)
        }
    })
    AlquilerModel.use = req
}




AlquilerController.getOne = (req, res, next) => {
    let codigolibro = req.body.codigolibro
    console.log(codigolibro)

    AlquilerModel.getOne(codigolibro, (err, rows) => {
        console.log(err, '---', rows)
        if (err)
        {
            let locals = {
                title :  `Error al buscar el libro alquilado con el codigo: ${codigolibro}`,
                description : 'Error de Sintaxis SQL',
                error : err
            }
            res.render('error', locals)
        }else{
            let locals = {
                title : 'Lista de Libros Alquilados',
                data : rows
            }
            res.status(200).send(rows.rows)
        }
    })
}



AlquilerController.post = (req, res, next) => {
    let alquiler = {
        codigolibro : req.body.codigolibro,
        nombrelibro : req.body.nombrelibro,
        fechaalquiler : req.body.fechaalquiler,
        nombrecliente : req.body.nombrecliente,
        direccion : req.body.direccion,
        diasalquilar : req.body.diasalquilar,
        precioalquiler : req.body.precioalquiler
    }
    console.log(alquiler)

    AlquilerModel.post(alquiler, (err) => {
        if (err)
        {
            let locals = {
                title :  `Error al guardar el libro con el codigo: ${alquiler.codigolibro}`,
                description : 'Error de Sintaxis SQL',
                error : err
            }
            res.status(520).send(err)
        }else{
            res.send('Libro Ingresado de forma correcta')
        }
    })
}






AlquilerController.put = (req, res, next) => {
    let alquiler = {
        codigolibro : req.body.codigolibro,
        nombrelibro : req.body.nombrelibro,
        fechaalquiler : req.body.fechaalquiler,
        nombrecliente : req.body.nombrecliente,
        direccion : req.body.direccion,
        diasalquilar : req.body.diasalquilar,
        precioalquiler : req.body.precioalquiler
    }
    console.log(alquiler)

    AlquilerModel.put(alquiler, (err) => {
        if (err)
        {
            let locals = {
                title :  `Error al actualizar el libro alquilado con el codigo: ${alquiler.codigolibro}`,
                description : 'Error de Sintaxis SQL',
                error : err
            }
            res.status(520).send(err)
        }else{
            res.send('Libro Alquilado Actualizado Correctamente')
        }
    })
}







AlquilerController.delete = (req, res, next) => {
    let codigolibro = req.body.codigolibro;
    console.log(codigolibro)

    AlquilerModel.delete(codigolibro, (err) => {
        if (err)
        {
            let locals = {
                title :  `Error al eliminar el libro alquilado con el codigo: ${codigolibro}`,
                description : 'Error de Sintaxis SQL',
                error : err
            }
            res.status(520).send(err)
        }else{
            res.send('Libro alquilado eliminado exitosamente')
        }
    })
}







AlquilerController.addForm = (req, res, next) => res.render('add-alquiler', { title: 'Agregar Libro Alquilado' })

AlquilerController.error404 = (req, res, next) => {
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

module.exports = AlquilerController;