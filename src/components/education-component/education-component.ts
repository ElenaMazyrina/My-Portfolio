import { Component } from '@angular/core';
import {SectionTitleComponent, SectionTitleStar} from "../section-title-component/section-title-component.ts";

@Component({
  selector: 'app-education',
  imports: [
    SectionTitleComponent
  ],
  templateUrl: './education-component.html',
  styleUrl: './education-component.css',
  standalone: true,
})
export class EducationComponent {
  protected readonly sectionTitleStar = SectionTitleStar;
}
