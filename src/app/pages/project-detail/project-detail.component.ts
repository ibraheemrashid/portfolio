import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { RevealDirective } from '../../shared/reveal.directive';
import { ShotComponent } from '../../shared/shot/shot.component';
import { PROJECTS, Project } from '../../data/projects.data';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective, ShotComponent],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent {
  private route = inject(ActivatedRoute);

  readonly project = toSignal(
    this.route.paramMap.pipe(
      map((params) => PROJECTS.find((p) => p.slug === params.get('slug')))
    ),
    { initialValue: undefined as Project | undefined }
  );

  readonly others = toSignal(
    this.route.paramMap.pipe(
      map((params) => PROJECTS.filter((p) => p.slug !== params.get('slug')))
    ),
    { initialValue: [] as Project[] }
  );
}
