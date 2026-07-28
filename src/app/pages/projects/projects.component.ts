import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/reveal.directive';
import { ShotComponent } from '../../shared/shot/shot.component';
import { PROJECTS } from '../../data/projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink, RevealDirective, ShotComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  readonly projects = PROJECTS;
}
