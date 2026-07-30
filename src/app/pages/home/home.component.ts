import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/reveal.directive';
import { ShotComponent } from '../../shared/shot/shot.component';
import { MagneticDirective } from '../../shared/magnetic.directive';
import { TiltDirective } from '../../shared/tilt.directive';
import { PROJECTS, Project } from '../../data/projects.data';
import { EXPERIENCE } from '../../data/experience.data';

interface RoleLine {
  lead: string;
  rest: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RevealDirective, ShotComponent, MagneticDirective, TiltDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  readonly featured: Project[] = PROJECTS.slice(0, 2);
  readonly recentRoles = EXPERIENCE.slice(0, 3);

  readonly roles: RoleLine[] = [
    { lead: 'Software', rest: 'Engineer' },
    { lead: 'Full-Stack', rest: 'Developer' },
    { lead: 'AI', rest: 'Engineer' }
  ];
  readonly roleIndex = signal(0);

  private roleTimer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    this.roleTimer = setInterval(() => {
      this.roleIndex.set((this.roleIndex() + 1) % this.roles.length);
    }, 2800);
  }

  ngOnDestroy(): void {
    if (this.roleTimer) clearInterval(this.roleTimer);
  }
}