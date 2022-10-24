import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TradeIdeaRepository } from '../../repositories';
import { TradeIdea } from '@fundfolio/models/lib/trade-ideas/models';

@Injectable()
export class WebhooksService {
    
    constructor(
        @Inject(TradeIdeaRepository)
        private tradeIdeaRepository: TradeIdeaRepository,
    ) {}

    async getTradeIdeaById(id: string = '02mQaNXvaRxp0DuTYHf1'): Promise<TradeIdea> {
        const data: TradeIdea = await this.tradeIdeaRepository.findOneById(id);
        return data;

    }

    
}
