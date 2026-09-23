import {Component, input, type InputSignal} from '@angular/core';
import {PillColorEnum} from "../pill-color-enum.ts";


@Component({
  selector: 'app-pill-component',
  imports: [],
  templateUrl: './pill-component.html',
  styleUrl: './pill-component.css',
  standalone: true,
})
export class PillComponent {
  public pillText: InputSignal<string> = input('');
  public pillColor = input(PillColorEnum.BLUE);
}
