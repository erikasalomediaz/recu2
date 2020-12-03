var express = require('express');
var router = express.Router();
var { Inscripcion } = require('../database/models')
const { validarUsuario } = require('./middleware/validarUsuario');


router.use(validarUsuario);


    router.put('/:idMateria', async (req, res) => {

if (req.decoded.tipo === "profesor") {
        const nota = req.body.nota;
        const idAlumno = req.body.idAlumno;
        const idMateria = req.params.idMateria;
        console.log(idAlumno);
        console.log(idMateria);
        console.log(req.body);
        try {
            const rta = await Inscripcion.update({
                nota: nota
            }, {
                // where: {[and]:[{idAlumno: req.body.idAlumno},
                //{idMateria: req.params.idMateria}]}

                where: { idAlumno: req.body.idAlumno, idMateria: req.params.idMateria },

            });
            res.json("Nota cargada");
            console.log(rta);
        } catch (error) {
            console.log(error);
            res.json({ error });
        }
    }
   else {
    res.status(400).json('No puede realizar esta acción');

     } })
 



module.exports = router;
