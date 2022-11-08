"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notasControllers_1 = require("../controllers/notasControllers");
class NotasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:id', notasControllers_1.notasControllers.getNotes);
        this.router.post('/', notasControllers_1.notasControllers.createNotes);
    }
}
const notasRouters = new NotasRoutes;
exports.default = notasRouters.router;
