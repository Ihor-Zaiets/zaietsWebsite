import { Component } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {ButtonType} from "../../shared/button/button.component";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  protected readonly ButtonType = ButtonType;
}
