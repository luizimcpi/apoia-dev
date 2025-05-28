"use server"

import { prisma } from "@/lib/prisma"
import { z } from 'zod'

const infoUserSchema = z.object({
  username: z.string({ message: "O username é obrigatório" })
})

type InfoUsernameSchema = z.infer<typeof infoUserSchema>

export async function getInfoUser(data: InfoUsernameSchema) {

  const schema = infoUserSchema.safeParse(data)

  if (!schema.success) {
    return null
  }

  try {

    const user = await prisma.user.findUnique({
      where: {
        username: data.username
      },
    })

    return user;

  } catch (err) {
    return null
  }

} 