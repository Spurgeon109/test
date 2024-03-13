import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  skills = [ 
    'HTML', 'CSS', 'Javascript', 'Typescript', 'Angular', 'Rxjs', 'Ngrx',
    'nodejs', 'docker', 'kubernetes', 'azure cloud'
   ]
  ngOnInit(): void {
  }
  openPdf(){
    window.open('../../../assets/files/SAM SPURGEON TALLA-RESUME-2024 - v1.pdf', '_blank')
  }
}
