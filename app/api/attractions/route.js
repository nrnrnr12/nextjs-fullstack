import { NextResponse } from "next/server";
import { mysqlPool } from "@/utils/db";

const db = mysqlPool.promise()

export async function GET(request) {
  try {
  const [rows, fields] = await promisePool.query(
    `SELECT * FROM attractions;`
  )
  return NextResponse.json(rows,{status: 200}) 
  } catch (error){
    return NextResponse.json({error:"Fail to fetch"},{status: 500})
  }
}
