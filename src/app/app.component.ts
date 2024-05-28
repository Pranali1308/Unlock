import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  allData: any;
  signupform: any;
  form1 = false;
  open = false;

  constructor(private api: ServiceService, private frombuilder: FormBuilder) {
    //this.getData1();
  }
  ngOnInit(): void {


    this.signupform = this.frombuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneno: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      country: ['', Validators.required],
    })
    this.form1 = true;

  }

  signup() {
    return this.api.saveData(this.signupform.value).subscribe((res) => {
      console.log(res);
      this.signupform.reset();
      this.api.getData().subscribe((res1: any) => {
        console.log(res1);
      });
    })
  }
  getData1() {
    this.api.getData().subscribe((res: any) => {
      this.allData = res;
      console.log(this.allData);
    });
  }
  signup1() {
    this.open = !this.open;
  }

}
