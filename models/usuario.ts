import { DataTypes } from 'sequelize';
import db from '../db/connection';


const Usuario = db.define('Usuario', {
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    cedula: {
        type: DataTypes.INTEGER
    },
    correo: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.INTEGER
    },
});

export default Usuario;

