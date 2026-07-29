import {
  Component,
  HostListener,
  inject,
  ElementRef,
  QueryList,
  ViewChildren,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { RouterLink, RouterLinkActive, Router, NavigationEnd, NavigationStart } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements AfterViewInit {
  private themeService = inject(ThemeService);
  readonly theme = this.themeService.theme;

  menuOpen = false;

  @ViewChildren('navLink') navLinks!: QueryList<ElementRef<HTMLAnchorElement>>;
  @ViewChild('indicator') indicator?: ElementRef<HTMLElement>;

  constructor(router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.menuOpen = false;
      }
      if (event instanceof NavigationEnd) {
        requestAnimationFrame(() => this.updateIndicator());
      }
    });
  }

  ngAfterViewInit(): void {
    requestAnimationFrame(() => this.updateIndicator());
    this.navLinks.changes.subscribe(() => requestAnimationFrame(() => this.updateIndicator()));
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateIndicator();
  }

  private updateIndicator(): void {
    if (!this.indicator || !this.navLinks) return;
    const bar = this.indicator.nativeElement;
    const activeLink = this.navLinks.find((link) =>
      link.nativeElement.classList.contains('is-active')
    );

    if (!activeLink) {
      bar.style.opacity = '0';
      return;
    }

    const el = activeLink.nativeElement;
    bar.style.opacity = '1';
    bar.style.width = `${el.offsetWidth}px`;
    bar.style.transform = `translateX(${el.offsetLeft}px)`;
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
