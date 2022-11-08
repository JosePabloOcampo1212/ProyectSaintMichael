"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const evaluCursoControllers_1 = require("../controllers/evaluCursoControllers");
class EvaluCursoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:id', evaluCursoControllers_1.evaluCursoControllers.getEvaluCurso);
        this.router.post('/', evaluCursoControllers_1.evaluCursoControllers.createEvaluCurso);
    }
}
const evaluCursoRoutes = new EvaluCursoRoutes;
exports.default = evaluCursoRoutes.router;
