import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const ICON_GOOGLE = '../assets/google.svg';
const ICON_FACEBOOK = '../assets/face.svg';
const ICON_GITHUB = '../assets/github.svg';

@Component({
   selector: 'app-pop-up-form',
   templateUrl: './pop-up-form.component.html',
   styleUrls: ['./pop-up-form.component.scss'],
})
export class PopUpFormComponent {
   @Input() type: string = '';
   @Output() buttonEvent = new EventEmitter();

   constructor(
      iconRegistry: MatIconRegistry,
      sanitizer: DomSanitizer,
      private http: HttpClient
   ) {
      iconRegistry.addSvgIcon(
         'facebook',
         sanitizer.bypassSecurityTrustResourceUrl(ICON_FACEBOOK)
      );
      
      iconRegistry.addSvgIcon(
         "google",
         sanitizer.bypassSecurityTrustResourceUrl(ICON_GOOGLE)
      );
      
      iconRegistry.addSvgIcon(
         "github",
         sanitizer.bypassSecurityTrustResourceUrl(ICON_GITHUB)
       );
      
   }

   click() {
      this.buttonEvent.emit();
   }
}
