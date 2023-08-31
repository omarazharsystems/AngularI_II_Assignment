// src/app/directives/disable-done-button.directive.ts
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDisableDoneButton]'
})
export class DisableDoneButtonDirective {
  @Input() appDisableDoneButton: boolean = false; // Set an appropriate default value


  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    // Implement your disable logic here
  }
}
