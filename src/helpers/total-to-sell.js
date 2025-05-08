import totalSold from "./total-sold.js";
import totalStock from "./total-stock.js";

// function totalToSell(product) {
//     return totalStock(product) - totalSold(product);
// }

const totalToSell = (product) => totalStock(product) - totalSold(product);

export default totalToSell;