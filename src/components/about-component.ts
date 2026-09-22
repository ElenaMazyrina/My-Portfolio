import {Component, inject, type OnInit} from '@angular/core';
import {ThemeToggleComponent} from "./theme-toggle/theme-toggle-component.ts";
import {ThemeService} from "../services/ThemeService.ts";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about-component.html',
    styleUrls: ['./about-component.css'],
    imports: [ ThemeToggleComponent ]
})
export class AboutComponent implements OnInit {
    private readonly themeService: ThemeService = inject(ThemeService);

    ngOnInit(): void {
        this.themeService.init();
    }
}
