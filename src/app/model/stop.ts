import { FileMetaData } from './file-meta-data';

export interface Stop {
  id: string;
  name: string;
  is_city: boolean;
  step: number;
  files: Array<FileData>;
}

export class FileData {
  name: string = '';
  size: number = 0;
  url: string = '';
}
