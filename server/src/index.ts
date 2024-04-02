import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';

class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    //Metodo encargado de configurar el objeto o propuedad app
    config(): void {
        //Se verifica si existe un puerto definido para su uso o sino se ejecuta el puerto 3000
        //Se crea la variable y su valor
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }


    //Metodo que define de app las rutas del servidor
    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/games', gamesRoutes);
    }

    //Metodo para inicializar el servidor y que este empiece a escuchar
    start(): void {
        //Se obtiene la variable (analogia)
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port`, this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();