import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretOrKey:process.env.SECRET || "jhonatan"
        });
    }

    async validate(data:any){
        console.log("entramos al guardian y la data es ");
        console.log(data);
        
        
        return {id:data.id, email:data.email,role:data.role};
    }
}