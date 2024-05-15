const mongoose = require('mongoose');
const connect = mongoose.connect('mongodb+srv://amit:amit123@cluster0.w8nn4gk.mongodb.net/Users?retryWrites=true&w=majority&appName=Cluster0');
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
const collection = new mongoose.model("ip",loginSchema);
module.exports = collection;

