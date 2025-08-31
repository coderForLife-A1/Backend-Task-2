const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const messages = [];

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    messages.push({ name, email, message, receivedAt: new Date().toISOString() });

    res.status(201).json({ message: 'Contact message received.' });
});

app.get('/contact', (req, res) => {
    res.json(messages);
});

app.listen(port, () => {
    console.log(`Contact form backend listening at http://localhost:${port}`);
});
