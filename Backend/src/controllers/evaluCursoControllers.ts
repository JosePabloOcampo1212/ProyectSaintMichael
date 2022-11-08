
import {Request, Response} from 'express';
import db from '../database';


class EvaluCursoControllers{
    

async createEvaluCurso(req: Request, res: Response ){
        await db.query('INSERT INTO evaluacioncurso set ?',[req.body])
         res.json({text: 'Evaluacion Creada'})
     }

//---------------------------------------------------------------------------------------------

async getEvaluCurso (req: Request, res: Response ): Promise<void>{
    const { id } = req.params;
    console.log(id)
    const curso = await db.query('SELECT * FROM evaluacioncurso WHERE idCurso = ?', [id],function(error,results,fields){
        if (error) throw error;
        res.json(results);
    });
}



}

export const evaluCursoControllers = new EvaluCursoControllers();