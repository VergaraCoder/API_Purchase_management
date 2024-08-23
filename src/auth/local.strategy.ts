import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";
import e from "express";
import { Injectable, UnauthorizedException } from "@nestjs/common";


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authService:AuthService){
        super({
            usernameField:"email",
            passwordField:"password"
        })
    }

    async validate(email:string,password2:string){
        console.log("entramos ");
        const data=await this.authService.findOne(email);
        if(data && data.password!==password2){
            throw new UnauthorizedException();
        }
        const {password,...results} =data;
        console.log("la data del usuario es ");
        console.log(data);
        
        console.log(results);
        
        
        return results;
    }
}