import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LocalAuthGuard } from './local.guard';
import { JwtGuard } from './jwt.guard';
import { AuthInterceptor } from './auth.interceptor';
import { Roles } from './auth.decorator';
import { verifyRole } from './role.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("token")
  @UseGuards(LocalAuthGuard)
  generateToken(@Req() {user} ) {
    return this.authService.createToken(user);
  }

  @Get()
  @UseGuards(JwtGuard)
  @Roles("admin")
  findAll() {
    return "Entraste melo";
  }

  @Post("hola")
  @UseGuards(verifyRole)
  @UseGuards(JwtGuard)
  @Roles("admin")
  hola(){
    return "entro";
  }
}
