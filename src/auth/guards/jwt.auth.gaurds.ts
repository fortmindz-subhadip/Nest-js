// src/auth/guards/jwt-auth.guard.ts
import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
    import { Reflector } from '@nestjs/core';
import { UsersService } from 'src/user/user.service';
    
  
  @Injectable()
  export class JwtAuthGuard implements CanActivate {
    constructor(
      private readonly jwtService: JwtService,
      private readonly usersService: UsersService,
      private readonly reflector: Reflector,
    ) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest();
  
      const token = this.extractTokenFromHeader(request);
      if (!token) {
        throw new UnauthorizedException('No token provided');
      }
  
      try {
        const payload = this.jwtService.verify(token, {
          secret: process.env.JWT_SECRET,
        });
  
        const user = await this.usersService.findById(payload.sub);
        if (!user) {
          throw new UnauthorizedException('Invalid user');
        }
  
        request.user = user; // Attach user object to request
      } catch (err) {
        throw new UnauthorizedException('Invalid token');
      }
  
      return true;
    }
  
    private extractTokenFromHeader(request: any): string | null {
      const authorization = request.headers['authorization'];
      if (!authorization) return null;
  
      const [type, token] = authorization.split(' ');
      return type === 'Bearer' ? token : null;
    }
  }
  