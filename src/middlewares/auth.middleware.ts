import JWTUtil from "../utils/jwtUtil";
import { errorMessage } from "../constants/error.constants";
import { HttpCode } from "../exceptions/AppError";
import { NextFunction, Request, Response } from "express";

interface AuthRequest extends Request {
  userData?: {
    userId: string;
    email: string;
  };
}

class Middleware {
  async authenticate(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) {
        return res
          .status(HttpCode.UNAUTHORIZED)
          .json({ message: errorMessage.INVALID_FORGOT_TOKEN });
      }

      const decodedToken: any = await JWTUtil.verifyToken(token);
      req.userData = { userId: decodedToken.userId, email: decodedToken.email };
      next();
    } catch (error) {
      return res
        .status(HttpCode.UNAUTHORIZED)
        .json({ message: errorMessage.INVALID_TOKEN });
    }
  }
}

export default new Middleware();
