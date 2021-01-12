import {Component, OnDestroy, OnInit} from '@angular/core';
import {CategorieService} from '../../../commun/services/categorie.service';
import {Subscriber, Subscription} from 'rxjs';
import {InsurancesService} from '../../services/insurances.service';
import {mergeMap, map} from 'rxjs/operators';

@Component({
  selector: 'app-insurances',
  templateUrl: './insurances.component.html',
  styleUrls: ['./insurances.component.css']
})
export class InsurancesComponent implements OnInit, OnDestroy {


  categories: any[];
  insurances: any[];
  sub: Subscription;
  constructor( private serviceCategorie: CategorieService, private serviceInsurance: InsurancesService) { }

  ngOnInit() {
    this.sub = this.serviceCategorie.getAllCategories()
      .pipe(
        mergeMap(categories => this.serviceInsurance.getAllInsurances().pipe(
          map(insurances => [categories, insurances])
        ))).subscribe(([categories, insurances]) => {
        this.categories = categories;
        this.insurances = insurances;
        console.log(categories);
        console.log(insurances);
      });
  }
  getInsurancesByCategorie(key) {
    return this.insurances.filter(insurance => insurance.categorie === key);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
