import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private userService:UserService,private jwtService:JwtService){}

  createToken(createAuthDto: CreateAuthDto) {
    return {
      access_token:this.jwtService.sign(createAuthDto)}
  }

  findAll() {
    return `This action returns all auth`;
  }

  async findOne(email:string) {
    const data=await this.userService.validateUser(email);
    return data;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
