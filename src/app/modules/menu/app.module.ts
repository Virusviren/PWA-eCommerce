import {NgModule} from '@angular/core';
import { MenuTopComponent } from './components/menu-top/menu-top.component';
import {MaterialModule} from '../../material-ui.module';
import {AppRoutingModule} from '../../app-routing.module';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [MenuTopComponent],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    MenuTopComponent,

  ],
  providers: [],
  bootstrap: []
})
export class AppModuleMenu {}
