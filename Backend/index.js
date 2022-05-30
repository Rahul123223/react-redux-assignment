const express =require('express');
const app=express();
const cors=require('cors');

app.use(cors());
app.use(express.json());
const connect=require('./config/config');
// const razorController=require('./controller/razorpay.controller');
const productController=require('./controller/product.controller');
const cartController=require('./controller/cart.controller');
const {login,register}=require('./controller/auth.controller');


//so here we can use directly post method for the login and register instead of using middleware
app.post('/register',register);
app.post('/login',login);



 
// app.use('/razor',razorController);
app.use('/products',productController);
app.use('/cart',cartController);

app.get('/',(req,res)=>{
    return res.send("Welcome to the backend");
})

app.listen(5000,async ()=>{
    await connect();
    console.log("Listening port 5000");
})