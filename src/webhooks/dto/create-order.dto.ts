import { IsString } from "class-validator";

export class CreateOrderDto {
    @IsString()
    readonly name: string;

    @IsString()
    readonly brand: string;
    
    @IsString()
    readonly flavour: string;
}
