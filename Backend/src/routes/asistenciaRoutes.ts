import {Router} from 'express';
import {asistenciaControllers } from '../controllers/asistenciaControllers';

class AsistenciaRoutes{
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        //this.router.get('/', curseController.getCurses);
        //this.router.get('/nombreAndId/', studentController.getEstudentAndID);
        this.router.get('/:id', asistenciaControllers.getAsistencia);
        //this.router.post('/', curseController.createCurse);
        //this.router.delete('/:id',curseController.delete);
        this.router.post('/',asistenciaControllers.createAsistencia);
    }
}

const asistenciaRouters = new AsistenciaRoutes;

export default asistenciaRouters.router;