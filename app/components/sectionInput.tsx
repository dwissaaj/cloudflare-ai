'use client'
import React, { useState } from 'react'
import { Textarea, Button, Progress, Snippet } from "@nextui-org/react";
import SectionResult from './sectionResult';
import { useRouter } from 'next/navigation';
interface ResponseItem {
    label: string;
    score: number;
  }

interface ApiResponse {
    data: {
        result: ResponseItem[];
        success: boolean;
        error: string[];
        message: string[]
    }
}
  
export default function SectionInput() {
    const router = useRouter()
    const [text, setText] = useState('')
    const [loading, setLoading] = useState(false)
    const [submitButton, setSubmitButton] = useState(true)
    const [responseData, setresponseData] = useState<ApiResponse | null>(null);
    const submit =  async () => {
        
        try {
            setLoading(true)
            const response = await fetch('/api/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ text })
            })
            if(response) {
                const data : ApiResponse = await response.json();
                setresponseData(data)
                router.refresh();
            }
            
        } catch (error) {
            setLoading(false)
            console.log(error)
        } finally {
            setLoading(false)
            // setSubmitButton(true)
        }
    }
    return (
        <>
        <div className='flex flex-col gap-2'>
            <Textarea  value={text} variant="bordered" label='Type it in here' onChange={(e) => {
                setText(e.target.value);
                setSubmitButton(false)
            }} placeholder="Sentence" size='lg' />
            <Progress color="primary" isIndeterminate={loading} aria-label="loading" size="sm" />
            <Button isDisabled={submitButton} onPress={submit} className='text-white font-bold' variant="shadow" color="primary"> Predict</Button>
            
           
        </div>
        <div>
        {responseData?.data?.result?.map(e => (
                <Snippet className='flex flex-row gap-4 mt-2 w-full'>
                    <span>{e.label} {e.score}</span>
                </Snippet>
            ))}
        </div>
        </>
        
    )
}
