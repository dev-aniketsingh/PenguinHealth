import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnChanges {

  readonly UPPERCASE: RegExp = /^(?=.*[A-Z]).*$/;

  readonly LOWERCASE: RegExp = /^(?=.*[a-z]).*$/;

  readonly NUMBER: RegExp = /^(?=.*\d).*$/;


  @Input() newPassword: string;

  @Input() confirmPassword: string;

  @Input() disabled = false;

  @Output() isPassWordValidEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnChanges(): void {
    this.isPassWordValidEmitter.emit(this.uppercaseCheck() && this.lowercaseCheck() && this.numberCheck() && this.lengthCheck() && this.confirmPasswordCheck());
  }

  uppercaseCheck(): boolean {
    return this.newPassword && this.UPPERCASE.test(this.newPassword);
  }

  lowercaseCheck(): boolean {
    return this.newPassword && this.LOWERCASE.test(this.newPassword);
  }

  numberCheck(): boolean {
    return this.newPassword && this.NUMBER.test(this.newPassword);
  }

  lengthCheck(): boolean {
    return this.newPassword && this.newPassword.length >= 8;
  }

  confirmPasswordCheck(): boolean {
    return this.newPassword && this.confirmPassword === this.newPassword;
  }

}
