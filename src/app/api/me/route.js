import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "noppol nunpiang",
    studentId: "650612086",
  });
};
