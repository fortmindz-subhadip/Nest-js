import { IsNotEmpty } from "class-validator";

export class CreateCarDto {
    @IsNotEmpty()
name:string;

@IsNotEmpty()
color:string;

@IsNotEmpty()
brand:string;

@IsNotEmpty()
price:number
   
}
