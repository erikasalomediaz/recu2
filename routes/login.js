var express = require('express');
var router = express.Router();
var { User } = require('../database/models')
var { User } = require('../database/models')
var jwt = require('jsonwebtoken');




router.post('/', async function (req, res, next) {

    const name = req.body.name;
    const email = req.body.email;
    const clave = req.body.clave;

    if (!email && !name) {
        res.send('Usuario inválido');
        next();
    }

    if (!clave) {
        res.status(400).json('Clave inválida');
        next();
    }

    const usuario = email || name;

    try {
        const userlog = await User.findOne({
            where: { clave: clave },
            and: { email: usuario }, or:
                { name: usuario }
          //  where: { clave: clave, email: usuario, or, name: usuario }
              //   where: {[and]:[{clave: clave},
              //  {email: usuario}]}
        });

        if (userlog) {
            const { id, email, name, clave, tipo } = userlog;

            const token = jwt.sign({ id, email, name, clave, tipo }, 'secretkey');
            //console.log('req.token', req.token);
            //console.log('token', token);
            req.token = token;

            res.status(200).send({ code: 200, data: token });

        } else {
            res.status(200).send({ code: 400, data: 'Usuario o clave incorrecta' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ code: 401, data:  'Error en logueo'  });

    }
});


module.exports = router;
