import { Component } from '@angular/core';
import {SectionTitleComponent, SectionTitleStar} from "../section-title-component/section-title-component.ts";
import {OutlinePillComponent} from "../outline-pill-component/outline-pill-component.ts";
import {PillColorEnum} from "../pill-color-enum.ts";

@Component({
  selector: 'app-stack',
  imports: [
    SectionTitleComponent,
    OutlinePillComponent
  ],
  templateUrl: './stack-component.html',
  styleUrl: './stack-component.css',
  standalone: true,
})
export class StackComponent {
  protected readonly sectionTitleStar = SectionTitleStar;
  protected readonly pillColorEnum = PillColorEnum;
}
