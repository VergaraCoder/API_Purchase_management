import { forwardRef, Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { UserModule } from 'src/user/user.module';
import { OrderProductsModule } from 'src/order-products/order-products.module';

@Module({
  imports:[TypeOrmModule.forFeature([Order]),forwardRef(()=>UserModule),forwardRef(() => OrderProductsModule),],
  controllers: [OrderController],
  providers: [OrderService],
  exports:[TypeOrmModule]
})
export class OrderModule {}
