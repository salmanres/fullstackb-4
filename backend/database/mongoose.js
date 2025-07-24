const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://zebsoft:KO1yATRwKBt4sJ1y@zebsoft.iyoy4go.mongodb.net/bbd4').then(()=>{
    console.log('database connected');
});