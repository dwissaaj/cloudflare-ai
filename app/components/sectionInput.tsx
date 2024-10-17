'use client'
import React, { useState } from 'react'
import { Textarea, Button, Progress } from "@nextui-org/react";
import SectionResult from './sectionResult';

export default function SectionInput() {
    const [text, setText] = useState('')
    const [loading, setLoading] = useState(false)
    const [submitButton, setSubmitButton] = useState(true)
    const [data, setData] = useState();
    const submit =  async () => {
        console.log('Data', text)
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
                const data = await response.json();
                setData(data)
                console.log('here reponse', response)
                console.log('here data', data)
            }
            
        } catch (error) {
            setLoading(false)
            console.log(error)
        } finally {
            setLoading(false)
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
            {data?.data?.result?.map(e => (
                <p>{e.label} {e.score}</p>
            ))}
           
        </div>
        <div>
            {/* <SectionResult negative={data} positive={data} /> */}
        </div>
        </>
        
    )
}
