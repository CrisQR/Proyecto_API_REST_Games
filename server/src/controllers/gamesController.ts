import { Request, Response } from 'express';

import pool from '../database';

class GamesController {

    public index (req: Request, res: Response) {
        pool.query('DESCRIBE Games');
        res.json('games');
    } 

}

export const gamesController = new GamesController();
export default gamesController;