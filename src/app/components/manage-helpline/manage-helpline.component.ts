import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Helpline } from 'src/app/model/helpline';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-manage-helpline',
  templateUrl: './manage-helpline.component.html',
  styleUrls: ['./manage-helpline.component.css'],
})
export class ManageHelplineComponent {
  helplineList: Helpline[] = [];

  helplineObj: Helpline = {
    id: '',
    title: '',
    data: '',
    icon: '',
    color: '',
    instant_dial: '',
    priority: 1,
  };
  id: string = '';
  title: string = '';
  htmlData: string = '';
  icon: string = '';
  color: string = 'blue';
  instant_dial: string = '';
  priority: number = 1;
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '16rem',
    minHeight: '16rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
  };
  constructor(private auth: AuthService, private data: DataService) {}

  ngOnInit(): void {
    this.getAllHelplines();
  }

  resetForm() {
    this.id = '';
    this.title = '';
    this.htmlData = '';
    this.icon = '';
    this.color = 'blue';
    this.instant_dial = '';
    this.priority = 1;
  }
  // register() {
  //   this.auth.logout();
  // }
  getAllHelplines() {
    this.data.getAllHelplines().subscribe(
      (res) => {
        this.helplineList = res.map((e: any) => {
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
  addHelpline() {
    if (this.title == '') {
      alert('All fields are required');
      return;
    }
    this.helplineObj.title = this.title;
    this.helplineObj.data = this.htmlData;
    this.helplineObj.icon = this.icon;
    this.helplineObj.color = this.color;
    this.helplineObj.priority = this.priority;
    this.helplineObj.instant_dial = this.instant_dial;

    this.data.addHelpline(this.helplineObj);
    this.resetForm();
  }

  updateHelpline(explore: Helpline) {
    // this.data.updateHelpline(explore);
  }
  deleteHelpline(explore: Helpline) {
    if (
      window.confirm(
        'Are you sre you want do delete Helpline Category ' +
          explore.title +
          '?'
      )
    ) {
      this.data.deleteHelpline(explore);
    }
  }
}
