import { NgModule } from '@angular/core';
import {ButtonModule} from "primeng/button";
import {DividerModule} from "primeng/divider";
import {ChipsModule} from "primeng/chips";
import {CardModule} from "primeng/card";

//BLIBIOTECA PRIMENG

@NgModule({
  exports: [
    ButtonModule,
    DividerModule,
    ChipsModule,
    CardModule
  ],
})
export class AngularReporModule { }
