import { Component, HostBinding, HostListener, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  // host: {
  //   class: 'control',
  //  '(click)': 'onClick()'
  // }
})
export class ControlComponent {
  @HostBinding('class') className = 'control';
  @HostListener('click') onClicked() {
    console.log('clicked!');
  }
  label = input.required<string>();

  // for host configs inside component decorator object
  // onClick() {
  //   console.log('clicked!');
  // }
}
