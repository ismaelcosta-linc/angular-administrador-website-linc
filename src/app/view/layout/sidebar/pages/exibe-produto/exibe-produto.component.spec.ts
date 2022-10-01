import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeProdutoComponent } from './exibe-produto.component';

describe('ExibeProdutoComponent', () => {
  let component: ExibeProdutoComponent;
  let fixture: ComponentFixture<ExibeProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExibeProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibeProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
