import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Ibraheem Rashid — Software Developer' },
  { path: 'about', component: AboutComponent, title: 'About — Ibraheem Rashid' },
  { path: 'experience', component: ExperienceComponent, title: 'Experience — Ibraheem Rashid' },
  { path: 'projects', component: ProjectsComponent, title: 'Projects — Ibraheem Rashid' },
  { path: 'projects/:slug', component: ProjectDetailComponent, title: 'Project — Ibraheem Rashid' },
  { path: 'certifications', component: CertificationsComponent, title: 'Certifications — Ibraheem Rashid' },
  { path: 'contact', component: ContactComponent, title: 'Contact — Ibraheem Rashid' },
  { path: '**', redirectTo: '' }
];