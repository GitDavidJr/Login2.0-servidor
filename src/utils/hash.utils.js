import bcrypt from "bcrypt"

const saltRounds = 10;

//console.log( await bcrypt.hash("david1234", saltRounds))

export const comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash)
}