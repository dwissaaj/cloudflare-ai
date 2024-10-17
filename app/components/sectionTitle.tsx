import React from 'react'
import { Link } from "@nextui-org/react";

export default function SectionTitle() {
    return (
        <>
            <div className='flex flex-col gap-2'>
                <p className="text-5xl font-quantico ">AI Sentiment <span className='text-primary'>
                Analysis</span></p>
                <p>Deployed on <Link color='secondary' className=' font-quantico' isExternal isBlock underline='hover' href='https://developers.cloudflare.com/workers-ai/get-started/rest-api/'>Cloudflare</Link> Pages and their Worker AI, run by Serverless GPU in global network with latest model
                </p>
            </div>
            
        </>
    )
}
