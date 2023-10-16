import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Explore } from 'src/app/model/explore';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-manage-explore',
  templateUrl: './manage-explore.component.html',
  styleUrls: ['./manage-explore.component.css'],
})
export class ManageExploreComponent {
  exploreList: Explore[] = [];
  exploreObj: Explore = {
    id: '',
    title: '',
    data: '',
    icon: '',
  };
  id: string = '';
  title: string = '';
  htmlData: string = '';
  icon: string = '';

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
    this.getAllExplores();
  }

  resetForm() {
    this.id = '';
    this.title = '';
    this.htmlData = '';
    this.icon = '';
  }

  // register() {
  //   this.auth.logout();
  // }
  getAllExplores() {
    this.data.getAllExplores().subscribe(
      (res) => {
        this.exploreList = res.map((e: any) => {
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
  addExplore() {
    if (this.title == '') {
      alert('All fields are required');
      return;
    }
    this.exploreObj.title = this.title;
    this.exploreObj.data = this.htmlData;
    this.exploreObj.icon = this.icon;

    this.data.addExplore(this.exploreObj);
    this.resetForm();
  }

  updateExplore(explore: Explore) {
    // this.data.updateExplore(explore);
  }
  deleteExplore(explore: Explore) {
    if (
      window.confirm(
        'Are you sre you want do delete Explore Category ' + explore.title + '?'
      )
    ) {
      this.data.deleteExplore(explore);
    }
  }
}
