import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaServicoComponent } from './edita-servico.component';

describe('EditaServicoComponent', () => {
  let component: EditaServicoComponent;
  let fixture: ComponentFixture<EditaServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaServicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
