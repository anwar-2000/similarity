import React from 'react'
import type { Metadata } from 'next'
import Heading from '@/components/ui/Heading'
import Paragraph from '@/components/ui/Paragraph'
import DocumentationTabs from '@/components/DocumentationTabs'
import 'simplebar-react/dist/simplebar.min.css'



interface Props {}
export const metadata : Metadata =  {
    title : "Similarity API | Docs",
    description : "Free and open source similarity API"
}
const page = () => {
  return <div className='container max-w-7xl mx-auto mt-12'>
        <div className='flex flex-col items-center gap-6'>
            <Heading>Making a request</Heading>
            <Paragraph>api/v1/similarity</Paragraph>

            <DocumentationTabs/>
        </div>
  </div>
}

export default page