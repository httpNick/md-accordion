import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { expandCollapse } from "../animation/expand-collapse.animation";
import { rotate } from "../animation/rotate.animation";

@Component({
  selector: 'accordion-row',
  templateUrl: './accordion-row.component.html',
  styleUrls: ['./accordion-row.component.scss'],
  animations: [
    expandCollapse(200),
    rotate(200)
  ]
})
export class AccordionRowComponent implements OnInit {

  isOpen: boolean = false;
  canShowContent: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  openUp() {

    this.isOpen = !this.isOpen;
    this.canShowContent = true;

  }

  handleCollapseAnimDone(event) {

    if (event.fromState === 'expanded') {
      this.canShowContent = false;
    }

  }

  expandOrCollapse() {

    return this.isOpen ? 'expanded' : 'collapsed';

  };

}
