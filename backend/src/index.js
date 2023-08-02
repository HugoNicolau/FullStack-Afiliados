import express from "express";
import dotenv from "dotenv";

import sales from "./routes/sales.router.js";

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
dotenv.config();
const port = process.env.PORT || 5000;
process.env.NODE_TLS_REJECT_UNAUTHORIZED="0";


server.use(sales);


server.listen(port, () => console.log(`Server running at port ${port}`));