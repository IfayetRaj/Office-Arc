import { verifyToken } from "@/lib/auth";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const token = await req.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 200 });
    }
    const decoded = verifyToken(token);

    return NextResponse.json(
      {
        user: {
          id: decoded.id,
          role: decoded.role,
          firstName: decoded.firstName ,
          lastName: decoded.lastName ,
          email: decoded.email || "",
        },
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 200 });
  }
};
