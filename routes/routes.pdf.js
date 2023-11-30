import { Router } from "express";
import { pdfkity } from "../libs/pdfKit.js";

const router = new Router();

router.get("/imprimir",(req,res)=>{
    const stream = res.writeHead(200,{
        "Content-Type":"application/pdf",
        "Content-Disposition":"attachment; filename=usuarios.pdf"
    });

    pdfkity((data)=>
        stream.write(data)
    , ()=>{stream.end()});

})

export default router

