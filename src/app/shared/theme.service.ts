import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'ir-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<Theme>(this.getInitialTheme());

  constructor() {
    // Runs whenever `theme` changes, including once immediately on init.
    effect(() => {
      const value = this.theme();
      document.documentElement.setAttribute('data-theme', value);
      try {
        localStorage.setItem(STORAGE_KEY, value);
      } catch {
        // localStorage unavailable (e.g. private browsing) — theme just won't persist.
      }
    });
  }

  toggle(): void {
    this.theme.set(this.theme() === 'dark' ? 'light' : 'dark');
  }

  private getInitialTheme(): Theme {
    if (typeof window === 'undefined') return 'light';

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'light' || stored === 'dark') return stored;
    } catch {
      // ignore, fall through to system preference
    }

    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }
}
