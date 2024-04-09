import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionesProveedorComponent } from './acciones-proveedor.component';

describe('AccionesProveedorComponent', () => {
  let component: AccionesProveedorComponent;
  let fixture: ComponentFixture<AccionesProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccionesProveedorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccionesProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
