import multer from 'multer';
import {
  ALLOWED_FILES,
  ALLOWED_VIDEO_FILES,
  IMAGE_FILE_SIZE,
  STORAGE_BUCKET,
  SUPPORTED_ATTACHMENT_FORMAT,
  SUPPORTED_ATTACHMENT_FORMAT_ARRAY,
  VIDEO_FILE_SIZE,
} from '../constants/multer.constants';
import { errorMessage } from '../constants/error.constants';
import { AppError, HttpCode } from '../exceptions/AppError';
import { fileOrFolderExistCheck } from '../utils/helperFunctions';

export const uploadIMage = multer({
  fileFilter: (req, file, cb) => {
    const bucket = req.params.bucket || '';
    if ((bucket as STORAGE_BUCKET) === STORAGE_BUCKET.JOB_ATTACHMENT) {
      if (SUPPORTED_ATTACHMENT_FORMAT_ARRAY.includes(file.mimetype as SUPPORTED_ATTACHMENT_FORMAT)) {
        cb(null, true);
      } else {
        cb(
          new AppError({
            httpCode: HttpCode.BAD_REQUEST,
            description: `Invalid File type. only ${SUPPORTED_ATTACHMENT_FORMAT_ARRAY.join(', ')} file Format are allowed.`,
          }),
        );
        `Invalid File type. only ${SUPPORTED_ATTACHMENT_FORMAT_ARRAY.join(', ')} file Format are allowed.`;
      }
    } else {
      if (ALLOWED_FILES.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new AppError({ httpCode: HttpCode.BAD_REQUEST, description: errorMessage.INVALID_IMAGE_FORMAT }));
        `Invalid Image File type. only ${ALLOWED_FILES.join(', ')} Image Format are allowed.`;
      }
    }
  },
  limits: {
    fileSize: IMAGE_FILE_SIZE,
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const bucket = req.params.bucket || '';
      cb(null, `public/storage/${bucket}`);
    },
    filename: (req, file, cb) => {
      const bucket = req.params.bucket || '';
      fileOrFolderExistCheck(`./public/storage/${bucket}`);
      cb(null, Date.now() + '-' + file.originalname);
    },
  }),
});

export const uploadVideo = multer({
  fileFilter: (req, file, cb) => {
    if (ALLOWED_VIDEO_FILES.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new AppError({ httpCode: HttpCode.BAD_REQUEST, description: errorMessage.INVALID_VIDEO_FORMAT }));
      `Invalid Video File type. only ${ALLOWED_VIDEO_FILES.join(', ')} Video Format are allowed.`;
    }
  },
  limits: {
    fileSize: VIDEO_FILE_SIZE,
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const bucket = req.params.bucket || '';
      cb(null, `public/storage/videos/${bucket}`);
    },
    filename: (req, file, cb) => {
      const bucket = req.params.bucket || '';
      fileOrFolderExistCheck(`./public/storage/videos/${bucket}`);
      cb(null, Date.now() + '.mp4');
    },
  }),
});
