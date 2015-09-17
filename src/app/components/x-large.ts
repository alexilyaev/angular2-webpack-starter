import {Directive, ElementRef} from 'angular2/angular2';

/*
 * Directive
 * XLarge is a simple directive to show how one of made
 */
@Directive({
  selector: '[x-large]' // using [ ] means selecting attributes
})
export class XLarge {
  constructor(element: ElementRef) {
    // simple DOM manipulation to set font size to x-large
    // `nativeElement` is the direct reference to the DOM element
  	element.nativeElement.classList.add('fsxl');
  }
}
