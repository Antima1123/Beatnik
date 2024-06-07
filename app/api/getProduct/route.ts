import { connect } from "@/dbconfig/dbconfig";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import ProductDetail from "@/models/ProductCard";
connect()

export async function POST(){
    try {
        
        const product =  await ProductDetail.find()
        return NextResponse.json({
            data: product
        })
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
        
    }
}