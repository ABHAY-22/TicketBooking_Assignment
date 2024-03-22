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




  

    const protected = (req, res, next) => {
        try {
            const token = req.headers.authorization.split(" ")[1];
            console.log(token);
            jwt.verify(token, "abhay", async function(err, decode) {
                if (err || !decode) { 
                    console.log(err);
                    return res.status(401).send('Kindly login');
                }
                console.log(decode);
                const user_ID = await User.findOne({_id: decode.userID})
                req.u_ID = user_ID;
                next();
            });
        } catch (error) {
            console.log(error);
            res.status(401).send('Kindly login');
        }
    }
    
    



    app.get("/api/flights" , async(req , res)=>{
       
        try {
            const data = await Flight.find();
            res.status(200).send(data)
            
            console.log('data recived');
        } catch (error) {
            console.log(error)
        }
    })


   
    app.get("/api/flights" ,async(req , res)=>{
        
        try {

            const flightId = req.params.id;
            const data = await Flight.find(flightId);
            res.status(200).send(data)
            
            console.log('flight date');
        }    catch (error) {
            console.log(error)
        }
    })


    app.post('/api/flights', protected, async (req, res) => {


        try {
            const data = await Flight.create(req.body);
            res.status(201).send(data); 
            console.log('data posted: ', data);
        } catch (error) {
            console.error('Error posting data: ', error);
            res.status(500).send('Internal Server Error');
        }
    });


    
    
    app.put('/api/flights/',protected, async(req, res) => {
        try {
            const data = req.body;
           
            const update = await Flight.findById(req.params.id);



            if (!update) {
                return res.status(404).send('Flight not found');
            }
    


            update.airline = data.airline || update.airline;
            update.flightNo = data.flightNo || update.flightNo;
            update.departure = data.departure || update.departure;
            update.arrival = data.arrival || update.arrival;
            update.departureTime = data.departureTime || update.departureTime;
            update.arrivalTime = data.arrivalTime || update.arrivalTime;
            update.seats = data.seats || update.seats;
            update.price = data.price || update.price;
        

          const updatedFlight = await update.save();
            res.status(204).send(updatedFlight);
            console.log('Flight data updated');
        } catch (error) {
            console.error('Error updating flight data:', error); 
         
         res.status(500).send('Internal Server Error');
        }
    });


    app.delete('/api/flights/',protected, async(req, res) => {
        try {
            const data = await Flight.findByIdAndDelete(req.params.id);
            res.status(200).send(data);
            console.log('data deleted');
        } catch (error) {
            console.log(error + 'this error from delete fun')
        }
    });
   



//for booking and dasboard
















app.listen('8000' , ()=>{
    try {
        console.log('connection started');
    } catch (error) {
        console.log('error found  :',error)
    }
})