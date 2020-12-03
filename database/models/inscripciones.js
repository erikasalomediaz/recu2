const sequelize = require('../db')
const { DataTypes } = require('sequelize');



const Inscripcion = sequelize.define('inscripciones',{

    idAlumno:{type: DataTypes.INTEGER,
        foreinKey:true},
    idMateria:{type: DataTypes.INTEGER,
        foreinKey:true},
    nota:{type: DataTypes.INTEGER,
           allowNull:true},

        
},
{
    timestamps:true
}
);

//Inscripcion.sync({force:true});
module.exports= Inscripcion;