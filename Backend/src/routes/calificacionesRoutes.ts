import {Router} from 'express';
import {calificacionesControllers } from '../controllers/calificacionesControllers';

class CalificacionesRoutes{
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/:id', calificacionesControllers.getCalificaciones);
        this.router.post('/',calificacionesControllers.createCalificacion);
    }
}

const calificacionesRoutes = new CalificacionesRoutes;

export default calificacionesRoutes.router;