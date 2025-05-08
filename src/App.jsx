import './App.css';
import {inventory, bestSellingTv} from "./constants/inventory.js";
import totalSold from "./helpers/total-sold.js";
import totalStock from "./helpers/total-stock.js";
import totalToSell from "./helpers/total-to-sell.js";
import productName from "./helpers/product-name.js";
import productPrice from "./helpers/product-price.js";
import productSize from "./helpers/product-size.js";
import check from "./assets/check.png";
import minus from "./assets/minus.png";

function App() {
    function mostSales(){
        console.log("Meest verkocht eerst");
    }

    function cheapest(){
        console.log("Goedkoopste eerst");
    }

    function bestForSport(){
        console.log("Meest geschikt voor sport eerst");
    }

    return (
        <main className="outer-container">
            <h1>Tech it easy dashboard</h1>
            <h2>Verkoopoverzicht</h2>
            <section className="dashboard-container">
                <div className="dashboard-item">
                    <h3>Aantal verkochte producten</h3>
                    <p>{totalSold(inventory)}</p>
                </div>
                <div className="dashboard-item">
                    <h3>Aantal ingekochte producten</h3>
                    <p>{totalStock(inventory)}</p>
                </div>
                <div className="dashboard-item">
                    <h3>Aantal te verkopen producten</h3>
                    <p>{totalToSell(inventory)}</p>
                </div>
            </section>
            <h2>Best verkochte tv</h2>
            <section className="dashboard-container">
                <div className="product-best-seller">
                    <img src={bestSellingTv.sourceImg} alt="Afbeelding van de tv"/>
                    <div>
                        <p>{productName(bestSellingTv)}</p>
                        <p>{productPrice(bestSellingTv.price)}</p>
                        <p>{productSize(bestSellingTv.availableSizes)}</p>
                        <ul className="option-list">
                            <li><img src={check} alt="check" className="icon"/> wifi</li>
                            <li><img src={minus} alt="niet beschikbaar" className="icon"/> speech</li>
                            <li><img src={check} alt="check" className="icon"/> hdr</li>
                            <li><img src={check} alt="check" className="icon"/> bluetooth</li>
                            <li><img src={minus} alt="niet beschikbaar" className="icon"/> ambilight</li>
                </ul>
                    </div>
                </div>
            </section>
            <section>
                <button type="button" onClick={mostSales}>Meest verkocht eerst</button>
                <button type="button" onClick={cheapest}>Goedkoopste eerst</button>
                <button type="button" onClick={bestForSport}>Meest geschikt voor sport eerst</button>
            </section>
        </main>
    )
}

export default App
