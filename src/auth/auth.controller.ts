import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
@Controller('auth')
export class authController{

constructor (private readonly authService:AuthService){}
@Post('signup')
async signUp(@Body() body:any){
    console.log(body);
// return await   this.authService.signUp(body);
}

@Post('signin')
async signIn(@Body() body:any){
    console.log(body);
return await   this.authService.signIn(body);
}
}