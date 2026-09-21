import { Component } from '@angular/core';
import {ThemeToggleComponent} from "./theme-toggle/theme-toggle-component.ts";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about-component.html',
    imports: [ ThemeToggleComponent ]
})
export class AboutComponent {
}
