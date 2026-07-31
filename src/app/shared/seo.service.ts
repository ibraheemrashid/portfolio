import { Injectable, inject } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
import { PROJECTS } from '../data/projects.data';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private titleService = inject(Title);
  private meta = inject(Meta);

  init(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.updateForCurrentRoute());

    this.updateForCurrentRoute();
  }

  private updateForCurrentRoute(): void {
    let route = this.activatedRoute.firstChild;
    while (route?.firstChild) {
      route = route.firstChild;
    }

    const data = route?.snapshot.data ?? {};
    const slug = route?.snapshot.paramMap.get('slug');
    const project = slug ? PROJECTS.find((p) => p.slug === slug) : undefined;

    const description: string = project?.summary ?? data['description'] ?? '';
    if (description) {
      this.meta.updateTag({ name: 'description', content: description });
      this.meta.updateTag({ property: 'og:description', content: description });
      this.meta.updateTag({ name: 'twitter:description', content: description });
    }

    const title = project ? `${project.title} — Ibraheem Rashid` : this.titleService.getTitle();
    if (project) {
      this.titleService.setTitle(title);
    }
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ name: 'twitter:title', content: title });
  }
}