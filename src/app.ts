import express, { Router }  from "express";
import cors from "cors";
import "express-async-errors"

import indexRouter from "./routes/indexRouter"


const app = express()

app.use(cors())
app.use(express.json())
app.use(indexRouter)


export default app 