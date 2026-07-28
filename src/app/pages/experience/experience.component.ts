import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { EXPERIENCE } from '../../data/experience.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  readonly items = EXPERIENCE;
}
