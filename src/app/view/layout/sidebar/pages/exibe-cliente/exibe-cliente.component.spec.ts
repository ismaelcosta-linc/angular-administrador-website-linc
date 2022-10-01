import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeClienteComponent } from './exibe-cliente.component';

describe('ExibeClienteComponent', () => {
  let component: ExibeClienteComponent;
  let fixture: ComponentFixture<ExibeClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExibeClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibeClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
