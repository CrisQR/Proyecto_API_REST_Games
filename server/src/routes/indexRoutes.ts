import { Router } from 'express';

import { indexController } from '../controllers/indexController'

class IndexRoutes {
    
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        //Se crea una ruta de la aplicacion del servidor para la ruta inicial en la aplicacion, cuando se visite esta devolvera un mensaje
        this.router.get('/', indexController.index);
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;