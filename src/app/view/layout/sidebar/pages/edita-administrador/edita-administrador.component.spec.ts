import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaAdministradorComponent } from './edita-administrador.component';

describe('EditaAdministradorComponent', () => {
  let component: EditaAdministradorComponent;
  let fixture: ComponentFixture<EditaAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaAdministradorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
