import {Component, inject, input} from '@angular/core';
import {ContactTypeEnum} from "./ContactTypeEnum.ts";
import {ToastService} from "../../services/toast-service.ts";

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.css',
})
export class ContactComponent {
  contactType = input(ContactTypeEnum.COPY);
  contact = input('');
  private readonly toastService = inject(ToastService);

  protected contactTypeEnum = ContactTypeEnum;

  public async copy(): Promise<void> {
    await navigator.clipboard.writeText(this.contact());
    this.toastService.success(this.contact());
  }
}
