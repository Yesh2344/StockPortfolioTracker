// Import required modules
import axios from 'axios';
import { getPortfolio, addStock, removeStock } from './api.js';

// Set API endpoint URL
const apiUrl = 'https://api.example.com';

// Test get portfolio
describe('getPortfolio', () => {
    it('should return portfolio data', async () => {
        const response = await getPortfolio();
        expect(response).toBeInstanceOf(Object);
    });
});

// Test add stock
describe('addStock', () => {
    it('should add stock to portfolio', async () => {
        const stockSymbol = 'AAPL';
        const quantity = 10;
        const response = await addStock(stockSymbol, quantity);
        expect(response).toBeInstanceOf(Object);
    });
});

// Test remove stock
describe('removeStock', () => {
    it('should remove stock from portfolio', async () => {
        const stockSymbol = 'AAPL';
        const response = await removeStock(stockSymbol);
        expect(response).toBeInstanceOf(Object);
    });
});