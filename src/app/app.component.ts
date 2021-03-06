import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
  this.myForm = this.fb.group({
    name: ['Benedict', Validators.required],
    email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
    message: ['', [Validators.required, Validators.minLength(15)]]
  });
  }
}
