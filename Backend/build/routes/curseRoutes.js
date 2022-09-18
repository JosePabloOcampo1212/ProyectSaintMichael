"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const curseControllers_1 = require("../controllers/curseControllers");
class CurseRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', curseControllers_1.curseController.getCurses);
        this.router.get('/:id', curseControllers_1.curseController.getOneCurse);
        this.router.post('/', curseControllers_1.curseController.createCurse);
        this.router.delete('/:id', curseControllers_1.curseController.delete);
        this.router.put('/:id', curseControllers_1.curseController.update);
    }
}
const curseRoutes = new CurseRouter;
exports.default = curseRoutes.router;
