import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutosComponent } from './autos.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AutosComponent', () => {
  let component: AutosComponent;
  let fixture: ComponentFixture<AutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutosComponent ],
      imports:[
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('El formulario se mantiene invalido cuando soloingreso la patente', () => {
    
    const formularioAutos = component.formularioAutos
    const Patente = formularioAutos.controls['Patente'] 

    Patente.setValue('1122')
    expect(formularioAutos.invalid)
  });


  it('El formulario se mantiene valido cuando ingreso el nombre del auto', () => {
    
    const formularioAutos = component.formularioAutos
    const nombreAuto = formularioAutos.controls['nombreAuto'] 

    nombreAuto.setValue('Nissan')
    expect(formularioAutos.valid).toBeTrue()
  });






});
