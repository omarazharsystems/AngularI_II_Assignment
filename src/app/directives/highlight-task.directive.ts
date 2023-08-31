// src/app/directives/highlight-task.directive.ts
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightTask]'
})
export class HighlightTaskDirective {
  @Input() appHighlightTask: string = ''; // Set an appropriate default value


  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    // Implement your highlight logic here
  }
}
