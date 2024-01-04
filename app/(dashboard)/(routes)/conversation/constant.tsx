"use client"

import * as z from "zod"

export const formSchema = z.object({
    Prompt: z.string().min(2, {
      message: "Prompt must be at least 2 characters.",
    }),
  })
