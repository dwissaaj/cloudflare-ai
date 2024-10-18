import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const formData = await request.json()

    try {
        const response = await fetch(
            `${process.env.NEXT_MODEL_AI}`,
            {
              headers: { Authorization: `Bearer ${process.env.NEXT_API_CLOUDFLARE}` },
              method: "POST",
              body: JSON.stringify(formData),
            }
          );
          
          const result = await response.json()
          return NextResponse.json({data: result})
    } catch (error) {
        console.log('Error at predict', error)
        return NextResponse.json({message: 'Error'}, {status: 401})
    }
}