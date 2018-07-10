import { Directive } from '@angular/core';
import {ElementRef, HostListener, Renderer} from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

 // Use dependency injection to access DOM element
 constructor(private ele:ElementRef,  public renderer: Renderer) 
 {
   ele.nativeElement.style.background='yellow';
   renderer.setElementStyle(ele.nativeElement, 'font-weight', 'bold');
   renderer.setElementStyle(ele.nativeElement, 'font-size', '32px');
 }

}
