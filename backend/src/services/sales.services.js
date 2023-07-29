import salesRepository from "../repositories/sales.repository";

async function postSales(sales) {
    const result = await salesRepository.postSales(sales);

    return result;
}


const salesService = {
    postSales
}

export default salesService;