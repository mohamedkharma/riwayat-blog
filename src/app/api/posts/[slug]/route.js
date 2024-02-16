// Import the required modules
import Cors from 'micro-cors';
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// Initializing the cors middleware
const cors = Cors({
  allowedMethods: ['GET', 'POST'], // Add any other methods your API routes support
});

// GET SINGLE POST
export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    const post = await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

// Wrap your API routes with the CORS middleware
export default cors(async function handler(req, res) {
  if (req.method === 'GET') {
    return await GET(req, res);
  } else if (req.method === 'POST') {
    return await POST(req, res);
  } else {
    return new NextResponse(
      JSON.stringify({ message: "Method Not Allowed" }, { status: 405 })
    );
  }
});
