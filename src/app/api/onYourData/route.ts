import { NextRequest, NextResponse } from "next/server";
import { getOnYourData } from '@/utils/openai'

export const POST = async (req: NextRequest) => {
    try {
        const { message } = await req.json()
        const result = await getOnYourData(message)

        if (!result || result.length === 0 || !result[0]?.message?.content) {
            return NextResponse.json({ aiMessage: 'No response from AI' }, { status: 500 })
        }

        const aiMessage = result[0].message.content

        return NextResponse.json({ aiMessage }, { status: 200 })
    } catch (error: unknown) {
        console.error(error)
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
        return NextResponse.json({ aiMessage: errorMessage }, { status: 500 })
    }
}