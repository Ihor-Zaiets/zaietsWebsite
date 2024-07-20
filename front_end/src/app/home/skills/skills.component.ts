import { Component } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
