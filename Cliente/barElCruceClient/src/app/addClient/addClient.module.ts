import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addClientPage } from './addClient.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,HttpClientModule,
    RouterModule.forChild([{ path: '', component: addClientPage }])
  ],
  declarations: [addClientPage]
})
export class addClientPageModule {}
