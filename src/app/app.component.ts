import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgRecaptcha3Service } from 'ng-recaptcha3';
import { TestService } from './service/test.service';
declare var grecaptcha: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'captcha-app';
  myForm: FormGroup;
  formData: any;
  token:string = '';
  private siteKey = "6LeYzKkcAAAAAMzNYjblQNjBqRALe9rhgwcO3ASN";
  errormsg!: string;

  constructor(
    private fb: FormBuilder,
    private recaptcha3: NgRecaptcha3Service,
    private http: HttpClient,
    private testService: TestService
  ) {
    this.myForm = this.fb.group({
      name: [null],
    });
  }

  ngOnInit(){
       this.recaptcha3.init(this.siteKey);
      //  onsubmit
    }
  


  onSubmit2() {
    console.log("vidhi");
    const response = grecaptcha.getResponse();
    if(response != null && response != ''){
      this.testService.getTOken(response).subscribe(response=> {
        console.log(response)
      })
    }
    // if(response != null || response != ''){
    //   this.testService.userVerify().subscribe(response=>{
    //     console.log(response)
    //   })
    // }
    console.log(response);
    // if (response.length === 0) {
    //   this.errormsg = 'Recaptcha not verified. Please try again!';
    //   return;
    // }
    // this.recaptcha3.getToken().then(
    //   token => {
    //     console.log(token)
    //     console.log(this.formData);
    //     this.token = token;
    //     this.testService.userVerify().subscribe(response=>{
    //       console.log(response)
    //     })
    //     this.testService.getTOken(this.token).subscribe(response=> {
    //       console.log(response)
    //     })
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
  }
}
