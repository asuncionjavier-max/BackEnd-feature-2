import prisma, { Prisma} from "../config/prismaClient.js";

export const showBooks = async() =>{
    const books = await prisma.books.findMany()
}