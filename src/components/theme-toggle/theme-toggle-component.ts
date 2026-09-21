import {Component, inject} from '@angular/core';
import {ThemeEnum, ThemeService} from "../../services/ThemeService.ts";

@Component({
  selector: 'app-theme-toggle',
  imports: [],
  templateUrl: './theme-toggle-component.html',
  styleUrl: './theme-toggle-component.css',
  standalone: true,
})
export class ThemeToggleComponent {
  private readonly themeService: ThemeService = inject(ThemeService);

  toggleLightTheme(): void {
    this.themeService.setTheme(ThemeEnum.LIGHT);
  }

  toggleDarkTheme(): void {
    this.themeService.setTheme(ThemeEnum.DARK);
  }
}
