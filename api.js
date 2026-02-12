// Import required modules
import axios from 'axios';

// Set API endpoint URL
const apiUrl = 'https://api.example.com';

// Get portfolio
export async function getPortfolio() {
    try {
        const response = await axios.get(`${apiUrl}/portfolio`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Add stock to portfolio
export async function addStock(stockSymbol, quantity) {
    try {
        const response = await axios.post(`${apiUrl}/portfolio/add-stock`, {
            stockSymbol,
            quantity,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Remove stock from portfolio
export async function removeStock(stockSymbol) {
    try {
        const response = await axios.delete(`${apiUrl}/portfolio/remove-stock`, {
            data: {
                stockSymbol,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}