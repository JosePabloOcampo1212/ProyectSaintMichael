import {Request, Response} from 'express';
import db from '../database';

class CurseController{
    public async getCurses (req: Request, res: Response ): Promise<void>  {
        const cursos = await db.query('SELECT * FROM cursos', function(error,results,fields){
            if (error) throw error;
            res.json(results);
        });
    }
    async getOneCurse (req: Request, res: Response ): Promise<void>{
        const { id } = req.params;
        const curso = await db.query('SELECT * FROM cursos WHERE estadoCurso = True AND idProfesor = ?', [id],function(error,results,fields){
            if (error) throw error;
            res.json(results);
        });
    }

    async getOneCursebyID (req: Request, res: Response ): Promise<void>{
        const { id } = req.params;
        const curso = await db.query('SELECT * FROM cursos WHERE idCurso = ?', [id],function(error,results,fields){
            if (error) throw error;
            res.json(results);
        });
    }




    async createCurse(req: Request, res: Response ){
       await db.query('INSERT INTO cursos set ?',[req.body])
        res.json({text: 'curso guardado'})
    }

    delete (req: Request, res: Response ){
        res.json({text: 'se elimino'})
}


     async updateCurse(req: Request, res: Response ){
        const { id } = req.params;
        await db.query('UPDATE cursos set estadoCurso = False WHERE idCurso = ?',[id],function(error,results,fields){
            if (error) throw error;
            res.json(results);
        });
    }


    public async getElementsCreateEstudent (req: Request, res: Response ): Promise<void>  {
        const cursos = await db.query('SELECT idCurso, nombreInstitucion, nombreCurso FROM cursos', function(error,results,fields){
            if (error) throw error;
            res.json(results);
        });
    }


}


export const curseController = new CurseController();