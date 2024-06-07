import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({ //caps me hoga pehale letter hmm
    title:{
        type: String,
        require: [true, "please provide title"]
    },
    new_price: {
        type: Number,
        require: [true, "provide price"]
    },
    old_price: {
        type: Number
    },
    img_url: {
        type: String,
        require: [true, "provide image"]
    },
    sub_img: {
        type: Array,
    },
    stock: {
        type: Number
    }
})

const ProductDetail = mongoose.models.producttable || mongoose.model("producttable",ProductSchema)

export default ProductDetail