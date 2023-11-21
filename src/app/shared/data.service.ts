import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Stop } from '../model/stop';
import { Explore } from '../model/explore';
import { Helpline } from '../model/helpline';
import { Chalan } from '../model/chalan';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private afs: AngularFirestore) {}

  //Stop CRUD

  addStop(stop: Stop) {
    stop.id = this.afs.createId();
    return this.afs.collection('/cities').add(stop);
  }

  getAllStops() {
    return this.afs
      .collection('/cities', (ref) => ref.orderBy('step'))
      .snapshotChanges();
  }

  deleteStop(stop: Stop) {
    return this.afs.doc('/cities/' + stop.id).delete();
  }

  updateStop(stop: Stop) {
    return this.afs.doc('/cities/' + stop.id).update(stop);
  }

  //Explore CRUD

  addExplore(explore: Explore) {
    explore.id = this.afs.createId();
    return this.afs.collection('/explore').add(explore);
  }

  getAllExplores() {
    return this.afs.collection('/explore').snapshotChanges();
  }

  deleteExplore(explore: Explore) {
    return this.afs.doc('/explore/' + explore.id).delete();
  }

  updateExplore(explore: Explore) {
    this.deleteExplore(explore);
    this.addExplore(explore);
  }

  //Helpline CRUD

  addHelpline(helpline: Helpline) {
    helpline.id = this.afs.createId();
    return this.afs.collection('/helplines').add(helpline);
  }

  getAllHelplines() {
    return this.afs
      .collection('/helplines', (ref) => ref.orderBy('priority'))
      .snapshotChanges();
  }

  deleteHelpline(helpline: Helpline) {
    return this.afs.doc('/helplines/' + helpline.id).delete();
  }

  updateHelpline(helpline: Helpline) {
    this.deleteHelpline(helpline);
    this.addHelpline(helpline);
  }

  //Chalan CRUD

  addChalan(chalan: Chalan) {
    chalan.id = this.afs.createId();
    return this.afs.collection('/chalan').add(chalan);
  }

  getAllChalans() {
    return this.afs.collection('/chalan').snapshotChanges();
  }

  deleteChalan(chalan: Chalan) {
    return this.afs.doc('/chalan/' + chalan.id).delete();
  }

  updateChalan(chalan: Chalan) {
    this.deleteChalan(chalan);
    this.addChalan(chalan);
  }
}
