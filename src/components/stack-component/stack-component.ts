import { Component } from '@angular/core';
import {SectionTitleComponent, SectionTitleStar} from "../section-title-component/section-title-component.ts";

@Component({
  selector: 'app-stack',
  imports: [
    SectionTitleComponent
  ],
  templateUrl: './stack-component.html',
  styleUrl: './stack-component.css',
})
export class StackComponent {
  protected readonly sectionTitleStar = SectionTitleStar;
}
