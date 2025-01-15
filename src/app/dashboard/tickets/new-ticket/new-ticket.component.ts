import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, Output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit ,AfterViewInit {

  // @Output() add = new EventEmitter();
  add = output<{title: string; text: string}>();

  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // private form = viewChild<ElementRef<HTMLFormElement>>('form'); //signals

  onSubmit(title: string, ticketText: string) {
    console.log('SUBMITTED');
    this.add.emit({ title: title, text: ticketText });
    this.form?.nativeElement.reset(); //@ViewChild() decorator
    // this.form()?.nativeElement.reset(); // Signal with viewchild()
  }

  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT');
    console.log(this.form?.nativeElement);
  }

  ngOnInit(): void {
    console.log('ONINIT');
    console.log(this.form?.nativeElement);
  }

}
