import { connectionDB } from "../database/db.js";


async function postSales(parsedTexts) {

   await parsedTexts.map(async (item) => {
        const { type, date, product, value, seller } = item

        await connectionDB.query(`INSERT INTO sales (type, date, product, value, seller) VALUES ($1, $2, $3, $4, $5);`,
        [type, date, product, value, seller]
        );
    });

    return "Posted on DB"
}


const salesRepository = {
    postSales
}

export default salesRepository;