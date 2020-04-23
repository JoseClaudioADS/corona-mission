import { NgModule } from '@angular/core';
import { InputErrorComponent } from './input-error/input-error.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
 imports:      [ CommonModule, IonicModule ],
 declarations: [ InputErrorComponent ],
 exports:      [ InputErrorComponent ]
})
export class SharedModule { }