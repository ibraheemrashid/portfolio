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
  @Input() aspectRatio = '16 / 10';
  /** Only relevant when cropToFill is true, or while the placeholder is showing. */
  @Input() cropToFill = false;
  @Input() placeholderLabel = 'Screenshot coming soon';
  errored = false;

  onError(): void {
    this.errored = true;
  }
}