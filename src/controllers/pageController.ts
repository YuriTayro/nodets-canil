import { Request, Response } from 'express'; 

export const home = (req: Request, res: Response) =>{
    res.send('home no controller!')
    //res.render('pages/home');
}

export const dogs = (req: Request, res: Response) =>{
    //res.render('pages/home');
}

export const cats = (req: Request, res: Response) =>{
    //res.render('pages/home');
}

export const fishes = (req: Request, res: Response) =>{
    //res.render('pages/home');
}