import {Component, input} from '@angular/core';
import {PillColorEnum} from "../pill-color-enum.ts";
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-pill-component',
  imports: [CommonModule],
  templateUrl: './pill-component.html',
  styleUrl: './pill-component.css',
  standalone: true,
})
export class PillComponent {
  public pillColor = input(PillColorEnum.BLUE);
}
