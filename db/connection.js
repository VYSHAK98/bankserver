const mongoose=require("mongoose")

mongoose.connect(process.env.BASE_URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("_______mongodb atlas connected________");
}).catch(()=>{
    console.log("______mongodb atlas not connected");
})