import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CancelledRoutingModule } from './cancelled-routing.module';
import { CancelledComponent } from './cancelled.component';
import { sharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    CancelledComponent
  ],
  imports: [
    CommonModule,
    CancelledRoutingModule,
    sharedModule
  ]
})
export class CancelledModule { }
