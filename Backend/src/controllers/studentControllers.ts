import {Request, Response} from 'express';
import db from '../database';

class StudentController{
    
    async getCurseEstudent (req: Request, res: Response ): Promise<void>{
        const { id } = req.params;
        const curso = await db.query('SELECT * FROM estudiantes WHERE idCurso = ?', [id],function(error,results,fields){
            if (error) throw error;
            res.json(results);
        });
    }


    async createStudent(req: Request, res: Response ){
        await db.query('INSERT INTO estudiantes set ?',[req.body])
         res.json({text: 'Estudiente guardado'})
     }

}




export const studentController = new StudentController();