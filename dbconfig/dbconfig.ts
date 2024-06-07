import mongoose from "mongoose";

export async function connect(){
    try {

        mongoose.connect(process.env.DOMAIN_URI!)
        const connection = mongoose.connection
        connection.on('success',()=>{
            console.log("Database connected successfully")
        })
        connection.on('error', ()=>{
            console.log("Database connction error")
        })

    } catch (error){
        console.log("Database not connected 500", error)
        
    }
}