import {Component, input, type InputSignal} from '@angular/core';
import {ContactTypeEnum} from "./ContactTypeEnum.ts";

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.css',
})
export class ContactComponent {
  contactType = input(ContactTypeEnum.COPY);
  contact = input('');

  protected contactTypeEnum = ContactTypeEnum;

  public async copy(): Promise<void> {
    await navigator.clipboard.writeText(this.contact());
  }
}
