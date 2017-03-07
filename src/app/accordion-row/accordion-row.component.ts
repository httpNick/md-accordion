import { Component, OnInit, HostBinding } from '@angular/core';
import { expandCollapse } from "../animation/expand-collapse.animation";
import { rotate } from "../animation/rotate.animation";

@Component({
  selector: 'accordion-row',
  templateUrl: './accordion-row.component.html',
  styleUrls: ['./accordion-row.component.scss'],
  animations: [
    expandCollapse(),
    rotate(400)
  ]
})
export class AccordionRowComponent implements OnInit {

  @HostBinding('@expandCollapse') get _expandOrCollapse() {
    return this.expandOrCollapse();
  }

  isOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  switchState() {

    this.isOpen = !this.isOpen;

  }

  expandOrCollapse() {

    return this.isOpen ? 'expanded' : 'collapsed';

  };

}
