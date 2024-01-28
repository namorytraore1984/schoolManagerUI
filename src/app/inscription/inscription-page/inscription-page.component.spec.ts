import { ComponentFixture, TestBed } from '@angular/core/testing';
import {Component} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { InscriptionPageComponent } from './inscription-page.component';

describe('InscriptionPageComponent', () => {
  let component: InscriptionPageComponent;
  let fixture: ComponentFixture<InscriptionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscriptionPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscriptionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
