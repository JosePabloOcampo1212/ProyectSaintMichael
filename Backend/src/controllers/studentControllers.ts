import {Request, Response} from 'express';
import db from '../database';

class StudentController{
    

    async createStudent(req: Request, res: Response ){
        await db.query('INSERT INTO estudiantes set ?',[req.body])
         res.json({text: 'Estudiente guardado'})
     }

//---------------------------------------------------------------------------------------------

async getCurseEstudent (req: Request, res: Response ): Promise<void>{
    const { id } = req.params;
    const curso = await db.query('SELECT idEstudiante,nombre FROM estudiantes WHERE idCurso = ?', [id],function(error,results,fields){
        if (error) throw error;
        res.json(results);
    });
}


//---------------------------------------------------------------------------------------------
     async getEstudentAndID(req: Request, res: Response ): Promise<void>{
        const curso = await db.query('SELECT idEstudiante,nombre FROM estudiantes',function(error,results,fields){
            console.log(results);
            if (error) throw error;
            res.json(results);
        });
     }

//----------------------------------------------------------------------------------------
async getOneEstudent(req: Request, res: Response ): Promise<void>{
    const { id } = req.params;
    const curso = await db.query('SELECT * FROM estudiantes WHERE idEstudiante = ?', [id],function(error,results,fields){
        if (error) throw error;
        res.json(results);
    });
}


}




export const studentController = new StudentController();