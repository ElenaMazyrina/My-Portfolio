import {Injectable} from "@angular/core";

export enum ThemeEnum {
    LIGHT = 'light',
    DARK = 'dark',
}

const LOCAL_STORAGE_THEME_KEY = 'theme';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    public init(): void {
        const isThemeDark = window.matchMedia('(prefers-color-scheme: dark)');
        this.setTheme(this.getTheme());

        isThemeDark.addEventListener('change', (isThemeDark) => {
            if (!localStorage.getItem(LOCAL_STORAGE_THEME_KEY)) {
                this.setTheme(isThemeDark ? ThemeEnum.DARK : ThemeEnum.LIGHT);
            }
        });
    }

    public getTheme(): ThemeEnum {
        const isThemeDark = window.matchMedia('(prefers-color-scheme: dark)');
        return (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeEnum | null) ??
            (isThemeDark.matches ? ThemeEnum.DARK : ThemeEnum.LIGHT);
    }


    public setTheme(theme: ThemeEnum): void {
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
        this.applyTheme();
    }

    public applyTheme(): void {
        document.documentElement.dataset.theme = this.getTheme();
    }
}