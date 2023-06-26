import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { UsuariosService } from './usuarios.service';


describe('UsuariosService', () => {
  let HttpClientSpy: {get: jasmine.Spy} 
  let service: UsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    //Agregamos el HttpClientTestingModule  
      imports:  [
        HttpClientTestingModule
      ]

    });
    HttpClientSpy = jasmine.createSpyObj('HttpClient',['get'])
    service = TestBed.inject(UsuariosService);
  });

  it('El servicio no se inicia correctamente', () => {
    expect(service).toBeTruthy();
  });
});
