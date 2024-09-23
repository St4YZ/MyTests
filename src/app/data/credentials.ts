import { Credentials } from '../interfaces/Credentials'

export const standardUser: Credentials = {
    userEmail: `${process.env.EMAIL}`,
    userPassword: `${process.env.PASSWORD}`
}