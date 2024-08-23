import { forwardRef, Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { OrderProductsModule } from 'src/order-products/order-products.module';

@Module({
  imports:[TypeOrmModule.forFeature([Product]),forwardRef(() => OrderProductsModule),],
  controllers: [ProductController],
  providers: [ProductService],
  exports:[TypeOrmModule]
})
export class ProductModule {}
