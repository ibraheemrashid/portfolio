import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Ibraheem Rashid — Software Developer',
    data: { description: 'Ibraheem Rashid — software developer building across Android, the web, and applied AI. Based in Srinagar, Kashmir.' }
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About — Ibraheem Rashid',
    data: { description: "Sales lead turned software developer. How I work, what I'm building right now, and what I do outside of code." }
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    title: 'Experience — Ibraheem Rashid',
    data: { description: 'Work history and education — sales lead, mentor, then software developer, with a B.Sc in Computer Science from the University of Kashmir.' }
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    title: 'Projects — Ibraheem Rashid',
    data: { description: 'Selected projects from Ibraheem Rashid — Siyam-o-Salah, ReviewGuard, and a full website rebuild for Jamiat Ahl-e-Hadees J&K.' }
  },
  {
    path: 'projects/:slug',
    component: ProjectDetailComponent,
    title: 'Project — Ibraheem Rashid',
    data: { description: "A closer look at one of Ibraheem Rashid's projects — the problem, the approach, and the outcome." }
  },
  {
    path: 'certifications',
    component: CertificationsComponent,
    title: 'Certifications — Ibraheem Rashid',
    data: { description: 'Certifications completed on Udemy, covering Android development and Python.' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact — Ibraheem Rashid',
    data: { description: 'Get in touch with Ibraheem Rashid — open to remote roles, freelance work, and new opportunities.' }
  },
  { path: '**', redirectTo: '' }
];