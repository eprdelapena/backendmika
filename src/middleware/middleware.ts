import express, { Request, Response, NextFunction } from "express";

export const authenticationMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers["authorization"];
    if(!authHeader){
        res.status(401).json({message: "not authorized"});
        return;
    }

    const token = authHeader?.split("/");
    try{
        if(token[1] === "abcdef"){
            next();
        }
        else{
            res.status(403).json({message: "not authorized"});
        }
    }
    catch(error){
        console.error(error);
        return;
    }
}
