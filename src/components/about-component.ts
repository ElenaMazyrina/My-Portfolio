import {Component, inject, type OnInit} from '@angular/core';
import {ThemeToggleComponent} from "./theme-toggle/theme-toggle-component.ts";
import {ThemeService} from "../services/ThemeService.ts";
import {PillComponent} from "./pill-component/pill-component.ts";
import {PillColorEnum} from "./pill-color-enum.ts";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about-component.html',
    styleUrls: ['./about-component.css'],
    imports: [ ThemeToggleComponent, PillComponent ]
})
export class AboutComponent implements OnInit {
    private readonly themeService: ThemeService = inject(ThemeService);
    protected readonly pillColor = PillColorEnum;

    ngOnInit(): void {
        this.themeService.init();
    }
}
