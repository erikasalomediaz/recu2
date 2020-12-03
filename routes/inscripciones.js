var express = require('express');
var router = express.Router();
var { Inscripcion } = require('../database/models');
var { Materia } = require('../database/models');
const { validarUsuario } = require('./Middleware/validarUsuario');

router.use(validarUsuario);

router.post('/:idMateria', async (req, res) => {

     if (req.decoded.tipo === "alumno"){
 
     const inscripcion = Inscripcion.build({
 
        // idAlumno: req.decoded.id,
         idAlumno: req.body.idAlumno,
         idMateria: req.params.idMateria
     });
 
 
     try {
         const materia = await Materia.findByPk(req.params.idMateria, (err, data) => {
             if (err) {
                 return res.json({ code: 500, data: err });
             }
             return res.json({ code: 200, data });
         });
 
         
         if (materia) {
             const { idMate, nombre, cuatrimestre, cupos, as, up } = materia;
             //const cuponuevo = cupos;
 
             if (cupos > 0) {
                 try {
                     const rta = inscripcion.save();
                     const cuponuevo = (cupos - 1);
                     console.log('cuponuevo', cuponuevo);
                     
                     //aca resto el cupo
                      if (cuponuevo < cupos) {
                         try {
                             console.log('id de materia ', idMate);
                             const reducupos = await Materia.update({
                                 cupos: cuponuevo
                             }, {
                                 where: { id: req.params.idMateria }
                             });
                             res.json({ reducupos });
                         } catch (error) {
                             console.log(error);
                             res.json({ error });
                         }
 
                     }
               
                 }
                 catch (error) {
                     console.log(error);
                     res.json({ error });
                 }
 
 
             } else { res.status(400).json('No hay más cupo'); }
 
         } else { res.status(400).json('Error en la inscripción'); }
 
     }
     catch (error) {
         console.log(error);
         res.json({ error });
     }
 
 
     }
     else{
      res.status(400).json('No puede realizar esta acción');
     }
 })
 
  
 router.get('/:idMateria', async function (req, res, next) {
    if (req.decoded.tipo !== "alumno"){
     try {
     const list =  await Inscripcion.findAll(
         {
             where:{idMateria:req.params.idMateria}
                }
     ) ;
     res.json({ list });
     }
     catch (error) {
         console.log(error);
         res.json({ error });
     }
      }
     else{
      res.status(400).json('No puede realizar esta acción');
     }
 });
 
 
 
 module.exports = router;