import salesService from "../services/sales.services";

export async function postSales(req, res) {
    const sales = req.body;

    try {
        const result = await salesService.postSales(sales);

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