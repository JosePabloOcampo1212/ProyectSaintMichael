"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.curseController = void 0;
const database_1 = __importDefault(require("../database"));
class CurseController {
    getCurses(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cursos = yield database_1.default.query('SELECT * FROM cursos', function (error, results, fields) {
                if (error)
                    throw error;
                res.json(results);
            });
        });
    }
    getOneCurse(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const curso = yield database_1.default.query('SELECT * FROM cursos WHERE estadoCurso = True AND idProfesor = ?', [id], function (error, results, fields) {
                if (error)
                    throw error;
                res.json(results);
            });
        });
    }
    getOneCursebyID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const curso = yield database_1.default.query('SELECT * FROM cursos WHERE idCurso = ?', [id], function (error, results, fields) {
                if (error)
                    throw error;
                res.json(results);
            });
        });
    }
    createCurse(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO cursos set ?', [req.body]);
            res.json({ text: 'curso guardado' });
        });
    }
    delete(req, res) {
        res.json({ text: 'se elimino' });
    }
    updateCurse(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE cursos set estadoCurso = False WHERE idCurso = ?', [id], function (error, results, fields) {
                if (error)
                    throw error;
                res.json(results);
            });
        });
    }
    getElementsCreateEstudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cursos = yield database_1.default.query('SELECT idCurso, nombreInstitucion, nombreCurso FROM cursos', function (error, results, fields) {
                if (error)
                    throw error;
                res.json(results);
            });
        });
    }
}
exports.curseController = new CurseController();
