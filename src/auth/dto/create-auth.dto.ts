import { Injectable } from "@nestjs/common";
import { IsEmail, IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";

@Injectable()
export class CreateAuthDto {
    @IsNotEmpty()
    @IsInt()
    id:number;

    @IsEmail()
    email:string;

    @IsNotEmpty()
    @IsString()
    role:number;
}


