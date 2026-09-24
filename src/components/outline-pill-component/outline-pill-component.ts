import {Component, input} from '@angular/core';
import {PillColorEnum} from "../pill-color-enum.ts";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-outline-pill-component',
  imports: [CommonModule],
  templateUrl: './outline-pill-component.html',
  styleUrl: './outline-pill-component.css',
  standalone: true,
})
export class OutlinePillComponent {
  public pillColor = input(PillColorEnum.BLUE);
}
