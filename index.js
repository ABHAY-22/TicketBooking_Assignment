const express = require("express");
const app = express();
app.use(express.json());
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const{connection , User , Flight,Booking}=require('./db')