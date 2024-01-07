import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  console.log("hi");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("bye");

  // return Response.json(
  //   { message: "Hello Everyone!" },
  //   {
  //     status: 500,
  //   }
  // );
  return NextResponse.json(
    {
      message: "Hello Everyone!",
    },
    {
      status: 400,
      statusText: "fuckoff",
    }
  );
}
