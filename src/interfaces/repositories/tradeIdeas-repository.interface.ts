import { TradeIdea } from "@fundfolio/models/lib/trade-ideas/models";

export interface TradeIdeaRepositoryInterface {
    findOneById(id: string): Promise<TradeIdea>
}
