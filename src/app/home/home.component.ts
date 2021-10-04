import { Component, OnInit } from '@angular/core';
import { TestService } from '../service/test.service';
declare var grecaptcha: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  errormsg!: string;
 
  constructor(private testSevice: TestService) {
  }

  ngOnInit() {
    // this.testSevice.getReload().subscribe(response=>{
    //   console.log(response)
    // })
  }

  onSubmit() {
      const response = grecaptcha.getResponse();
      const response2 = grecaptcha.execute().then((token: any) =>{
        console.log(token)
      });
      console.log(response)
      console.log(response2)
      if (response.length === 0) {
        console.log(response)
        this.errormsg = 'Recaptcha not verified. Please try again!';
        return;
      }
      //
      // Rest of the code goes here
      //
  }

}
