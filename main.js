const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const serverName = process.env.SERVER;

app.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 500)
    const fibonacci = getFibonacci(randomNumber);
    res.json({ 
        server: serverName,
        fibonacci: fibonacci
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const getFibonacci = (num) => {
    let seq = []
    for (let i = 0; i < num; i++) {
        if (i <= 1) {
            seq.push(i);
        } else {
            seq.push(seq[i - 1] + seq[i - 2]);
        }
    }
    return seq;
}