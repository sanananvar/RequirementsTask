const express = require("express"),
    app = express(),
    bodyParser = require("body-parser")
const cors = require("cors")
const dotenv = require("dotenv")
let mongoose = require("mongoose")
app.use(bodyParser.json())
app.use(cors())
dotenv.config()

let RequirementSchema=new mongoose.Schema({
    title:String,
    description:String,
    country:String,
    image:String
})
let RequirementModel = mongoose.model("requirements",RequirementSchema)

mongoose.connect("mongodb+srv://sananaaaf206:senan2113@senan.27znz.mongodb.net/")
.then(()=>{
    console.log("connected");
    
})

app.get("/requirements",async(req,res)=>{
    let myRequirement=await RequirementModel.find()
    res.status(200).json(myRequirement)
})

app.delete("/requirements/:id",async(req,res)=>{
    let {id}=req.params
    await RequirementModel.findByIdAndDelete(id)
    res.send({
        maessage:"deleted"
    })
})

app.post("/requirements",async (req,res)=>{
    let newRequirement=RequirementModel(req.body)
    await newRequirement.save()
    res.send({
        message:"added",
        data:req.body
    })
})

app.listen(3001,()=>{
    console.log("salam qaqa");
})
