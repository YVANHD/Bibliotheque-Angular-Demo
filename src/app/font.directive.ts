import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFont]'  // selecteur différent de celui des composants. il sera utilisé
                          // sur l'élément HTML souhaité
})
export class FontDirective {

  constructor(private el: ElementRef) {
    this.setTheBorderColor('#F68A1E');     // donne une couleur initial aux bordures
   }

   @HostListener('mouseenter') // permet de lier une methode de notre directive à un évenement donné.
   onMouseenter() {
     this.setTheBorderColor(this.setTheBorderColor + '#2C9FAF'); // change la couleur des bordures au survol de l'élément par le curseur
   }

   @HostListener('mouseleave')
   onMouseleave() {
     this.setTheBorderColor('#F68A1E'); // change la couleur des bordures au retrait du curseur
   }

   private setTheBorderColor(color: string) {
     this.el.nativeElement.style.border = 'solid 5px' + color;
   }

}
