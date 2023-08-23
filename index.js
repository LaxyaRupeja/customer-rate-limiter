const express = require('express');
const rateLimiter = require('./Middleware/rateLimiterMw');
const app = express();

app.get('/api', rateLimiter, (req, res) => {
    res.send('API response');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
