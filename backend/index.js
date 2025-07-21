const express = require('express')
const app = express()
const port = 3500;
const cors = require('cors');


app.use(cors());

app.get('/', (req, res) => {
    try {
        res.send('hello everyone this is me');
    } catch (e) {
        console.log(e);
    };
});

app.get('/userdata', (req, res) => {
    try {
        const data = [
            { id: 1, name: "Aarav Mehta", email: "aarav.mehta@example.com", isActive: true },
            { id: 2, name: "Diya Kapoor", email: "diya.kapoor@example.com", isActive: false },
            { id: 3, name: "Rohan Singh", email: "rohan.singh@example.com", isActive: true },
            { id: 4, name: "Neha Sharma", email: "neha.sharma@example.com", isActive: true },
            { id: 5, name: "Kabir Jain", email: "kabir.jain@example.com", isActive: false },
            { id: 6, name: "Simran Kaur", email: "simran.kaur@example.com", isActive: true },
            { id: 7, name: "Yash Verma", email: "yash.verma@example.com", isActive: true },
            { id: 8, name: "Ananya Iyer", email: "ananya.iyer@example.com", isActive: false },
            { id: 9, name: "Ishaan Patel", email: "ishaan.patel@example.com", isActive: true },
            { id: 10, name: "Tanya Desai", email: "tanya.desai@example.com", isActive: true }
        ]

        res.status(248).json({message: "data retrieved successfully", data});

    } catch (e) {
        console.log(e);
    };
});

app.listen(port, () => {
    console.log(`server is running on port no ${port}`);
});