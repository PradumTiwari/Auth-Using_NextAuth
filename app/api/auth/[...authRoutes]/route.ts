import { NextRequest, NextResponse } from "next/server";

//this page is used for the catch routes of any endpoint api/auth/...anything
export function GET(req:NextRequest,arg:any){
    console.log(arg.params.authRoutes);
    return NextResponse.json({
        message:"Hii Pradum"
    })
}

export function POST(){
    return NextResponse.json({
        message:"Bye Pradum"
    })
}