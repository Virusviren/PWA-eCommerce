import { Component } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';

  constructor(private db:AngularFireDatabase) {
  }

   ngOnInit() {
    this.db.list('/insurance').valueChanges()
      .subscribe(insurance => console.log(insurance));
  }


}
