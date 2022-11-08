import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import curseRoutes from './routes/curseRoutes';
import studentRoutes from './routes/studentRoutes';
import asistenciaRoutes from './routes/asistenciaRoutes';
import notasRouters from './routes/notasRoutes';
import evaluCursoRouter from './routes/evaluCursoRouter';
import calificacionesRoutes from './routes/calificacionesRoutes';




class Server{
    public app: Application;
    constructor(){
       this.app = express();
       this.config();
       this.routes();
    }


    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/api/curse', curseRoutes);
        this.app.use('/api/student', studentRoutes);
        this.app.use('/api/asistencia', asistenciaRoutes);
        this.app.use('/api/notas', notasRouters);
        this.app.use('/api/evaluCurso', evaluCursoRouter);
        this.app.use('/api/calificaciones',calificacionesRoutes)
        
    }
    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'))
        });
    }
}

const server = new Server();
server.start();
