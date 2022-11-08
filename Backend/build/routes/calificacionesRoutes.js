"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const calificacionesControllers_1 = require("../controllers/calificacionesControllers");
class CalificacionesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:id', calificacionesControllers_1.calificacionesControllers.getCalificaciones);
        this.router.post('/', calificacionesControllers_1.calificacionesControllers.createCalificacion);
    }
}
const calificacionesRoutes = new CalificacionesRoutes;
exports.default = calificacionesRoutes.router;
