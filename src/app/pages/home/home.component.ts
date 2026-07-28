import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/reveal.directive';
import { ShotComponent } from '../../shared/shot/shot.component';
import { PROJECTS, Project } from '../../data/projects.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RevealDirective, ShotComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  readonly featured: Project[] = PROJECTS.slice(0, 2);
}
