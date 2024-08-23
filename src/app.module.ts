import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { RoleModule } from './role/role.module';
import { OrderProductsModule } from './order-products/order-products.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import dbConnection from './config/db.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule, OrderModule, ProductModule, RoleModule, OrderProductsModule, AuthModule,
    TypeOrmModule.forRootAsync({
      useFactory:dbConnection
    }),
    ConfigModule.forRoot({
      isGlobal:true,
      load:[dbConnection]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
