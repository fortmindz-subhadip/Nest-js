import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/user/user.service';
@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,

    private readonly userService: UsersService,
  ) {}

  async signIn(body: any) {
    const user = await this.userService.registerUser(body);
    console.log(user);
    const payload = { username: user.name, sub: user._id }; // Payload with userId
    return {
      accessToken: await this.jwtService.sign(payload,{
        secret: process.env.JWT_SECRET
      }),
    };
  }
}
