import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        trim: true
    },
    category:{
        type: String,
        require: true,
        trim: true
    },
    images:[
        {
            type: String,
            require: true
        }
    ],
    size: [{
        type: String,
        require: true
    }],
    color: [
        {
            type: String,
            require: true
        }
    ],
    dimension: [
        {
            type: String,
            require: true
        }
    ],
    price: [
        {
            type: Number,
            require: true
        }
    ],
    description: {
        type: String,
        require: true,
        trim: true
    }
}, { timestamps: true });

export const Product = mongoose.models.Product || mongoose.model("Product", productSchema);