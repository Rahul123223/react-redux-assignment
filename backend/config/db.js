const mongoose=require('mongoose');

const connect=()=>{
    return mongoose.connect('mongodb+srv://rahul:garud@cluster0.1ty3c.mongodb.net/test?retryWrites=true&w=majority')
}
module.exports=connect;

