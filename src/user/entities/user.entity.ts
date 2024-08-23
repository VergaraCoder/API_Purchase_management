import { Order } from "src/order/entities/order.entity";
import { Role } from "src/role/entities/role.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id:Number;

    @Column()
    email:string;

    @Column({type:"varchar", length:8})
    password:string;

    @OneToOne(()=>Role)
    @JoinColumn()
    role:Role;

    @OneToMany(()=>Order,(order)=>order.userId)
    order:Order[];
}
