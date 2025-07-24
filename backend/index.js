const express = require('express')
const app = express()
const port = 3500;
const cors = require('cors');
const userdata = require('./schema/UserSchema');
require('./database/mongoose');

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('hello');
});

app.post('/register', async (req, res)=>{
    try{
        console.log(req.body);
        await userdata.insertOne(req.body);
        res.status(200).json({message:"user registration successful!"});
    }catch(err){
        console.log(err);
    };
});

app.listen(port, () => {
    console.log(`server is running on port no ${port}`);
});