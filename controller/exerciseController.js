const Exer = require('../schema/exercise')


const create = async(req,res)=>{
    try{
        console.log(req.user)
    const {ExerciseId,ExerciseName,ExerciseLength} = req.body;
    const Exist = await Exer.findOne({ExerciseId})
    if(!Exist){
        const myuser = new Exer({
            postedby:req.user,  ExerciseId , ExerciseName ,ExerciseLength 
        })
        myuser.save().then(mydata=>{
            res.json({mydata:mydata})
        })
        
        return res.json(CreateData);
 
    }else{
        return res.status(500).json({
            success:false,
            msg:"Already Exist"
        })
    }
}

catch(err){
    console.log(err);
}
}

const edit = async(req,res)=>{
    try{
        const data =await Exer.findByIdAndUpdate(req.params._id,req.body)
        
            if(!data) return res.status(301).json({success:true,msg:"Something Wrong"})
            res.status(201).json({success:true,data});
        
    }catch(err){
        console.log(err);
    }
}

const deletedata = async(req,res)=>{
    Exer.findByIdAndRemove(req.params._id).then(mydata=>{
        if(!mydata){
            return res.status(404).json({
                success:false,
                msg:"not found"
            })
        }
        return res.status(200).json({
            success:true,
            msg:"delete Successfully"
        })
    })
}



const getAll = async(req,res)=>{
    try{
    Exer.find({}).populate("postedby","PorgramId ProgramName").then(data=>{
        if(!data){
            return res.status(301).json({
                success:false,
                msg:"Invalid"
            })
        }else{
            return res.status(201).json({
                success:true,
                data
            })
        }
    })
}
catch(err){
    console.log(err);
}
}













module.exports = {create,edit,deletedata,getAll}