import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Role } from "./entities/role.entity";
import { Repository } from "typeorm";


@Injectable()
export class RoleService{
    constructor(@InjectRepository(Role) private RoleRepository:Repository<Role>){}

    async returnRole(id:number){
        const data=await this.RoleRepository.findOne({where:{id:id}});
        return data.name
    }
}