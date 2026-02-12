// Import required modules
import { getPortfolio, addStock, removeStock } from './api.js';
import { renderPortfolio } from './render.js';

// Get portfolio table body element
const portfolioBody = document.getElementById('portfolio-body');

// Get add stock form element
const addStockForm = document.getElementById('add-stock-form');

// Render portfolio
renderPortfolio();

// Add event listener to add stock form
addStockForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const stockSymbol = document.getElementById('stock-symbol').value;
    const quantity = document.getElementById('quantity').value;
    try {
        await addStock(stockSymbol, quantity);
        renderPortfolio();
    } catch (error) {
        console.error(error);
    }
});

// Add event listener to remove stock button
portfolioBody.addEventListener('click', async (e) => {
    if (e.target.tagName === 'BUTTON') {
        const stockSymbol = e.target.dataset.stockSymbol;
        try {
            await removeStock(stockSymbol);
            renderPortfolio();
        } catch (error) {
            console.error(error);
        }
    }
});