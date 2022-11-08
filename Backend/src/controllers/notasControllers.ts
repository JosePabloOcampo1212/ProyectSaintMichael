

import {Request, Response} from 'express';
import db from '../database';


class NotasControllers{
    

async createNotes(req: Request, res: Response ){
        await db.query('INSERT INTO notas set ?',[req.body])
         res.json({text: 'Nota Creada'})
     }

//---------------------------------------------------------------------------------------------

async getNotes (req: Request, res: Response ): Promise<void>{
    const { id } = req.params;
    console.log(id)
    const curso = await db.query('SELECT * FROM notas WHERE idEstudiante = ?', [id],function(error,results,fields){
        if (error) throw error;
        res.json(results);
    });
}



}

export const notasControllers = new NotasControllers();