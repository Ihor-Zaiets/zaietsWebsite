import {Component, Input} from '@angular/core';

export enum ButtonType {
  default = 'default',
  exp_btn = 'exp_btn',
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() class: string;
  @Input() exp_btn_header: string;
  @Input() btn_img_src: string;
  @Input() btn_img_alt: string;
  @Input() btn_type: ButtonType = ButtonType.default;
  protected readonly ButtonType = ButtonType;
}
