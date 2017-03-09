import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionRowContentComponent } from './accordion-row-content.component';

describe('AccordionRowContentComponent', () => {
  let component: AccordionRowContentComponent;
  let fixture: ComponentFixture<AccordionRowContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionRowContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionRowContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
