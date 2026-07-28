import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {}
