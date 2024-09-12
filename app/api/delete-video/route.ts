import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient()

export  async function DELETE(request: NextRequest) {
    const { id } = await request.json();
    try {
        const video = await prisma.video.delete({
            where: { id },
        });
        
        return NextResponse.json({ video }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Error deleting video" }, { status: 500 });
    }
}
