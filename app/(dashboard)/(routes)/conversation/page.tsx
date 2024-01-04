"use client"

import Heading from '@/components/heading'
import { MessageSquare } from 'lucide-react'
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,


} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { formSchema } from './constant'



const ConversationPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Prompt: "",
    },
  })

  const isLoading = form.formState.isSubmitting

  const onSubmit =(values: z.infer<typeof formSchema>) =>{
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  };

  return (
    <div >
       <Heading 
       title='Conversation'
       description='our best value AI model'
       icon={MessageSquare}
       iconColor='text-violet-500'
       bgColor='bg-violet-500/10'
       />
       <div className= "px-4 lg:px-8">
       <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} 
      className="rounded-lg border w-full
      p-4 px-3 md:px-6 focus-within:shadow-sm  
      grid grid-cols-12 gap-2 ">
        <FormField
          control={form.control}
          name="Prompt"
          render={({ field }) => (
            <FormItem className="col-span-12 lg:col-span-10">
              
              <FormControl className='m-0 p-0'>
                <Input className='border-0 outline-none 
                focus-visible:ring-0 
                focus-visible:ring-transparent '
                 placeholder="Enter your prompt here..." {...field} 
                 disabled={isLoading}
                 />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <Button type="submit" 
        className='col-span-12 lg:col-span-2 w-full ' 
        disabled={isLoading}> Send Message </Button>
      </form>
    </Form>
    <div className="space-y-4 mt-4">
        Previous
       </div>
       </div>
      
    </div>
  )
}

export default ConversationPage