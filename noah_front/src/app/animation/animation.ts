import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const hideShow = trigger('showHide', [
  state(
    'showed',
    style({
      opacity: 1,
    })
  ),
  state(
    'hidden',
    style({
      opacity: 0,
    })
  ),
  transition('showed => hidden', [animate('1s')]),
  transition('hidden => showed', [animate('0.1s')]),
]);
