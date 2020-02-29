const mongoose = require('mongoose');
const schema = mongoose.Schema;
const userSchema = new schema({
    contact:{type:String , required:true},
    userName:{type:String},
    imgID:{type:String , default:''},
    imgUrl:{type:String , default:''},
    Token:{type:Number},
    status:{type:Boolean }
})

module.exports = mongoose.model('user', userSchema);