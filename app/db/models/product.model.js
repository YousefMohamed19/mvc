// schema
import { Schema, model } from 'mongoose'
const productSchema = new Schema({
    name: String,
    price: Number,
    description: String
}, { timestamps: true })
// model
export const Product = model('Product', productSchema)
