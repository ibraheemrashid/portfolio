import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { CERTIFICATIONS } from '../../data/certifications.data';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent {
  readonly certifications = CERTIFICATIONS;
}
