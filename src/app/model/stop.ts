import { FileMetaData } from './file-meta-data';

export interface Stop {
  id: string;
  name: string;
  is_city: boolean;
  step: number;
  files: Array<FileData>;
  stops: Array<StopData>;
}

export class FileData {
  name: string = '';
  size: number = 0;
  url: string = '';
}

export class StopData {
  id: number = 0;
  title: string = '';
}
