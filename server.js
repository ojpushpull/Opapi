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

let cards = [
    { id: 1, cardName: 'Mihawk', set: 'op-12', rarity: 'SR', price: '100'},
    { id: 2, cardName: 'Zoro', set: 'op-10', rarity: 'R', price: '110'},
    { id: 3, cardName: 'Rayleigh', set: 'op-01', rarity: 'SEC', price: '9'},
    { id: 4, cardName: 'Monkey', set: 'op-07', rarity: 'UC', price: '7'}
]

let nextId = 5;