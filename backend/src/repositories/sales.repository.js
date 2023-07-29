import { connectionDB } from "../database/db";


async function postSales(sales) {
    await connectionDB.query('INSERT INTO ...')
}


const salesRepository = {
    postSales
}

export default salesRepository;