import { OrderProduct } from "src/order-products/entities/order-product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity("products")
export class Product {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    price:number;

    @Column()
    description:string;

    @OneToMany(()=>OrderProduct,(orderProduct)=>orderProduct.products)
    orderProducts:OrderProduct[];
}
