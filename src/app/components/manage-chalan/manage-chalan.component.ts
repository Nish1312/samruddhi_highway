import { Component } from '@angular/core';
import { Chalan } from 'src/app/model/chalan';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-manage-chalan',
  templateUrl: './manage-chalan.component.html',
  styleUrls: ['./manage-chalan.component.css'],
})
export class ManageChalanComponent {
  chalanList: Chalan[] = [];
  chalanObj: Chalan = {
    id: '',
    offence_en: '',
    offence_mr: '',
    offence_section: '',
    fine_1: '',
    fine_2: '',
  };
  id: string = '';
  offence_en: string = '';
  offence_mr: string = '';
  offence_section: string = '';
  fine_1: string = '';
  fine_2: string = '';

  constructor(private auth: AuthService, private data: DataService) {}

  ngOnInit(): void {
    this.getAllChalans();
  }

  resetForm() {
    this.id = '';
    this.offence_en = '';
    this.offence_mr = '';
    this.offence_section = '';
    this.fine_1 = '';
    this.fine_2 = '';
  }

  // register() {
  //   this.auth.logout();
  // }
  getAllChalans() {
    this.data.getAllChalans().subscribe(
      (res) => {
        this.chalanList = res.map((e: any) => {
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
  addChalan() {
    if (this.offence_en == '') {
      alert('All fields are required');
      return;
    }
    this.chalanObj.id = this.id;
    this.chalanObj.offence_en = this.offence_en;
    this.chalanObj.offence_mr = this.offence_mr;
    this.chalanObj.offence_section = this.offence_section;
    this.chalanObj.fine_1 = this.fine_1;
    this.chalanObj.fine_2 = this.fine_2;

    this.data.addChalan(this.chalanObj);
    this.resetForm();
  }

  updateChalan(chalan: Chalan) {
    // this.data.updateChalan(chalan);
  }
  deleteChalan(chalan: Chalan) {
    if (
      window.confirm(
        'Are you sre you want do delete Chalan ' + chalan.offence_section + '?'
      )
    ) {
      this.data.deleteChalan(chalan);
    }
  }
}
