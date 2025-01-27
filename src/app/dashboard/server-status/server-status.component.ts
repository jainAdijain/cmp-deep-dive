import { Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit,OnDestroy {
  // currentStatus: 'online' | 'offline' | 'unknown' = 'online'; string literal
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');

  // private interval?: NodeJS.Timeout; //getting error
  private interval?: ReturnType<typeof setInterval>;

  constructor() { }

  ngOnInit() {
    console.log('INIT');
    this.interval = setInterval(() => {
      const rnd = Math.random(); // 0 to 0.99999999999999
      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd > 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);

  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }

  ngOnDestroy() {
    clearTimeout(this.interval);
  }
}