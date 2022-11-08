import {Router} from 'express';
import {curseController } from '../controllers/curseControllers';

class CurseRouter{
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', curseController.getCurses);
        this.router.get('/:id', curseController.getOneCurse);
        this.router.get('/getById/:id', curseController.getOneCursebyID);
        this.router.post('/', curseController.createCurse);
        this.router.delete('/:id',curseController.delete);
        this.router.put('/:id',curseController.updateCurse);
    }
}

const curseRoutes = new CurseRouter;

export default curseRoutes.router;