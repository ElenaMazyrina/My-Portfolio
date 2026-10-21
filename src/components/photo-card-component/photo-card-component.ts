import { Component } from '@angular/core';
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-photo-card',
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './photo-card-component.html',
  styleUrl: './photo-card-component.css',
  standalone: true,
})
export class PhotoCardComponent {

}
