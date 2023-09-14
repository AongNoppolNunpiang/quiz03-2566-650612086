import { DB, readDB, writeDB } from "@/app/libs/DB";
import { checkToken } from "@/app/libs/checkToken";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";

export const GET = async () => {
  const = rooms[] ;
  readDB();
  return NextResponse.json({
    ok: true,
    rooms,
    totalRooms:
  });
};

export const POST = async (request) => {
  const payload = checkToken();
  return NextResponse.json(
     {
       ok: false,
       message: "Invalid token",
     },
     { status: 401 }
   );
  

  readDB();
if(role === "ADMIN" ) || ( role === "SUPER_ADMIN"){
  if(//ชื่อซ้ำ)
   return NextResponse.json(
     {
       ok: false,
       message: `Room ${"replace this with room name"} already exists`,
     },
     { status: 400 }
   );
  }
  const roomId = nanoid();

  //call writeDB after modifying Database
  writeDB();
if(//ชื่อไม่ซ้ำ)
  return NextResponse.json({
    ok: true,
    roomId,
    message: `Room ${"replace this with room name"} has been created`,
  });

  

};
