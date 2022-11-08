import {Router} from 'express';
import {studentController } from '../controllers/studentControllers';

class StudentRoutes{
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        //this.router.get('/', curseController.getCurses);
        this.router.get('/nombreAndId/', studentController.getEstudentAndID);
        this.router.get('/:id', studentController.getCurseEstudent);
        this.router.get('/one/:id', studentController.getOneEstudent);
        //this.router.post('/', curseController.createCurse);
        //this.router.delete('/:id',curseController.delete);
        this.router.post('/',studentController.createStudent);
    }
}

const studetnRouters = new StudentRoutes;

export default studetnRouters.router;