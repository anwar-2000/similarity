"use client"
import React from 'react'
import { Tabs, TabsList, TabsTrigger } from '@/ui/Tabs'
import { TabsContent } from '@radix-ui/react-tabs'
import SimpleBar from 'simplebar-react'
import Code from '@/components/ui/Code'
import { nodejs, python } from '@/helpers/documentationCode'

interface Props {}

const DocumentationTabs = () => {
  return <Tabs defaultValue='nodejs' className='max-w-2xl w-full'>
    <TabsList>
        <TabsTrigger value='nodejs'>NodeJs</TabsTrigger>
        <TabsTrigger value='python'>Python</TabsTrigger>
    </TabsList>
    <TabsContent value='nodejs'>
    <SimpleBar>
    <Code language='javascript' code={nodejs} show animated/>
    </SimpleBar> 
    </TabsContent>
    <TabsContent value='python'>
    <SimpleBar>
    <Code language='python' code={python} show animated/>
    </SimpleBar>
    </TabsContent>
  </Tabs>
}

export default DocumentationTabs