import {Component, Input} from '@angular/core';

export enum ButtonType {
  default,
  exp_btn,
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() class: string;
  @Input() exp_btn_header: string;
  @Input() exp_btn_src: string;
  @Input() exp_btn_src_alt: string;
  @Input() btn_type: ButtonType = ButtonType.default;
  protected readonly ButtonType = ButtonType;
}
