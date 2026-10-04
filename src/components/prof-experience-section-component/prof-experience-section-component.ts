import { Component } from '@angular/core';
import {SectionTitleComponent, SectionTitleStar} from "../section-title-component/section-title-component.ts";

@Component({
  selector: 'app-prof-experience-section',
  imports: [SectionTitleComponent],
  templateUrl: './prof-experience-section-component.html',
  styleUrl: './prof-experience-section-component.css',
})
export class ProfExperienceSectionComponent {
  protected sectionTitleStar = SectionTitleStar;
}
