const express = require("express");
const app = express();
app.use(express.json());
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

const{connection , User ,Flight,Booking}=require('./db')

app.post("/api/register" , async(req , res)=>{
    try {
    const user = req.body;
        const hashed = user.password;
        bcrypt.hash(hashed, 6 ,async function(err , hash){
            if(err){
                res.send('something went wrong    ' , err);
            }else{
                await User.create({name:user.name , email:user.email , password:hash });
                res.status(201).send(req.body);
                console.log(hash);
            }
        });
}
catch (error) {
        console.log(error);
    }
});


app.post("/api/login" , async(req , res)=>{
    try {
        const data=req.body;
        const email = data.email;
        console.log(data)
        const user = await User.findOne({email});
        console.log(email)
        console.log(user)
        const hashed = user.password;
        bcrypt.compare(data.password, hashed, function(err, result){
            if(result === true){
                const token = jwt.sign({userID : user._id} , "abhay");
                console.log(token)
                res.status(201).send({message:'you are loged in' , token:token});
                console.log(token);
            }else{
                res.status(401).send('user not found error ');
                console.log("this error from login" ,err)
            }
        });
    } 
    catch (error) {
        console.log(error);    
    }
    })






app.listen('8000' , ()=>{
    try {
        console.log('connection started');
    } catch (error) {
        console.log('error found  :',error)
    }
})