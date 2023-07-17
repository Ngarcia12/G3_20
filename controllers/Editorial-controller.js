'use strict'

var EditorialModel = require('../models/Editorial-model'),
EditorialController = () => {}

EditorialController.getAll = (req, res, next) => {
    EditorialModel.getAll((err, rows) => { 
        if (err)
        {
            let locals = {
                title : 'Error la editorial la base de datos',
                description : 'Error de Sintaxis SQL',
                error : err
            }
            res.render('error', locals)
        }
        else
        {
            let locals = {
                title : 'Lista de Editoriales',
                data : rows
            }
            res.status(200).send(rows.rows)
        }
    })
    EditorialModel.use = req
}




EditorialController.getOne = (req, res, next) => {
    let numeroeditorial = req.body.numeroeditorial
    console.log(numeroeditorial)

    EditorialModel.getOne(numeroeditorial, (err, rows) => {
        console.log(err, '---', rows)
        if (err)
        {
            let locals = {
                title :  `Error al buscar la editorial con el codigo: ${numeroeditorial}`,
                description : 'Error de Sintaxis SQL',
                error : err
            }
            res.render('error', locals)
        }else{
            let locals = {
                title : 'Lista de Editoriales',
                data : rows
            }
            res.status(200).send(rows.rows)
        }
    })
}



EditorialController.post = (req, res, next) => {
    let editorial = {
        numeroeditorial : req.body.numeroeditorial,
        nombreeditorial : req.body.nombreeditorial,
        direccion : req.body.direccion,
        pais : req.body.pais,
        fechafundacion : req.body.fechafundacion,
        cantidadlibrosimpresos : req.body.cantidadlibrosimpresos,
        numerotelefono : req.body.numerotelefono
    }
    console.log(editorial)

    EditorialModel.post(editorial, (err) => {
        if (err)
        {
            let locals = {
                title :  `Error al guardar la editorial con el codigo: ${editorial.numeroeditorial}`,
                description : 'Error de Sintaxis SQL',
                error : err
            }
            res.status(520).send(err)
        }else{
            res.send('Editorial Ingresada de forma correcta')
        }
    })
}






EditorialController.put = (req, res, next) => {
    let editorial = {
        numeroeditorial : req.body.numeroeditorial,
        nombreeditorial : req.body.nombreeditorial,
        direccion : req.body.direccion,
        pais : req.body.pais,
        fechafundacion : req.body.fechafundacion,
        cantidadlibrosimpresos : req.body.cantidadlibrosimpresos,
        numerotelefono : req.body.numerotelefono
    }
    console.log(editorial)

    EditorialModel.put(editorial, (err) => {
        if (err)
        {
            let locals = {
                title :  `Error al actualizar la editorial con el codigo: ${numeroeditorial}`,
                description : 'Error de Sintaxis SQL',
                error : err
            }
            res.status(520).send(err)
        }else{
            res.send('Editorial Actualizada Correctamente')
        }
    })
}







EditorialController.delete = (req, res, next) => {
    let numeroeditorial = req.body.numeroeditorial;
    console.log(numeroeditorial)

    EditorialModel.delete(numeroeditorial, (err) => {
        if (err)
        {
            let locals = {
                title :  `Error al eliminar la editorial con el codigo: ${numeroeditorial}`,
                description : 'Error de Sintaxis SQL',
                error : err
            }
            res.status(520).send(err)
        }else{
            res.send('Editorial eliminado exitosamente')
        }
    })
}







EditorialController.addForm = (req, res, next) => res.render('add-editorial', { title: 'Agregar Editorial' })

EditorialController.error404 = (req, res, next) => {
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

module.exports = EditorialController;