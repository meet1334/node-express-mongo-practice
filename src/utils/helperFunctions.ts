import { existsSync, mkdirSync } from 'fs';

export const fileOrFolderExistCheck = (path: string): boolean => {
  if (existsSync(path)) {
    return true;
  } else {
    mkdirSync(path, { recursive: true });
    return true;
  }
};
