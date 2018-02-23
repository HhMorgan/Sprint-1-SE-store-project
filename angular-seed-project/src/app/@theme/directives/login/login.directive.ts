import { Directive , ElementRef } from '@angular/core';

@Directive({
  selector: '[appLogin]'
})
export class LoginDirective {
  public name = "test1"
  constructor(element: ElementRef) {
    console.log(element);
  }

}
