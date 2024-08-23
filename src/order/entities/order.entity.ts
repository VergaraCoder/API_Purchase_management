import { OrderProduct } from "src/order-products/entities/order-product.entity";
import { Product } from "src/product/entities/product.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("orders")
export class Order {
    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(()=>User,(user)=>user.order)
    userId:User;

    @OneToMany(()=>OrderProduct,(orderProduct)=>orderProduct.order)
    orderProducts:OrderProduct[];
}
