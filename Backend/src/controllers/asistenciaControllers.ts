

import {Request, Response} from 'express';
import db from '../database';


class AsistenciaControllers{
    

async createAsistencia(req: Request, res: Response ){
        await db.query('INSERT INTO asistencia set ?',[req.body])
         res.json({text: 'Asistencia Creada'})
     }

//---------------------------------------------------------------------------------------------

async getAsistencia (req: Request, res: Response ): Promise<void>{
    const { id } = req.params;
    console.log(id)
    const curso = await db.query('SELECT * FROM asistencia WHERE fecha = ?', [id],function(error,results,fields){
        if (error) throw error;
        res.json(results);
    });
}



}

export const asistenciaControllers = new AsistenciaControllers();