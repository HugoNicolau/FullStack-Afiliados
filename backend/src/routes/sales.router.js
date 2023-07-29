import { Router } from "express";
import salesController from "../controllers/sales.controller";



const salesRouter = Router();

salesRouter.post("/sales", salesController.postSales);

export default salesRouter;