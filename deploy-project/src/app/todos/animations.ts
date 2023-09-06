import {
  trigger,
  state,
  style,
  animate,
  transition,

} from '@angular/animations';

export let  fade= trigger('fade',[
          state('void',style({opacity: 0})),
    //    alias  'void=>*' :enter '*=>void' :leave
    //       transition('void=>*',[
    //           style({opacity: 0}),//immediately we can remove style form here  state
    //            animate('1s')//over time
    //          ]),
          transition(':enter,:leave',[

             animate('1s')
              ])

          ])
export const slide = trigger('slide', [
  transition(':enter', [
    style({ transform: 'translateX(20px)' }),
    animate('0.5s')
  ]),
  transition(':leave', [
    animate('0.5s ease-out', style({ transform: 'translateX(-100%)', backgroundColor: 'red' }))
  ])
]);
