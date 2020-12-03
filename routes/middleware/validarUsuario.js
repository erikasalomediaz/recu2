const jwt = require('jsonwebtoken');


const validarUsuario = function (req, res, next) {

  const token = req.headers['authorization'];
  if (token) {
    jwt.verify(token, 'secretkey', function (err, decoded) {
     if (err) {
      console.log(err);
      return res.json({ mensaje: 'Token invalido' });
    }
    else{
      req.decoded = decoded;
     // console.log(req.decoded.id);
     //return res.json({ mensaje: 'Token okey' });

      next();
    }

    });
  }
  else{
    res.send("Token nula");
  }
}

module.exports.validarUsuario = validarUsuario;
