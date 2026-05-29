import express from 'express'

import * as productController from '../controllers/product.controller.js' 


const router = express.Router()

router.get('/api/movies', productController.getAllMovies)

router.get('/api/movies/:id', productController.getMovieById)
// //route Allproducts  
// router.get('/api/products', productController.getAllProducts);

// // route products for ID
// router.get('/api/products/:id', productController.getAllProductsById)

// // create product
// router.post('/api/products', productController.createProduct)

// // update product
// router.put('/api/products/:id', productController.updateProduct)

// // delete product

// router.delete('/api/products/:id', productController.deleteProduct)
export default router