import { animate, state, style, transition, trigger } from "@angular/core";

export function expandCollapse() {
  return trigger('expandCollapse', [
    state('collapsed, void', style({ height: '48px' })),
    state('expanded', style({ height: '192px' })),
    transition(
      'collapsed <=> expanded', [animate(400)])
  ]);
}
