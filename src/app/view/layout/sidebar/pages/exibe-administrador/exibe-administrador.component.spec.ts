import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeAdministradorComponent } from './exibe-administrador.component';

describe('ExibeAdministradorComponent', () => {
  let component: ExibeAdministradorComponent;
  let fixture: ComponentFixture<ExibeAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExibeAdministradorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibeAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
