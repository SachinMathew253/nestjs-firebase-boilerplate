import { FirestoreCollections } from "../../firestore/firestore-collections";
import { TradeIdea } from "@fundfolio/models/lib/trade-ideas/models";
import { CollectionReference } from '@google-cloud/firestore';
import { TradeIdeaRepositoryInterface } from "@interfaces";
import * as firebaseAdmin from 'firebase-admin';
import { Inject } from "@nestjs/common";

export class TradeIdeaRepository implements TradeIdeaRepositoryInterface {
    private firestore: firebaseAdmin.firestore.Firestore;
    private collection: string = 'trade-ideas';

    constructor(
        // injects base collection to 
        // @Inject(FirestoreCollections)
        // private tradeideaCollection: CollectionReference<TradeIdea>
    ) { 
        // this.tradeideaCollection.id = FirestoreCollections.TRADEIDEAS;
        this.firestore = firebaseAdmin.firestore();
    }

    async findOneById(id: string): Promise<TradeIdea> {
        try {
            const data = await this.firestore.collection(this.collection).doc(id).get();
            const tradeIdea: TradeIdea = new TradeIdea(data.data());
            return tradeIdea;
        } catch (error) {
            console.log(error);
            
        }
    }
    
}