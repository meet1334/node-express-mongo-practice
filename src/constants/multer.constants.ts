export const ALLOWED_FILES = ['image/jpeg', 'image/jpg', 'image/png', 'image/svg+xml'];

export const ALLOWED_VIDEO_FILES = ['video/mp4'];

export enum SUPPORTED_ATTACHMENT_FORMAT {
  PDF = 'application/pdf',
  JPG = 'image/jpg',
  SVG = 'image/svg+xml',
  PNG = 'image/png',
  JPEG = 'image/jpeg',
  XLSX = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  XLS = 'application/vnd.ms-excel',
}
export enum STORAGE_BUCKET {
  DEFAULT = 'public/storage',
  JOB_ATTACHMENT = 'job/attachments',
  JOB_SITE_IMAGES = 'job/site',
  PROFILE_IMAGE = 'profile/images',
  TEMPLATE_IMAGE = 'template/logo',
  REPORT_ATTACHMENT = 'report/attachments',
}

export const SUPPORTED_ATTACHMENT_FORMAT_ARRAY: SUPPORTED_ATTACHMENT_FORMAT[] = [
  SUPPORTED_ATTACHMENT_FORMAT.PDF,
  SUPPORTED_ATTACHMENT_FORMAT.SVG,
  SUPPORTED_ATTACHMENT_FORMAT.JPG,
  SUPPORTED_ATTACHMENT_FORMAT.JPEG,
  SUPPORTED_ATTACHMENT_FORMAT.PNG,
  SUPPORTED_ATTACHMENT_FORMAT.XLS,
  SUPPORTED_ATTACHMENT_FORMAT.XLSX,
];

export const IMAGE_FILE_SIZE = 1024 * 1024 * 2; // 2 MB

export const VIDEO_FILE_SIZE = 1024 * 1024 * 10; // 2 MB