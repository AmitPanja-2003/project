const mongoose = require('mongoose');
const connect = mongoose.connect('mongodb://0.0.0.0:27017/userdata');
connect.then(()=>{
    console.log('connect sucessfully');
}).catch(err=>{
    console.log(err);
})

//creating a schema

const loginSchema =({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
});

// creating  to collection
const collection = new mongoose.model("user",loginSchema);
module.exports = collection;

