import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAdministradorComponent } from './cadastro-administrador.component';

describe('CadastroAdministradorComponent', () => {
  let component: CadastroAdministradorComponent;
  let fixture: ComponentFixture<CadastroAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroAdministradorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    
    
  });
});
