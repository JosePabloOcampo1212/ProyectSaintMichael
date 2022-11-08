"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const curseRoutes_1 = __importDefault(require("./routes/curseRoutes"));
const studentRoutes_1 = __importDefault(require("./routes/studentRoutes"));
const asistenciaRoutes_1 = __importDefault(require("./routes/asistenciaRoutes"));
const notasRoutes_1 = __importDefault(require("./routes/notasRoutes"));
const evaluCursoRouter_1 = __importDefault(require("./routes/evaluCursoRouter"));
const calificacionesRoutes_1 = __importDefault(require("./routes/calificacionesRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/api/curse', curseRoutes_1.default);
        this.app.use('/api/student', studentRoutes_1.default);
        this.app.use('/api/asistencia', asistenciaRoutes_1.default);
        this.app.use('/api/notas', notasRoutes_1.default);
        this.app.use('/api/evaluCurso', evaluCursoRouter_1.default);
        this.app.use('/api/calificaciones', calificacionesRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
