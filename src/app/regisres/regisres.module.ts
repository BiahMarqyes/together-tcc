import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisresPageRoutingModule } from './regisres-routing.module';

import { RegisresPage } from './regisres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisresPageRoutingModule
  ],
  declarations: [RegisresPage]
})
export class RegisresPageModule {}
