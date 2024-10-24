import express, { Router } from "express"
import instanceConnection from "../config/database";
import scomments from "../schema/scomments";
import { authenticationMiddleware } from "../middleware/middleware";
const router = express.Router();

router.get("/comments", authenticationMiddleware, async (req, res) => {
    try{
        const response = await scomments.find({});
        res.status(200).json(response);
    }
    catch(error){
        console.error(error);
    }
})

router.post("/postcomment", authenticationMiddleware, async (req, res) => {
    const {username, comment} = req.body;
    if(!username || !comment){
        res.status(400).json({status: "error"})
        return;
    }
    try{
        const {username, comment} = req.body 
        const newComments = new scomments({username, comment});
        const response = newComments.save();
        res.status(201).json({status: "success"});
        return;
    }
    catch(error){
        console.error(error);
        res.status(500).json({status: "failure"});
        return;
    }
})

export default router