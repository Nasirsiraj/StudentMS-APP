import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Result} from '../../model/result.model';

@Component({
  selector: 'app-add-result',
  templateUrl: './add-result.component.html',
  styleUrls: ['./add-result.component.scss']
})
export class AddResultComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
  ) { }
  isSubmitted = false

  addResultForm = this.formBuilder.group({
    id: [null],
    roll: [null, [Validators.required, Validators.min(100000), Validators.max(9999999999)]],
    bangla: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
    english: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
    math: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
    computer: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
    physics: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
    chemistry: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
    biology: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
  })

  ngOnInit(): void {
  }
  onSubmit(value: Result): void{
    this.isSubmitted = true
    try{


    }catch (e){

    }
    this.addResultForm.reset()
  }

  // getters
  get id(){
    return this.addResultForm.get('id')
  }
  get roll(){
    return this.addResultForm.get('roll')
  }
  get bangla(){
    return this.addResultForm.get('bangla')
  }
  get english(){
    return this.addResultForm.get('english')
  }
  get math(){
    return this.addResultForm.get('math')
  }
  get computer(){
    return this.addResultForm.get('computer')
  }
  get physics(){
    return this.addResultForm.get('physics')
  }
  get chemistry(){
    return this.addResultForm.get('chemistry')
  }
  get biology(){
    return this.addResultForm.get('biology')
  }
}
