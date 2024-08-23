import { Order } from "src/order/entities/order.entity";
import { Product } from "src/product/entities/product.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("orderProducts")
export class OrderProduct {
    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(()=>Order,(order)=>order.orderProducts)
    order:Order;

    @ManyToOne(()=>Product,(product)=>product.orderProducts)
    products:Product;

    @Column()
    totalPrice:number;
}
