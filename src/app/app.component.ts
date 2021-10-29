import { Component, Inject, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'ngDynamicInput';
  // dynamicForm: FormGroup;

  constructor(
    // private formBuilder: FormBuilder
  ){}

  ngOnInit(): void { 
    // this.dynamicForm = this.formBuilder.group({
    //   name: [ '' ],
    //   address: [''],
    // });
  }

  addRow(event){

  }


}
