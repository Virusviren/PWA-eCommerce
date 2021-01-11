import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class InsurancesService {

  constructor(private db:AngularFireDatabase) { }
getAllInsurances()
{
  return this.db.list('insurance')
    .snapshotChanges()
    .pipe(
      map(change => change.map(c => ({
        key:c.payload.key, ...c.payload.val() as {}
      })))
    );
}


}
