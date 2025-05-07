function totalSold(product) {
    let total = 0;

    for (let i = 0; i < product.length; i++) {
        total += product[i].sold;
    }
    return total;
}

export default totalSold;