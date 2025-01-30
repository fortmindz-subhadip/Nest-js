import { Document } from "mongoose";

export interface userInterface extends Document {
    id: string;
    name: string;
   email: string;
   password: string;
   role: string;
}