import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
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

