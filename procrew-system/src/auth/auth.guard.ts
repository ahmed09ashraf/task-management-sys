import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization;

    if (!token) {
      return false; // No token provided, access denied
    }

    try {
      const decodedToken = this.jwtService.verify(token);
      request.user = decodedToken; // Set the decoded token on the request object for further use
      return true; // Authentication successful
    } catch (error) {
      return false; // Invalid token, access denied
    }
  }
}
