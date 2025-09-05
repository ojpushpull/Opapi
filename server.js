const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware to parse JSON requests
app.use(express.json());

//Starting Route
app.get('/', (req, res) => {
    res.json({ message: 'Optcg Prices' });
});

//run the server
app.listen(PORT, () => {
    console.log(`Api server running on port ${PORT}`);
});