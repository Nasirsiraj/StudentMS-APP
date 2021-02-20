import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.scss']
})
export class SearchStudentComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  searchStudentForm = this.formBuilder.group({
    roll: [null, [Validators.required]],
    reg: [null, [Validators.required]]
  })

  ngOnInit(): void {
  }
  onSubmit(value: any): void{
    console.log(value)
  }

  // getters
  get roll(){
    return this.searchStudentForm.get('roll')
  }
  get reg(){
    return this.searchStudentForm.get('reg')
  }
}
