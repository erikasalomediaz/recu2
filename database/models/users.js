const sequelize = require('../db')
const { DataTypes } = require('sequelize');



const User = sequelize.define('users',{
    id:{type: DataTypes.INTEGER,
        primaryKey:true,
    autoIncrement:true},
    email:{type: DataTypes.STRING,
    unique:true,
    primaryKey:true,
    validate: {isEmail:true}},
    name:{type: DataTypes.STRING,
        validate: {notContains: ' '},
        unique:true },
    clave:{type: DataTypes.STRING,
        validate: {len: [4,30]},
    },
    tipo:{type: DataTypes.STRING,
        validate: {isIn: [['profesor', 'admin', 'alumno']]},
        },
        
},
{
    timestamps:true
}
);

//User.sync({force:true});
module.exports= User;
