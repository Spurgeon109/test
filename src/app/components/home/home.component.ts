import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
   formGroup!: FormGroup
   constructor( private fb: FormBuilder ){
   }
  ngOnInit(): void {
    this.formGroup = this.fb.group({name: [''], content: ['']})
  }
  openPdf(){
    window.open('../../../assets/files/SAM SPURGEON TALLA-RESUME-2024 - v1.pdf', '_blank')
  }
  async downloadResume(event: any){
    event.canceBubble = true
    const response = await fetch('../../../assets/files/SAM SPURGEON TALLA-RESUME-2024 - v1.pdf')
    response.body?.getReader().read().then((res)=>{
      const a = document.createElement('a')
      const array = res.value as Uint8Array
      const blob = new Blob([array])
      const url = URL.createObjectURL(blob)
      a.href = url
      a.download = 'Resume.pdf'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    })
  }

  scrollToForm(){
    const ele = document.getElementById('contact')
    window.scroll({top: ele?.offsetHeight, behavior: 'smooth'})
  }


  get fullName(){
    return this.formGroup.value.name
  }
  get content(){
    return this.formGroup.value.content
  }

  openEmail(value: any){
    console.log(value)
  }

  get href(){
    const mailContent =  `
    mailTo: samspurgeon109@gmail.com
    To:
    Subject: Connect | ${ this.formGroup.value.name }
    Content-Type: text/html

    ${this.formGroup.value.content}

    `
    const email = new Blob([mailContent], { type: 'text/plain' });
    const url = URL.createObjectURL(email)
    return url
  }
}
