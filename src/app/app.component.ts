import { Component, HostListener } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(
    private matRegister: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ){
    this.matRegister.addSvgIcon('linkedin', this.setPath('../assets/icons/linkedin.svg'))
    this.matRegister.addSvgIcon('git', this.setPath('../assets/icons/git.svg'))
  }

  private setPath(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
  @HostListener('document:paste', ['$event'])
  pasteEvent(event: ClipboardEvent){
    event.preventDefault()
    event.stopPropagation()
    const ele = event.target as HTMLElement
    if( ele.id === 'input-ele' ){
      const c = event.clipboardData?.getData('text/html') as string
      const inputElememt = document.getElementById('input-ele') as HTMLElement
      inputElememt.innerHTML = c
    }
  }
}

