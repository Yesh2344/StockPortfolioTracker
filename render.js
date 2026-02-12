// Import required modules
import { getPortfolio } from './api.js';

// Render portfolio
export async function renderPortfolio() {
    try {
        const portfolio = await getPortfolio();
        const portfolioBody = document.getElementById('portfolio-body');
        portfolioBody.innerHTML = '';
        portfolio.forEach((stock) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${stock.stockSymbol}</td>
                <td>${stock.quantity}</td>
                <td>${stock.currentPrice}</td>
                <td>${stock.value}</td>
                <td><button data-stock-symbol="${stock.stockSymbol}">Remove</button></td>
            `;
            portfolioBody.appendChild(row);
        });
    } catch (error) {
        console.error(error);
    }
}