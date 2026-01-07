import { PrismaClient } from "@prisma/client";
import { error } from "console";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"


const prisma = new PrismaClient()

export async function POST(request: Request) {
    try{
        const body = await request.json();

        const {name, email, password} = body;

        if(!name || !email || !password){
            return NextResponse.json({
                error: "Dados obrigatorios faltando"
            }, {status: 400})
        }

        const existingEmail = prisma.user.findUnique({
            where: {email,}
        })

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds)


    }catch (error) {
        return NextResponse.json()
    }
}