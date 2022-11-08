"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asistenciaControllers_1 = require("../controllers/asistenciaControllers");
class AsistenciaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //this.router.get('/', curseController.getCurses);
        //this.router.get('/nombreAndId/', studentController.getEstudentAndID);
        this.router.get('/:id', asistenciaControllers_1.asistenciaControllers.getAsistencia);
        //this.router.post('/', curseController.createCurse);
        //this.router.delete('/:id',curseController.delete);
        this.router.post('/', asistenciaControllers_1.asistenciaControllers.createAsistencia);
    }
}
const asistenciaRouters = new AsistenciaRoutes;
exports.default = asistenciaRouters.router;
