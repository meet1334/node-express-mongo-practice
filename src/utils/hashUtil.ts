import bcrypt from "bcrypt";

class HashUtil {
  static async hashPassword(password:string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }

  static async comparePassword(password:string, hash:string): Promise<boolean>  {
    return await bcrypt.compare(password, hash);
  }
}

export default HashUtil;