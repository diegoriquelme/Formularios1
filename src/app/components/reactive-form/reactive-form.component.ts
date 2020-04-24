import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myForm: FormGroup;
  constructor(private fb: FormBuilder){  }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      message: ['', [Validators.required, Validators.maxLength(20)]]
    });
  }

  onSubmit() {
    console.log('Valid?', this.myForm.valid); // true or false
    console.log('Name', this.myForm.value.name);
    console.log('Email', this.myForm.value.email);
    console.log('Message', this.myForm.value.message);
  }
}


