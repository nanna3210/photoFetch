import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import { MatInputModule } from "@angular/material/input";
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {DragDropModule} from '@angular/cdk/drag-drop'; 
import { MatMenuModule } from "@angular/material/menu";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox'
const data = [

    MatChipsModule,MatInputModule, 
    MatCardModule, MatButtonModule,MatSnackBarModule,DragDropModule, 
    MatMenuModule, MatButtonToggleModule, MatCheckboxModule, 
    MatAutocompleteModule


] 

@NgModule({
    imports:data,
    exports:data

})
export class MaterialModule {

}