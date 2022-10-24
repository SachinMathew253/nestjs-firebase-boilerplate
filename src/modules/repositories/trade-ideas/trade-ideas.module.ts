import { Module } from '@nestjs/common';
import { TradeIdeaRepository } from '../../../repositories/tradeIdeas/tradeIdea.repository';
import { FirestoreCollections } from '../../../firestore/firestore-collections';

@Module({
    imports: [FirestoreCollections,],
    providers: [TradeIdeaRepository, FirestoreCollections],
    exports: [TradeIdeaRepository,],
})
export class TradeIdeasRepositoryModule {}
