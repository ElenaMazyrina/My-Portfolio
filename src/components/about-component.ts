import {Component, inject, type OnInit} from '@angular/core';
import {ThemeToggleComponent} from "./theme-toggle/theme-toggle-component.ts";
import {ThemeService} from "../services/theme-service.ts";
import {PillComponent} from "./pill-component/pill-component.ts";
import {PillColorEnum} from "./pill-color-enum.ts";
import {OutlinePillComponent} from "./outline-pill-component/outline-pill-component.ts";
import {PhotoCardComponent} from "./photo-card-component/photo-card-component.ts";
import {ContactComponent} from "./contact-component/contact-component.ts";
import {ContactTypeEnum} from "./contact-component/ContactTypeEnum.ts";
import {ToastComponent} from "./toast-component/toast-component.ts";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about-component.html',
    styleUrls: ['./about-component.css'],
    imports: [ ThemeToggleComponent, PillComponent, OutlinePillComponent, PhotoCardComponent, ContactComponent, ToastComponent ]
})
export class AboutComponent implements OnInit {
    private readonly themeService: ThemeService = inject(ThemeService);
    protected readonly pillColor = PillColorEnum;
    protected contactTypeEnum = ContactTypeEnum;

    ngOnInit(): void {
        this.themeService.init();
    }
}
