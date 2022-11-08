"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studentControllers_1 = require("../controllers/studentControllers");
class StudentRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //this.router.get('/', curseController.getCurses);
        this.router.get('/nombreAndId/', studentControllers_1.studentController.getEstudentAndID);
        this.router.get('/:id', studentControllers_1.studentController.getCurseEstudent);
        this.router.get('/one/:id', studentControllers_1.studentController.getOneEstudent);
        //this.router.post('/', curseController.createCurse);
        //this.router.delete('/:id',curseController.delete);
        this.router.post('/', studentControllers_1.studentController.createStudent);
    }
}
const studetnRouters = new StudentRoutes;
exports.default = studetnRouters.router;
