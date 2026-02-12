// Import required modules
import express from 'express';
import path from 'path';

// Create Express app
const app = express();

// Set port
const port = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, './')));

// Start server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});