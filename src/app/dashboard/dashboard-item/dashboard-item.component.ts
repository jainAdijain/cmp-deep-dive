import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {

  //Method::1 ( readonly-signal)
  image = input.required<{ src: string; alt: string }>();
  title = input.required<string>();

  //Method::2
  // @Input({ required: true }) img!: { src: string; alt: string };
  // @Input({ required: true }) title!: string;



}
