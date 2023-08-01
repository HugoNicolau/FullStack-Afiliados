import salesRepository from "../repositories/sales.repository.js";
import { readFile } from "fs/promises";


async function postSales(salesText) {

    const readText = readingFile(salesText);
    const parsedText = parseText(readText);

    const result = await salesRepository.postSales(parsedText);

    return result;
}

async function readingFile(fileName) {

    const readText  = await readFile('src/teste.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        
    });

    return readText;
}

async function parseText(text){

    class OneSale {
        constructor(type, date, product, value, seller) {
            this.type = type;
            this.date = date;
            this.product = product;
            this.value = value;
            this.seller = seller;
        }
    }

    const arrSales = []
    const splittedSalesArray =  text.split('\n');

    for (let i = 0; i < splittedSalesArray.length; i++){
        
        const arrDate = []
        const arrProd = []
        const arrValue = []
        const arrSeller = []

        let sellType;
        let zeroCount = 0;

        for (let j = 0; j < splittedSalesArray[i].length; j++){
            if (j === 0){
                sellType = splittedSalesArray[i][j]
            }else if (j>=1 && j<=25){
                arrDate.push(splittedSalesArray[i][j])
            }else if (j>=26 && j<=55){
                arrProd.push(splittedSalesArray[i][j])

            }else if (j>=56 && j<=65){
                if(splittedSalesArray[i][j] !== "0"){
                    zeroCount++;
                }
                if(zeroCount>0){
                    arrValue.push(splittedSalesArray[i][j])
                } else {
                    continue;
                }

            }else if (j>=67-1 && j<=86-1){
                arrSeller.push(splittedSalesArray[i][j])
            }
        }
        const strDate = arrDate.join('').trim();
        const strProd = arrProd.join('').trim();
        const strValue = Number(arrValue.join('').trim());
        const strSeller = arrSeller.join('').trim();
        
        const newSale = new OneSale(sellType, strDate, strProd, strValue, strSeller);
        if(sellType === undefined){
            break;
        }
        arrSales.push(newSale);
    }

    return arrSales;
}

const salesService = {
    postSales
}

export default salesService;