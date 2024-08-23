import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { LocalAuthGuard } from './local.guard';
import { JwtGuard } from './jwt.guard';
import { RoleModule } from 'src/role/role.module';

@Module({
  imports:[UserModule,
    PassportModule,
    JwtModule.register({
      secret:process.env.SECRET || "jhonatan",
      signOptions:{
        expiresIn:'15m'
      }
    }),
    RoleModule
  ],
  controllers: [AuthController],
  providers: [AuthService,LocalStrategy,JwtStrategy,LocalAuthGuard,JwtGuard],
})
export class AuthModule {}
