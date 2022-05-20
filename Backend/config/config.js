const mongoose=require('mongoose');

const connect=()=>{
    return mongoose.connect('mongodb+srv://rahul:garud@cluster0.mp3jd.mongodb.net/?retryWrites=true&w=majority')

}
module.exports=connect;