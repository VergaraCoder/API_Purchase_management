import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderModule } from 'src/order/order.module';
import { RoleModule } from 'src/role/role.module';
import { User } from './entities/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User]),forwardRef(()=>OrderModule),RoleModule],
  controllers: [UserController],
  providers: [UserService],
  exports:[TypeOrmModule,UserService]
})
export class UserModule {}
