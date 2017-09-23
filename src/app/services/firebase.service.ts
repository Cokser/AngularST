import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {

  constructor(private db: AngularFireDatabase) {


  }

  requests: FirebaseListObservable<any[]>;

  getRequests() {
    this.requests = this.db.list('/data');
    return this.requests;
  }
  playSound(sound) {
    let notificationSound = new Audio(sound);
    notificationSound.play();
  }
}
