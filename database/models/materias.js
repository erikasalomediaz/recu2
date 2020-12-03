
const sequelize = require('../db')
const { DataTypes } = require('sequelize');



const Materia = sequelize.define('materias',{
    id:{type: DataTypes.INTEGER,
        primaryKey:true,
    autoIncrement:true},
    nombre:{type: DataTypes.STRING,
    unique:true},
    cupos:{type: DataTypes.INTEGER,
    },
    cuatrimestre:{type: DataTypes.INTEGER,
        validate: {isIn: [['1', '2', '3', '4']]},
        },     
},
{
    timestamps:true
}
);

//Materia.sync({force:true});
module.exports= Materia;