import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { GrocerylistComponent } from './grocerylist.component';

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
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'GroceryList',
      urls: [
        { title: 'GroceryList', url: '/grocerylist' },
        { title: 'GroceryList' }
      ]
    },
    component: GrocerylistComponent 
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
    HttpClientModule
  ],
  declarations: [
    GrocerylistComponent,
  ],
  providers: [
  ]
})

export class GroceryListModule { }