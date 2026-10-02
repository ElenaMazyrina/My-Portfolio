import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

export enum ToastType {
    Success = "success",
    Error = "error",
    Info = "info",
}

export interface Toast {
    type: ToastType;
    message: string;
}

@Injectable({
    providedIn: 'root'
})
export class ToastService {
    private readonly toast$ = new Subject<Toast>();
    public readonly toastObservable = this.toast$.asObservable();

    public success(message: string): void {
        console.log(message);
        this.toast$.next({type: ToastType.Success, message});
    }

    // TODO info and error methods
}