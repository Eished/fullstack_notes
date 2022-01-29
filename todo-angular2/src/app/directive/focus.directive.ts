import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[focus]'
})
export class FocusDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    this.renderer.invokeElementMethod(
      this.elementRef.nativeElement, 'focus', []);
  }
}
