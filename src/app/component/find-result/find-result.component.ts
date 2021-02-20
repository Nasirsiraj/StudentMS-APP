import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-find-result',
  templateUrl: './find-result.component.html',
  styleUrls: ['./find-result.component.scss']
})
export class FindResultComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder
  ) { }

  searchStudentForm = this.formBuilder.group({
    roll: [null, [Validators.required, Validators.min(100000), Validators.max(9999999999)]],
    reg: [null, [Validators.required, Validators.min(100000), Validators.max(9999999999)]]
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
