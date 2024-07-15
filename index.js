const express=require('express')
const mongoose=require('mongoose')
const path=require('path')
const bodyParser = require('body-parser');
const { constrainedMemory } = require('process');


const app=express();
app.use(bodyParser.urlencoded({extended:false}))
const port=process.env.PORT || 5500;
app.use(express.static(path.join(__dirname,'public')));

app.listen(port,()=>{
    console.log(`Server run at port number ${port}`)
})

mongoose.connect('mongodb+srv://aniketroy:quizapp@cluster0.qovzcs3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("MongoDB Connected.");
})
const Schema=mongoose.Schema;
const dataschema=new Schema({
    name:String
})
const data=mongoose.model("Names",dataschema);
app.post('/sent',(req,res)=>{
    const {name}=req.body;
    const newData=new data({
        name
    });
    newData.save()
    res.redirect('question.html')
})
