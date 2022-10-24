import { Body, Controller, Get, HttpCode, HttpStatus, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { WebhooksService } from '../services';
import { CreateOrderDto, } from './dto';

@UsePipes(ValidationPipe)
@Controller('trade-executions')
export class WebhooksController {
    constructor(private readonly webhookService: WebhooksService) {

    }

    @Get('webhooks/v1/order-callback')
    @HttpCode(HttpStatus.ACCEPTED)
    async getTradeIdea() {
        // return body;
        // (createOrderDto);
        const data = await this.webhookService.getTradeIdeaById();
        console.log(data);
        
    }
}
