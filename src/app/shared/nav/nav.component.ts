import { Component, HostListener, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, Router, NavigationStart } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  private themeService = inject(ThemeService);
  readonly theme = this.themeService.theme;

  menuOpen = false;

  constructor(router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.menuOpen = false;
      }
    });
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  @HostListener('window:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }
}
