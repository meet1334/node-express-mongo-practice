import express, { Request, Response } from 'express';
const router = express.Router();
import { User } from '../models/user.model';
import HashUtil from '../utils/hashUtil';
import JWTUtil from '../utils/jwtUtil';
import { successMessage } from '../constants/success.constants';
import { errorMessage } from '../constants/error.constants';
import { HttpCode } from '../exceptions/AppError';
import { createUserSchema } from '../validations/user.validation';
import { validationMiddleware } from '../middlewares/validation.middleware';

router.post('/signup', validationMiddleware(createUserSchema), async (req: Request, res: Response) => {
  const { email, password, first_name, last_name, username } = req.body;
  const hashedPassword = await HashUtil.hashPassword(password);
  try {
    // const user = new User({
    //   email,
    //   password: hashedPassword,
    //   first_name,
    //   last_name,
    //   username,
    // });

    const user = await User.create({
      email,
      password: hashedPassword,
      first_name,
      last_name,
      username,
    });

    res.status(HttpCode.CREATED).json({
      message: successMessage.USER_CREATE,
      data: user,
    });
  } catch (error) {
    res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ message: errorMessage.ERROR_CREATE_USER, error });
  }
});

router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(HttpCode.UNAUTHORIZED).json({ message: errorMessage.INVALID_EMAIL_PASSWORD });
    }

    const isPasswordValid = await HashUtil.comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(HttpCode.UNAUTHORIZED).json({ message: errorMessage.INVALID_EMAIL_PASSWORD });
    }

    const token = await JWTUtil.generateToken(user);
    let resdata = { id: user._id, token };
    return res.status(HttpCode.OK).json({ message: successMessage.LOGIN_SUCCESS, data: resdata });
  } catch (error) {
    return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ message: errorMessage.ERROR_CREATE_USER, error });
  }
});

router.post('/change-password', async (req: Request, res: Response) => {
  const { email, oldPassword, newPassword } = req.body;
  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(HttpCode.NOT_FOUND).json({ message: errorMessage.INVALID_EMAIL_PASSWORD });
    }

    const isPasswordValid = await HashUtil.comparePassword(oldPassword, user.password);
    if (!isPasswordValid) {
      return res.status(HttpCode.UNAUTHORIZED).json({ message: errorMessage.INVALID_EMAIL_PASSWORD });
    }

    const hashedPassoword = await HashUtil.hashPassword(newPassword);
    user.password = hashedPassoword;
    await user.save();

    return res.status(HttpCode.OK).json({ message: successMessage.PASSWORD_SET_SUCCESS });
  } catch (error) {
    return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ message: errorMessage.ERROR_CREATE_USER, error });
  }
});

export default router;
