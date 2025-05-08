function productSize(product) {
    let outcome = '';

    for (let i = 0; i < product.length; i++) {
        const inch = product[i];
        const cm = Math.round(inch * 2.54);
        outcome = outcome + `${inch} inch (${cm} cm)`;

        if (i < product.length -1) {
            outcome = `${outcome} | `;
        }
    }
    return outcome;
}

export default productSize;

// Deze vond ik erg lastig.
// Met hulp van chatgpt gelukt, maar hier zat ik even met de handen in het haar...
// Moeilijk nog om alles even los van elkaar te zien, als het er staat is het logisch, maar het bedenken en redeneren vind ik nog lastig.