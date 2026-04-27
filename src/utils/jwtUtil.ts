import jwt from 'jsonwebtoken';
import { JWT_EXPIRY,SECRET_KEY } from '../config';



class JWTUtil {
    static async generateToken(user:any) {
        const token = jwt.sign({ userId: user._id, email: user.email }, SECRET_KEY || 'secret_key', { expiresIn: (JWT_EXPIRY || '1h') as jwt.SignOptions['expiresIn'] });
        return token;
    }
    static async verifyToken(token:string) {
        return jwt.verify(token, SECRET_KEY || 'secret_key');
    }
}
    
export default  JWTUtil;