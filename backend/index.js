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

//crud operations c-create r-read u-update d-delete

app.post('/register', async (req, res)=>{
    try{
        console.log(req.body);
        await userdata.insertOne(req.body);
        res.status(200).json({message:"user registration successful!"});
    }catch(err){
        console.log(err);
    };
});

app.get('/userdata', async(req, res)=>{
    try{
        const result = await userdata.find();
        res.send(result);
    }catch(er){
        console.log(er);
    };
});

app.delete('/deleteuser/:id', async(req, res)=>{
    try{
        console.log(req.params);
        const {id} = req.params;
        await userdata.findByIdAndDelete(id);
        res.status(200).json({message :"user data deleted"});
    }catch(err){
        console.log(err);
    };
});

app.get('/singleruserdata/:id', async(req,res)=>{
    try{
        const {id}= req.params;
        const result = await userdata.findOne({_id : id});
        res.send(result);
    }catch(err){
        console.log(err);
    };
});

app.put('/updateuser/:id', async (req,res)=>{
    try{
        const {id} = req.params;
        const result = await userdata.findByIdAndUpdate(id, req.body);
        res.status(200).json({message: "user details updated!"});
    }catch(err){
        console.log(err);
    };
});

app.listen(port, () => {
    console.log(`server is running on port no ${port}`);
});