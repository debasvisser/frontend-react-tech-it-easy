function totalStock(product) {
    let total = 0;

    for (let i = 0; i < product.length; i++) {
        total += product[i].originalStock;
    }
    return total;
}

export default totalStock;