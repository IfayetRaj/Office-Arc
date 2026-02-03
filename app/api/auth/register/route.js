import { User } from "@/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";

export const POST = async (req) => {
  try {
    await connectDB();
    const { firstName, lastName, email, phoneNumber, password } =
      await req.json();

    if (!firstName || !lastName || !email || !phoneNumber || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // checking user exist or not
    const existUser = await User.findOne({ email });
    if (existUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    // hashing password
    const hashedPassword = await bcrypt.hash(password, 10);
    // saving user to database
    const user = await User.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      password: hashedPassword,
      role: "user",
    });
    return NextResponse.json(
      { message: "User registered successfully", },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Internal Server Error", error: err.message },
      { status: 500 }
    );
  }
};
