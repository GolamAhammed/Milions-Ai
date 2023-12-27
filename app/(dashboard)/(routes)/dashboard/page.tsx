"use client"

import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ArrowRight, CodeIcon, Image, MessageSquare, Music, VideoIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const tools = [
  {
    label: "Coversation",
    icon: MessageSquare,
    color:"text-violet-500",
    bgColor: "bg-violet-700/10",
    href:"/conversation"
  },

  {
    label: "Image Generation",
    icon: Image,
    color:"text-pink-700",
    bgColor: "bg-pink-500/10",
    href:"/image"
  },
  {
    label: "Video Genaration",
    icon: VideoIcon,
    color:"text-orange-500",
    bgColor: "bg-orange-500/10",
    href:"/video"
  },

  {
    label: "Music Genaration",
    icon: Music,
    color:"text-green-500",
    bgColor: "bg-green-500/10",
    href:"/music"
  },

  {
    label: "Code Genaration",
    icon: CodeIcon,
    color:"text-green-500",
    bgColor: "bg-green-500/10",
    href:"/code"
  }
]

const DashboardPage = () => {
  const router =useRouter();
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
        <div className="px-4 md:px-20 lg:px-32 space-y-4 ">
              {tools.map((tool)=> (
             <Card 
             onClick={()=> router.push(tool.href)}
             key={tool.href}
             className='bg-inherit p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer '
             >
              <div className=" flex items-center gap-x-4 ">
                <div className={cn("p-2 w-fit rounded-md",tool.bgColor)} >
                  <tool.icon className ={cn ("w-8 h-8", tool.color)} />

                </div>
                  <div className= "font-semibold">
                    {tool.label}
                  </div>
              </div>
              <ArrowRight className="w-5 h-5" />
              </Card>
              ))}
        </div>
    </div>
  )
}

export default DashboardPage
