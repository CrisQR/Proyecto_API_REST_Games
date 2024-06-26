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
exports.gamesController = void 0;
const database_1 = __importDefault(require("../database"));
class GamesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield new Promise((resolve, reject) => {
                database_1.default.query('SELECT * FROM Games', (err, rows, fields) => {
                    if (err)
                        reject(err); // En caso de error, resolvemos la Promise con error
                    resolve(rows); // Si no, resolvemos con el resultado
                });
            });
            res.json(games);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const game = yield new Promise((resolve, reject) => {
                database_1.default.query('SELECT * FROM Games WHERE id = ?', [req.params.id], (err, rows, fields) => {
                    if (err)
                        reject(err);
                    resolve(rows);
                });
            });
            res.json(game);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO Games SET ?', [req.body]);
            res.json({ message: 'Game Saved' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('DELETE FROM Games WHERE id = ?', [req.params.id]);
            res.json({ text: 'Deleting game ' + req.params.id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('UPDATE Games SET ? WHERE id = ?', [req.body, req.params.id]);
            res.json({ text: 'Updating game ' + req.params.id });
        });
    }
}
exports.gamesController = new GamesController();
exports.default = exports.gamesController;
