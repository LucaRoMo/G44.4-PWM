import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactIconTextComponent } from './contact-icon-text.component';

describe('ContactIconTextComponent', () => {
  let component: ContactIconTextComponent;
  let fixture: ComponentFixture<ContactIconTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactIconTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactIconTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
