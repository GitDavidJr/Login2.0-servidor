import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const findUserEmail = async (email) => {
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    return user
}