import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgRecaptcha3Service } from 'ng-recaptcha3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'captcha-app';
  myForm: FormGroup;
  formData: any;
  private siteKey = "6LedAJEUAAAAAPttxeFNp6ZtAvKGI8D9gESE-hl3";

  constructor(
    private fb: FormBuilder,
    private recaptcha3: NgRecaptcha3Service
  ) {
    this.myForm = this.fb.group({
      name: [null],
    });
  }

  ngOnInit(){
   

    this.recaptcha3.init(this.siteKey);
  }
  
  onSubmit() {
    this.recaptcha3.getToken().then(
      token => {
        console.log(token)
        console.log(this.formData);
        // Handle saving form data
        // this.myHttpService.login(this.formData).subscribe(response => {
        //
        // });
      },
      error => {
        // handle error here
        console.log(error);
      }
    );
  }
}
