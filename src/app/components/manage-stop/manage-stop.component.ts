import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FileMetaData } from 'src/app/model/file-meta-data';
import { FileData, Stop } from 'src/app/model/stop';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';
import { FileService } from 'src/app/shared/file.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-manage-stop',
  templateUrl: './manage-stop.component.html',
  styleUrls: ['./manage-stop.component.css'],
})
export class ManageStopComponent {
  stopList: Stop[] = [];
  imageManager = [];
  stopObj: Stop = {
    id: '',
    name: '',
    is_city: false,
    step: 0,
    files: [],
  };
  id: string = '';
  name: string = '';
  is_city: boolean = false;
  step: number = 1;

  selectedFiles!: FileList;
  currentFileUpload!: FileMetaData;

  percentage: number = 0;

  listOfFiles: Array<FileData> = [];

  constructor(
    private auth: AuthService,
    private data: DataService,
    private fileService: FileService,
    private fireStorage: AngularFireStorage
  ) {}

  ngOnInit(): void {
    this.getAllStops();
  }

  resetForm() {
    this.id = '';
    this.name = '';
    this.is_city = false;
    this.step = 1;
  }
  // register() {
  //   this.auth.logout();
  // }
  getAllStops() {
    this.data.getAllStops().subscribe(
      (res) => {
        this.stopList = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        });
      },
      (err) => {
        alert('Error while fatching data');
      }
    );
  }
  addStop() {
    if (this.name == '') {
      alert('All fields are required');
      return;
    }
    this.stopObj.name = this.name;
    this.stopObj.step = Number(this.step);
    this.stopObj.is_city = this.is_city;
    this.stopObj.files = this.listOfFiles;
    console.log(this.stopObj);
    this.data.addStop(this.stopObj);
    this.resetForm();
  }

  updateStop(stop: Stop) {
    // this.data.updateStop(stop);
  }
  deleteStop(stop: Stop) {
    if (
      window.confirm('Are you sre you want do delete Stop ' + stop.name + '?')
    ) {
      this.data.deleteStop(stop);
    }
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }

  uploadFile() {
    this.currentFileUpload = new FileMetaData(this.selectedFiles[0]);
    const path = 'Uploads/' + this.currentFileUpload.file.name;

    const storageRef = this.fireStorage.ref(path);
    const uploadTask = storageRef.put(this.selectedFiles[0]);
    const uploadedFile: FileData = {
      url: '',
      size: 0,
      name: '',
    };
    uploadTask
      .snapshotChanges()
      .pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe((downloadLink) => {
            // this.currentFileUpload.id = '';
            uploadedFile.url = downloadLink;
            uploadedFile.size = this.currentFileUpload.file.size;
            uploadedFile.name = this.currentFileUpload.file.name;
            this.listOfFiles.push(uploadedFile);
            console.log(this.listOfFiles);
            // this.fileService.saveFileMetaData(this.currentFileUpload);
          });
          this.ngOnInit();
        })
      )
      .subscribe(
        (res: any) => {
          this.percentage = (res.bytesTransferred * 100) / res.totalBytes;
        },
        (err) => {
          console.log('Error occured');
        }
      );
  }

  addImage() {
    this.imageManager.push(0);
  }

  removeImage(i) {
    this.imageManager.splice(i, 1);
  }
}
