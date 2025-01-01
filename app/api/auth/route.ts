import { NextRequest, NextResponse } from "next/server"

export function GET(req:NextRequest,arg:any){
  
    
    return NextResponse.json({
        message:"Ek piche"
    })
}