import { Request, Response } from 'express';

import pool from '../database';

class GamesController {

    public async list (req: Request, res: Response) {
        const games = await new Promise<any>((resolve, reject) => {
            pool.query('SELECT * FROM Games',
                (err: any, rows: any, fields: any) => {
                    if (err) reject(err); // En caso de error, resolvemos la Promise con error
                    resolve(rows); // Si no, resolvemos con el resultado
                });
        });
        res.json(games);
    } 
    
    public async getOne (req: Request, res: Response) {
        const game = await new Promise<any>((resolve, reject) => {
            pool.query('SELECT * FROM Games WHERE id = ?', [req.params.id],
                (err: any, rows: any, fields: any) => {
                    if (err) reject(err); 
                    resolve(rows); 
                });
        });
        res.json(game);
    } 

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO Games SET ?', [req.body]);
        res.json({message: 'Game Saved'});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        await pool.query('DELETE FROM Games WHERE id = ?', [req.params.id]);
        res.json({text: 'Deleting game ' + req.params.id});
    }

    public async update (req: Request, res: Response): Promise<void> {
        await pool.query('UPDATE Games SET ? WHERE id = ?', [req.body, req.params.id]);
        res.json({text: 'Updating game ' + req.params.id});
    }

}

export const gamesController = new GamesController();
export default gamesController;