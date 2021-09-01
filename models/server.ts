import express, { Application } from 'express';
import cors from 'cors';

import useRoutes from '../routes/usuario';
import db from '../db/connection';


class Server {

    private app: Application
    private port: string ;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        // Conexion DataBase
        this.dbConnection();

        // Middlewares
        this.middlewares();

        // Definir las rutas
        this.routes();

    }

    async dbConnection() {

        try {

            await db.authenticate();
            console.log('Database online');

        } catch (error) {
            throw new Error( error );
        }

    }

    middlewares() {
        
        // CORS
        this.app.use( cors() );

        // Lectura del body
        this.app.use( express.json() );

        // Carpeta publica
        this.app.use( express.static('public') );

    }

    routes() {

        this.app.use( this.apiPaths.usuarios, useRoutes )

    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port );
        })
    }

}

export default Server;