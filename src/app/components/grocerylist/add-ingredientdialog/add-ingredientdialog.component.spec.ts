import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIngredientdialogComponent } from './add-ingredientdialog.component';

describe('AddIngredientdialogComponent', () => {
  let component: AddIngredientdialogComponent;
  let fixture: ComponentFixture<AddIngredientdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIngredientdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIngredientdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
