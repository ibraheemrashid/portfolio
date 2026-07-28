import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shot',
  standalone: true,
  templateUrl: './shot.component.html',
  styleUrls: ['./shot.component.scss']
})
export class ShotComponent {
  @Input({ required: true }) src!: string;
  @Input() alt = '';
  errored = false;

  onError(): void {
    this.errored = true;
  }
}
