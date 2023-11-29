import express, { Router } from 'express';

import routesUser from "./routes/routes.user.js"



const app = express();
const indexRoutes = Router()

app.use(express.json());

app.use("/api",routesUser)

app.listen(3000,()=>{
    console.log("server listening on 3000");
}) 