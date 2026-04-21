import jwt from 'jsonwebtoken';
const { SECRET_KEY } = require('../config');


class JWTUtil {
    static async generateToken(user) {
        const token = jwt.sign({ userId: user._id, email: user.email }, SECRET_KEY || 'secret_key', { expiresIn: '1h' });
        return token;
    }
    static async verifyToken(token:string) {
        return jwt.verify(token, SECRET_KEY || 'secret_key');
    }
}
    
export default  JWTUtil;