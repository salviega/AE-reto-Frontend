import { FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/Service/firebase-code-error.service';

import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Que va testeart
describe('Test del component "LoginComponent"', () => {
  
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  
  // Lo que se va a ejecutar
  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports:[
          FormBuilder, 
          AngularFireAuth, 
          ToastrService, 
          Router,
          FirebaseCodeErrorService],
        declarations: [ LoginComponent ],
        providers: [NgModule]
    }).compileComponents();
  });

  // Se va ejecutar la prueba
  it('should create', () => { 
    const fixture = TestBed.createComponent(LoginComponent) // crea el componente
    const app = fixture.componentInstance // instancia el componente
    fixture.detectChanges(); // detecta cambios

    const propertie = app.loading; // app hace referencia alguna propiedad del componente  
     
    expect(propertie).toBeTruthy(); // Además de ser verdadero que el conponente exista
  });
});
