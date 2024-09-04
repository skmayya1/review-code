
import { NextResponse } from "next/server"
import { auth } from "../../../auth"
import prisma from "../../../lib/prisma"

export async function GET(req, res){
   return NextResponse.json({message: "Hello World"})
}