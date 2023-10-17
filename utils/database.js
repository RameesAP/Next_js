import mongoose from "mongoose";

let isConnected = false //track connection status

export const connectToDB = async ()=>{
    mongoose.set("strictQuery",true)

    if (isConnected){
        console.log("MongoDB is already Connected");
        return
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:"share_Propmt",
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        isConnected=true
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(error);
    }
}