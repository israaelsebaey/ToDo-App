import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {DragDropModule} from '@angular/cdk/drag-drop';


const materialComponents=[
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  DragDropModule
]

@NgModule({
  declarations: [],
  imports: [
   CommonModule
  ],
  exports:[
    materialComponents
  ]
})
export class AngMaterialModule { }
