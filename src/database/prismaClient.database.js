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

export const createUser = async (name, email, gitHub, password_hash) => {
    const user = await prisma.user.create({
        data: {
            name: name,
            email: email,
            gitHub: gitHub,
            password_hash: password_hash
        }
    })
}