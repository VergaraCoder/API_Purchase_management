import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderProduct } from './entities/order-product.entity';
import { ProductModule } from 'src/product/product.module';
import { OrderModule } from 'src/order/order.module';

@Module({
  imports:[TypeOrmModule.forFeature([OrderProduct]),forwardRef(() => ProductModule),
  forwardRef(() => OrderModule)],
  exports:[TypeOrmModule]
})
export class OrderProductsModule {}
