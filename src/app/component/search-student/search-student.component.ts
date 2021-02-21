import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Student} from '../../model/student.model';
import {StudentService} from '../../service/student.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.scss']
})
export class SearchStudentComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private snackBar: MatSnackBar
  ) { }

  student: Student | null = null
  isSubmitted = false
  isSucceed = false
  isFailed = false
  feedbackMessage = ""

  searchStudentForm = this.formBuilder.group({
    roll: [null, [Validators.required, Validators.min(100000), Validators.max(9999999999)]],
    reg: [null, [Validators.required, Validators.min(100000), Validators.max(9999999999)]]
  })

  ngOnInit(): void {
  }
  onSubmit(value: any): void{
    this.isSubmitted = true
    try {

    }catch (e){
      console.log(e.message)
      this.showSnackBar('Error Occurred')
    }
    this.searchStudentForm.reset()
  }
  showSnackBar(message: string): void{
    this.snackBar.open(message, 'Close', {duration: 5000})
  }
  refreshPage(): void{
    window.location.reload()
  }
  // getters
  get roll(){
    return this.searchStudentForm.get('roll')
  }
  get reg(){
    return this.searchStudentForm.get('reg')
  }
}
