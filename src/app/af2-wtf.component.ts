import { Component, Inject } from '@angular/core';
import { FirebaseRef } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'af2-wtf-app',
  templateUrl: 'af2-wtf.component.html',
  styleUrls: ['af2-wtf.component.css']
})
export class Af2WtfAppComponent {
  title = 'af2-wtf works!';

  constructor(@Inject(FirebaseRef) ref:Firebase) {
    ref.on('value', this.doSomething);
  }

  doSomething( snapshot ) {
    console.log( snapshot.val() );
  }
}
