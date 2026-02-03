import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";
import  {Product}  from "@/models/productModel";



// POST ROUTE
export const POST = async (req) => {
  try {
    // connect to database
    await connectDB();
    // get data from request body
    const {
      name,
      category,
      images,
      size,
      color,
      dimension,
      price,
      description,
    } = await req.json();
    // validate the data
    if (
      !name ||
      !category ||
      !images?.length ||
      !size?.length ||
      !color?.length ||
      !dimension?.length ||
      !price?.length ||
      !description
    ) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }
    // create new product
    await Product.create({
      name,
      category,
      images,
      size,
      color,
      dimension,
      price,
      description,
    });
    // return success response
    return NextResponse.json(
      { message: "Product created successfully" },
      { status: 201 }
    );
  } catch (err) {
    // return error response
    return NextResponse.json(
      { message: "Internal Server Error", error: err.message },
      { status: 500 }
    );
  }
};




// GET ROUTE

export const GET = async () =>{
    try{
        await connectDB();
        const products = await Product.find({});;
        return NextResponse.json({ products }, { status: 200 });

    }catch(err){
        return NextResponse.json(
            { message: "Internal Server Error", error: err.message },
            { status: 500 }
          );
    }
}