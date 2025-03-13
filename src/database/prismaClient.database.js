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

export const findUserJWT = async (id, email) => {
    const user = await prisma.user.findUnique({
        where: {
            id: id,
            email: email
        }
    })

    return user
}