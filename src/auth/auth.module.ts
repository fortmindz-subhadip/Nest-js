import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module'; // Import the user module for dependency injection
import { AuthService } from './auth.service';
import { authController } from './auth.controller';
import { JwtStrategy } from './jwt/strategies/jwt.strategies';

@Module({
  imports: [
    UserModule, // Dependency for accessing user data
    PassportModule.register({ defaultStrategy: 'jwt' }), // Passport configuration for JWT
    JwtModule.register({
      secret: process.env.JWT_SECRET, // Replace with your secret key or use environment variables
      signOptions: { expiresIn: '12h' }, // Token expiration time
    }),
  ],
  providers: [AuthService, JwtStrategy], // AuthService and JwtStrategy as providers
  exports: [AuthService], // Export AuthService for usage in other modules
  controllers: [authController], // Controllers for handling authentication routes
})
export class AuthModule {}
