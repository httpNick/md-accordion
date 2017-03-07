import { animate, state, style, transition, trigger } from "@angular/core";

export function rotate(duration: number = 300) {

  return trigger('rotate', [
    state('collapsed', style({transform: 'rotate(0deg)'})),
    state('expanded', style({transform: 'rotate(180deg)'})),
    transition('collapsed => expanded', animate(duration + 'ms')),
    transition('expanded => collapsed', animate(duration + 'ms'))
  ]);

}
