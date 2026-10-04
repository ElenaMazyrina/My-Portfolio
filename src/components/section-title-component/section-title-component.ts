import {Component, input} from '@angular/core';

export enum SectionTitleStar  {
  YELLOW = 'YELLOW',
  GREEN = 'GREEN',
  BLUE = 'BLUE',
}

@Component({
  selector: 'app-section-title',
  imports: [],
  templateUrl: './section-title-component.html',
  styleUrl: './section-title-component.css',
})
export class SectionTitleComponent {
  public star = input(SectionTitleStar.YELLOW);
  public titleText = input('');
  protected sectionTitleStar = SectionTitleStar;
}
