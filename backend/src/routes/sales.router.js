import { Router } from "express";
import salesController from "../controllers/sales.controller.js";



const salesRouter = Router();

salesRouter.post("/sales", salesController.postSales);

export default salesRouter;