import { NgModule } from '@angular/core';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import{ MatRadioModule} from '@angular/material/radio';
import{ MatSelectModule} from '@angular/material/select';
import{ MatIcon, MatIconModule} from '@angular/material/icon';
import{ MatCheckboxModule} from '@angular/material/checkbox';
import{MatButtonModule} from '@angular/material/button'
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';


const MaterialComponent=[
  MatInputModule,
  MatFormFieldModule,
  MatRadioModule,
  MatSelectModule,
  MatIconModule,
  MatCheckboxModule,
  MatButtonModule,
  MatGridListModule,
  MatTableModule
  
];

@NgModule({
  imports: [
   MaterialComponent
  ],
  exports:[MaterialComponent]
 
})
export class MaterialModule { }
