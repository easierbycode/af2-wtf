import { Component, Inject } from '@angular/core';
import { FirebaseApp, FirebaseRef } from 'angularfire2';


@Component({
  moduleId: module.id,
  selector: 'af2-wtf-app',
  templateUrl: 'af2-wtf.component.html',
  styleUrls: ['af2-wtf.component.css']
})
export class Af2WtfAppComponent {
  title = 'af2-wtf works!';
  app: firebase.app.App;
  rootRef: firebase.database.Reference;

  constructor(@Inject(FirebaseApp) firebaseApp: firebase.app.App) {
    this.app = firebaseApp;
    this.rootRef = this.app.database().ref();
    this.rootRef.on('value', this.doSomething);
  }

  doSomething( snapshot ) {
    console.log( snapshot.val() );
  }
}