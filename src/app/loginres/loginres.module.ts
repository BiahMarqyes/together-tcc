import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginresPageRoutingModule } from './loginres-routing.module';

import { LoginresPage } from './loginres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginresPageRoutingModule
  ],
  declarations: [LoginresPage]
})
export class LoginresPageModule {}
