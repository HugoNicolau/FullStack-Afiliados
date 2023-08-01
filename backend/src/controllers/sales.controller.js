import salesService from "../services/sales.services.js";

export async function postSales(req, res) {
    const salesText = req.body;

    try {
        const result = await salesService.postSales(salesText);
        res.status(200).send(result);
    } catch (err) {
        //TODO: Error treatment
        return res.status(500).send(err.message)
    }
}


const salesController = {
    postSales
};

export default salesController;