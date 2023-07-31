import express from 'express'
import { getProduct } from '../Controller/productC.js'

const router = express.Router()


router.get('/', getProduct  )


export default  router