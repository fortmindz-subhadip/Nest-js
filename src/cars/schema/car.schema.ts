import * as mongoose from 'mongoose';

// Define the schema
  export const CarSchema = new mongoose.Schema({
    name: { type: String, required: true },
    color: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
});


  
 