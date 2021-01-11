import {NgModule} from '@angular/core';
import { InsurancesComponent } from './components/insurances/insurances.component';
import {MaterialModule} from '../../material-ui.module';
import {BrowserModule} from '@angular/platform-browser';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [InsurancesComponent],
  imports: [MaterialModule,
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModuleInsurances {}
