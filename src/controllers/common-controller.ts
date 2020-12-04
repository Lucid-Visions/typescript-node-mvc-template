/**
 * 
 * Common controller functions
 * 
 */

 import { Request, Response } from 'express'

class CommonController {
    static async ping(_: Request, res: Response): Promise<void> {
        res.json({ text: 'pong' })
    }
}

export default CommonController