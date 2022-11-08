import {Router} from 'express';
import {notasControllers } from '../controllers/notasControllers';

class NotasRoutes{
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/:id', notasControllers.getNotes);
        this.router.post('/',notasControllers.createNotes);
    }
}

const notasRouters = new NotasRoutes;

export default notasRouters.router;