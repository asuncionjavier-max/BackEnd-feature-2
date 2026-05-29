import * as booksservice from "../src/service/book.service.js"

export const Allbooks = async (req,res,next) => {
     const books = await booksservice.showBooks()
    return res.status(200).json({
        ok:true,
        data:books,
    })
}