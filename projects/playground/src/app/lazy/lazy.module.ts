import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMessagesModule } from 'ngx-messages';


@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    LazyRoutingModule,
    ReactiveFormsModule,
    NgxMessagesModule.configure({
      showErrorsOnlyIfInputDirty: true,
      showErrorsWhenFormSubmitted: true
    })
  ]
})
export class LazyModule { }
