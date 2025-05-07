import './App.css';
import {inventory} from "./constants/inventory.js";
import totalSold from './helpers/total-sold.js';
import totalStock from "./helpers/total-stock.js";
import totalToSell from "./helpers/total-to-sell.js";

function App() {
    return (
            <main className="outer-container">
                <h1>Tech it easy dashboard</h1>
                <h2>Verkoopoverzicht</h2>
                <section className='dashboard-container'>
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
            </main>
    )
}

export default App
