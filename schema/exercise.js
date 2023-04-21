const mongoose = require('mongoose'); 
const {ObjectId}  = mongoose.Types
var userSchema = new mongoose.Schema({
    ExerciseId:{
        type:String,
        required:true,
        
    },
    ExerciseName:{
        type:String,
        required:true,
       
    },
    ExerciseLength:{
        type:Number,
        required:true,
       
    },
    postedby:{
        type:ObjectId,
        ref:"fitness"
    }
});


module.exports = mongoose.model('exercise', userSchema);