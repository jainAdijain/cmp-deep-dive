import { Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

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
  private el = inject(ElementRef);
  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input'); //signal

  @HostBinding('class') className = 'control';
  @HostListener('click') onClicked() {
    console.log('clicked!');
    console.log(this.el);
    // console.log(this.control);
    console.log(this.control()); //signal
  }
  label = input.required<string>();


  // for host configs inside component decorator object
  // onClick() {
  //   console.log('clicked!');
  // }


}
