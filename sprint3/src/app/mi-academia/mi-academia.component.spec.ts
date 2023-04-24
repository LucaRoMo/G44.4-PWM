import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiAcademiaComponent } from './mi-academia.component';

describe('MiAcademiaComponent', () => {
  let component: MiAcademiaComponent;
  let fixture: ComponentFixture<MiAcademiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiAcademiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiAcademiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
