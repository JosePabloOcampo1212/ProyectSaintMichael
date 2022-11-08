import {Router} from 'express';
import {evaluCursoControllers } from '../controllers/evaluCursoControllers';

class EvaluCursoRoutes{
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/:id', evaluCursoControllers.getEvaluCurso);
        this.router.post('/',evaluCursoControllers.createEvaluCurso);
    }
}

const evaluCursoRoutes = new EvaluCursoRoutes;

export default evaluCursoRoutes.router;