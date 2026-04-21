import JWTUtil from '../utils/jwtUtil';
import { errorMessage } from '../constants/error.constants';
import { HttpCode } from '../exceptions/AppError';
import { Request, Response } from "express";

class Middleware {
    async authenticate(req: { headers: { authorization: string; }; userData: { userId: any; email: any; }; }, res:Response, next: () => void) {
        try {
            const token = req.headers.authorization?.split(" ")[1];
            if (!token) {
                return res.status(HttpCode.UNAUTHORIZED).json({ message: errorMessage.INVALID_FORGOT_TOKEN });
            }

            const decodedToken = await JWTUtil.verifyToken(token);
            req.userData = { userId: decodedToken.userId, email: decodedToken.email };
            next();
        } catch (error) {
            return res.status(HttpCode.UNAUTHORIZED).json({ message: errorMessage.INVALID_TOKEN });
        }
    }
}

export default new Middleware();