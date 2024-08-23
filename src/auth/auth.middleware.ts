import { Injectable, NestMiddleware } from '@nestjs/common';
import {NextFunction, Request} from 'express';
import { RoleService } from 'src/role/role.service';

// @Injectable()
// export class AuthMiddleware implements NestMiddleware {
//   constructor(private roleService:RoleService){}
//   async use(req: Request, res:Response, next:NextFunction) {
//     const name=await this.roleService.returnRole();
//   }
// }
