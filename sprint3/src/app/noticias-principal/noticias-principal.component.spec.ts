import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasPrincipalComponent } from './noticias-principal.component';

describe('NoticiasPrincipalComponent', () => {
  let component: NoticiasPrincipalComponent;
  let fixture: ComponentFixture<NoticiasPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasPrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
