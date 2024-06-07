import { connect } from "@/dbconfig/dbconfig";
import ProductDetail from "@/models/ProductCard";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

connect()
export async function POST(request: NextRequest){
   try {
        const reqbody = await request.json()
        const{
            productId
        } = reqbody 

        const product = await ProductDetail.findById(productId)

        return NextResponse.json({
            data: product
        })
    
   } catch (error: any) {
    return NextResponse.json({
        error: error.message
    },{
        status: 500
    })
   }
}