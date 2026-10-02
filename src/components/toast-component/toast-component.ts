import {Component, inject} from '@angular/core';
import {ToastService} from "../../services/toast-service.ts";
import {concat, map, Observable, of, switchMap, timer} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-toast',
  imports: [AsyncPipe],
  templateUrl: './toast-component.html',
  styleUrl: './toast-component.css',
})
export class ToastComponent {
  private readonly toastService = inject(ToastService);

  protected isVisible$: Observable<boolean> = this.toastService.toastObservable.pipe(
      switchMap(() =>
          concat(
              of(true),
              timer(3000).pipe(map(() => false))
          )
      ),
  );

  protected message$ = this.toastService.toastObservable.pipe(
      map(({message}) => message),
  );
}
