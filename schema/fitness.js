const mongoose = require('mongoose'); 


var userSchema = new mongoose.Schema({
    PorgramId:{
        type:String,
        required:true,
        unique:true,
      
    },
    ProgramName:{
        type:String,
        required:true,
       
    },
    
});


module.exports = mongoose.model('fitness', userSchema);
