import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { ROLES_KEY } from "./auth.decorator";


@Injectable()
export class verifyRole implements CanActivate{
    constructor(private reflector:Reflector ){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        console.log("entramos al guardian del verificar roles");
        
        const requireRoles=this.reflector.get<String[]>(ROLES_KEY,context.getHandler());

        console.log(requireRoles);
        
        if(!requireRoles){
            return true;
        }
        const request=context.switchToHttp().getRequest();
        const user=request.user;

        if (!requireRoles.includes(user.role)) {
        throw new ForbiddenException('Insufficient permissions');
      }
  
      return true;

    }

}