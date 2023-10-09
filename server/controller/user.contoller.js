const user = require("../model/user.model")

module.exports = {
findOne : async (req,res)=>{
    try {
        const result = await user.find({id:req.params.id})
        res.status(201).send(result)
    } catch (error) {
        throw new Error(error)
    }
},
findAll : async (req,res)=>{
    try {
        const result = await user.find()
        res.status(201).send(result)
    } catch (error) {
        
    }
},
create : async (req,res)=>{
    try {
        const result = await user.create(req.body)
        res.status(202).send(result)
    } catch (error) {
        throw new Error(error)
    }
},
deleted: async (req,res)=>{
    try {
        const productId = req.params.id;
        const result = await user.findByIdAndRemove(productId)
        res.status(204).send(result)
    } catch (error) {
        throw new Error(error)
    }
},
updated: async (req,res)=>{
    try {
        const productId = req.params.id;
        const updates= req.body
        const result = await user.findByIdAndUpdate(productId,updates)
        res.status(204).send(result)
    } catch (error) {
        throw new Error(error)
    }
},
}