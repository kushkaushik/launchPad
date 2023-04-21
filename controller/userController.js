const Fitness = require('../schema/fitness')

const KEY = process.env.KEY;
const token = require('jsonwebtoken')

const create = async(req,res)=>{
    try{
    const PorgramId = req.body.PorgramId;
    const Exist = await Fitness.findOne({PorgramId})
    if(!Exist){
        const CreateData = await Fitness.create(req.body)
        const tok = token.sign({_id:CreateData?._id},KEY);
        const {_id , PorgramId,ProgramName}  = CreateData
        return res.json({tok,app:{_id, PorgramId , ProgramName}});
 
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
        const data =await Fitness.findByIdAndUpdate(req.params._id,req.body)
        
            if(!data) return res.status(301).json({success:true,msg:"Something Wrong"})
            res.status(201).json({success:true,data});
        
    }catch(err){
        console.log(err);
    }
}

const deletedata = async(req,res)=>{
    Fitness.findByIdAndRemove(req.params._id).then(mydata=>{
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
    Fitness.find().then(data=>{
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
