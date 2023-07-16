'use strict'

var LibroModel = require('../models/libro-model'),
LibroController = () => {}

LibroController.getAll = (req, res, next) => {
    LibroModel.getAll((err, rows) => { 
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
                title : 'Lista de los Libros',
                data : rows
            }
            res.status(200).send(rows.rows)
        }
    })
    LibroModel.use = req
}




LibroController.getOne = (req, res, next) => {
    let codigolibro = req.body.codigolibro
    console.log(codigolibro)

    LibroModel.getOne(codigolibro, (err, rows) => {
        console.log(err, '---', rows)
        if (err)
        {
            let locals = {
                title :  `Error al buscar el libro con el codigo: ${codigolibro}`,
                description : 'Error de Sintaxis SQL',
                error : err
            }
            res.render('error', locals)
        }else{
            let locals = {
                title : 'Lista de Libros',
                data : rows
            }
            res.status(200).send(rows.rows)
        }
    })
}



LibroController.post = (req, res, next) => {
    let libro = {
        codigolibro : req.body.codigolibro,
        nombrelibro : req.body.nombrelibro,
        nombreescritor : req.body.nombreescritor,
        fechapublicacion : req.body.fechapublicacion,
        isbn : req.body.isbn,
        precio : req.body.precio,
        editorial : req.body.editorial
    }
    console.log(libro)

    LibroModel.post(libro, (err) => {
        if (err)
        {
            let locals = {
                title :  `Error al guardar el libro con el codigo: ${libro.codigolibro}`,
                description : 'Error de Sintaxis SQL',
                error : err
            }
            res.status(520).send(err)
        }else{
            res.send('Libro Ingresado de forma correcta')
        }
    })
}






LibroController.put = (req, res, next) => {
    let libro = {
        codigolibro : req.body.codigolibro,
        nombrelibro : req.body.nombrelibro,
        nombreescritor : req.body.nombreescritor,
        fechapublicacion : req.body.fechapublicacion,
        isbn : req.body.isbn,
        precio : req.body.precio,
        editorial : req.body.editorial
    }
    console.log(libro)

    LibroModel.put(libro, (err) => {
        if (err)
        {
            let locals = {
                title :  `Error al actualizar el libro con el codigo: ${libro.codigolibro}`,
                description : 'Error de Sintaxis SQL',
                error : err
            }
            res.status(520).send(err)
        }else{
            res.send('Libro Actualizado Correctamente')
        }
    })
}







LibroController.delete = (req, res, next) => {
    let codigolibro = req.body.codigolibro;
    console.log(codigolibro)

    LibroModel.delete(codigolibro, (err) => {
        if (err)
        {
            let locals = {
                title :  `Error al eliminar el libro con el codigo: ${codigolibro}`,
                description : 'Error de Sintaxis SQL',
                error : err
            }
            res.status(520).send(err)
        }else{
            res.send('Libro eliminado exitosamente')
        }
    })
}







LibroController.addForm = (req, res, next) => res.render('add-libro', { title: 'Agregar Libro' })

LibroController.error404 = (req, res, next) => {
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

module.exports = LibroController;