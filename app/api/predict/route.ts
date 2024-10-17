import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const formData = await request.json()
    try {
        const response = await fetch(
            `https://api.cloudflare.com/client/v4/accounts/991894ac6dd3102c990a84257eab2af5/ai/run/@cf/huggingface/distilbert-sst-2-int8`,
            {
              headers: { Authorization: "Bearer Hlkv5JGDFU3IOV8DeKZH1ltxhc5Q8Hih2z36oE5h" },
              method: "POST",
              body: JSON.stringify({text: `${formData}`}),
            }
          );
          
          const result = await response.json()
          return NextResponse.json({data: result})
    } catch (error) {
        console.log('Error at predict', error)
        return NextResponse.json({message: 'Error'}, {status: 401})
    }
}