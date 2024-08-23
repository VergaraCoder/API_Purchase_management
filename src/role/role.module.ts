import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { UserModule } from 'src/user/user.module';


@Module({
  imports:[TypeOrmModule.forFeature([Role])],
  exports:[TypeOrmModule]
})
export class RoleModule {}
