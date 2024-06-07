import mongoose from "mongoose";
import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import ProductDetail from "@/models/ProductCard";

connect()

export async function POST(request: NextRequest){//tumhara request ek variable hai jiska type NextRequest hai, jo v data ayega wo request me ayega
    try {

        const reqbody = await request.json();
        const {
            _id,
            title,
            new_price,
            old_price,
            img_url,
            sub_img,
            stock

        } = reqbody;

        const product = new ProductDetail({
            _id,
            title,
            new_price,
            old_price,
            img_url,
            sub_img,
            stock
        })
        await product.save();

        return NextResponse.json({
            success: true,
            message: "One Product Added successfully",
            product
        })

        
    } catch (error: any) {
        
        return NextResponse.json({error: error.message}, {status: 500})
        
    }
}