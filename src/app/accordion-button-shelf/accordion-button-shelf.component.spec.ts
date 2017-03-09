import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionButtonShelfComponent } from './accordion-button-shelf.component';

describe('AccordionButtonShelfComponent', () => {
  let component: AccordionButtonShelfComponent;
  let fixture: ComponentFixture<AccordionButtonShelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionButtonShelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionButtonShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
