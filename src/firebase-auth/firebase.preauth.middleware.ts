import { Injectable, NestMiddleware } from "@nestjs/common";
import { Response, Request } from 'express';
import * as firebaseAdmin from 'firebase-admin';

@Injectable()
export class PreauthMiddleware implements NestMiddleware {
    private defaultApp: any;
    constructor() {
        this.defaultApp = firebaseAdmin;
    }

    async use(req: Request, res: Response, next: (error?: any) => void) {
        const { token } = req.headers;
        try {
            if (!token) {
                throw new Error('Token is invalid.');
            } 

            const decoded: firebaseAdmin.auth.DecodedIdToken = await this.defaultApp
                .auth()
                .verifyIdToken(token.toString());
            res.locals.user = decoded;
            next();
        } catch (error) {
            console.error(error);
            this.accessDenied(req.url, res);
        }
    }

    accessDenied(url: string, res: Response) {
        res.status(403).json({
            statusCode: 403,
            path: url,
            message: 'Access Denied.'
        })
    }
}