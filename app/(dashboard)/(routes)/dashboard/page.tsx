

import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { MessageSquare } from 'lucide-react'
import React from 'react'

const tools = [
  {
    label: "Coversation",
    icon: MessageSquare,
    color:"text-violet-500",
    bgColor: "bg-pink-500/10",
    href:"/conversation"
  }
]

const DashboardPage = () => {
  return (
    <div>
        <div className="mb-8 space-y-0">
          <h1 className="text-2xl md:text-4xl font-bold text-center ">
            Explore the Power of AI
          </h1>
              <p className="text-muted-foreground font-light text-sm md:text-xl text-center">
                Chat with the smartest Ai-Experience the Power of AI
              </p>
        </div>
        <div className="px-4 md:px-20 lg:px-32 space-y-4">
              {tools.map((tool)=> (
             <Card 
             key={tool.href}
             className='p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer '
             >
              <div className="">
                <div className={cn("",tool.bgColor)} >
                  <tool.icon className ={cn ("flex items-center flex-1", tool.color)} />

                </div>

              </div>
              </Card>
              ))}
        </div>
    </div>
  )
}

export default DashboardPage
