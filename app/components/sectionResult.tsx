import React from 'react'
import { Snippet } from '@nextui-org/react'
interface resultType {
  negative: string,
  positive: string
}
export default function SectionResult({negative, positive}: resultType) {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
    <Snippet className="text-white" color="default" variant="shadow" symbol='%' hideCopyButton>{negative}</Snippet>
    <Snippet className="text-white" color="primary" symbol='*' hideCopyButton>{positive}</Snippet>
    </div>
    </>
  )
}
