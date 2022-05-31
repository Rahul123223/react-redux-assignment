const mongoose=require('mongoose');

const connect=()=>{
    return mongoose.connect('mongodb+srv://vaibhav:vaibhav@cluster0.bim0u.mongodb.net/ecommerce?retryWrites=true&w=majority')

}
module.exports=connect;