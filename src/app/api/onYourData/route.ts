import { NextRequest, NextResponse } from "next/server";
import { getOnYourData } from '@/utils/openai'

export const POST = async (req: NextRequest) => {
    try {
        const { message } = await req.json()
        const result = await getOnYourData(message)

        const aiMessage = result[0].message.content

        return NextResponse.json({ aiMessage }, { status: 200 })
    } catch (error: any) {
        console.error(error)
        return NextResponse.json({ aiMessage:error.message}, { status: 500 })
    }
}