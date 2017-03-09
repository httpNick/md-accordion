import { animate, state, style, transition, trigger } from "@angular/core";

export function expandCollapse(animDuration: number = 200) {
  return trigger('expandCollapse', [
    state('collapsed, void', style({ height: '56px' })),
    state('expanded', style({ height: '*' })),
    transition(
      'collapsed <=> expanded', [animate(animDuration)])
  ]);
}
