import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
//angular material
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatIconModule } from '@angular/material/icon'
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AddGroceryListComponent } from './add-grocery-list.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { AddIngredientdialogComponent } from '../add-ingredientdialog/add-ingredientdialog.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'addGroceryList',
      urls: [
        { title: 'addGroceryList', url: '/addGrocerylist' },
        { title: 'addGroceryList' }
      ]
    },
    component: AddGroceryListComponent
  }
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    HttpClientModule
  ],
  declarations: [
    AddGroceryListComponent,
    AddIngredientdialogComponent
  ],
  entryComponents: [
    AddIngredientdialogComponent
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
    { provide: MAT_DIALOG_DATA, useValue: { } },
    { provide: MatDialogRef, useValue: {} }
  ]
})

export class AddGroceryListModule { }