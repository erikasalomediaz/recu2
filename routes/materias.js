
var express = require('express');
var router = express.Router();
var  {Materia}  = require('../database/models');
var { Inscripcion } = require('../database/models');
const { validarUsuario } = require('./middleware/validarUsuario');
router.use(validarUsuario);




router.post('/', async(req, res) => {
 // console.log('req.body.tipo', req.user)

  if (req.decoded.tipo === "admin"){
  const materia = Materia.build({
  
    nombre: req.body.nombre,
    cuatrimestre:req.body.cuatrimestre,
    cupos: req.body.cupos
  });


  try {
      const rta =await materia.save();
      res.json({ rta });
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



  router.get('/', async function (req, res, next) {
     if (req.decoded.tipo === "alumno"){
   const idAlumno = req.decoded.id;

    try {
    const list =  await Inscripcion.findAll(
        {
            where:{idAlumno:idAlumno}
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