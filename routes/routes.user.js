import { Router } from "express";
import {PrismaClient}from "@prisma/client"
const prisma = new PrismaClient()
const router = Router();

router.get("/user", async(req,res)=>{
    const respuesta =  await prisma.user.findMany()
    return res.json(respuesta)
})

router.post("/user", async(req,res)=>{
 
    const resp = await prisma.user.create({
       data: req.body
      
    })
res.json(resp) 

})

export default router