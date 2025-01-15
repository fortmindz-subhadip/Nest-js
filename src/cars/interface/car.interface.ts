import { Document } from "mongoose";

export interface carInterFace extends Document {
    id: string;
    name: string;
    color: string;
    brand: string;
    price: number;
}