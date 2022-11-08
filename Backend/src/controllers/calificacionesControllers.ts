import {Request, Response} from 'express';
import db from '../database';


class CalificacionesControllers{
    

async createCalificacion(req: Request, res: Response ){
        await db.query('INSERT INTO calificaciones  set ?',[req.body])
         res.json({text: 'Calificacion Creada'})
     }

//---------------------------------------------------------------------------------------------

async getCalificaciones (req: Request, res: Response ): Promise<void>{
    const { id } = req.params;
    console.log(id)
    const curso = await db.query('SELECT * FROM calificaciones  WHERE idEstudiante = ?', [id],function(error,results,fields){
        if (error) throw error;
        res.json(results);
    });
}



}

export const calificacionesControllers = new CalificacionesControllers();