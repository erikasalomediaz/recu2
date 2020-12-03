const sequelize = require('../db')
const { DataTypes } = require('sequelize');



const Peticion = sequelize.define('peticiones',{
    id:{type: DataTypes.INTEGER,
        primaryKey:true,
    autoIncrement:true},
    hora:{type: DataTypes.STRING,
    },
    ip:{type: DataTypes.STRING,
    },
    ruta:{type: DataTypes.STRING,
    },
    metodo:{type: DataTypes.INTEGER,
     }, 
     usuario:{type: DataTypes.STRING,
        allowNull:true},
     },         
{
    timestamps:true
}
);

//Peticion.sync({force:true});
module.exports= Peticion;