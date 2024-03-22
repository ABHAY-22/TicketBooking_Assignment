const mongoose = require("mongoose");
const connection = mongoose.connect(`mongodb+srv://abhayera2013:Abhay123@cluster0.gdyvizs.mongodb.net/AirTicketBooking`);

const{Schema}=mongoose;

const ObjectId = Schema.Types.ObjectId;

const userSchema = mongoose.Schema({
    name:{type:String , required:true},
    email:{type:String , required:true},
    password:{type:String , required:true},
  
})


const Flight_Schema = mongoose.Schema({
    airline:{type:String , required:true},
    flightNo:{type:String , required:true},
    departure:{type:String , required:true},
    arrival:{type:String , required:true},
    departureTime:{type:Date, required:true} ,
    arrivalTime: {type:Date, required:true} ,
    seats: {type:Number, required:true} ,
    price: {type:Number, required:true} ,

})


const Booking_Schema = mongoose.Schema({
    title:{type:String , required:true},
    user:{type: ObjectId ,ref: 'User', required:true},
    flight:{type:ObjectId ,ref: 'Flight', required:true}
})

const User = mongoose.model("User" , userSchema);
const Flight = mongoose.model("Flight" , Flight_Schema);
const Booking = mongoose.model("Booking" , Booking_Schema);


module.exports = {connection , User , Flight,Booking };