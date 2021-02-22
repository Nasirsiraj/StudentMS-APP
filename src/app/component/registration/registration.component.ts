import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Student} from '../../model/student.model';
import {StudentService} from '../../service/student.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private snackBar: MatSnackBar
  ) { }
  departments = [
    'Computer',
    'Civil',
    'Electrical',
    'Electronics'
  ]
  semesters = [
    'First',
    'Second',
    'Third',
    'Fourth',
    'Fifth',
    'Seventh',
    'Eighth'
  ]
  isSubmitted = false
  isSucceed = false
  isFailed = false
  isLoading = false
  feedbackMessage = ""
  student: Student | null = null

  registrationForm = this.formBuilder.group({
    id: [null,],
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    roll: [null, [Validators.required, Validators.min(100000), Validators.max(9999999999)]],
    reg: [null, [Validators.required, Validators.min(100000), Validators.max(9999999999)]],
    email: ['', [Validators.required, Validators.email]],
    department: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    semester: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]]
  });
  onSubmit(student: Student): void{
    this.isSubmitted = true
    this.isLoading = true
    this
      .studentService
      .postOneStudent(student)
      .subscribe(
        (response) => {
          if(response == null){
            // failed
            // duplicate roll no.
            this.isSucceed = false
            this.isFailed = true
            this.isLoading = false
            this.feedbackMessage = "Duplicate Roll No."
            this.showSnackBar(this.feedbackMessage, "Close")
          }else{
            // succeed
            this.isSucceed = true
            this.isFailed = false
            this.isLoading = false
            this.feedbackMessage = "Registration Successful!"
            this.showSnackBar(this.feedbackMessage, "Done")
            this.student = response
          }
        },
        (error) => {
          // failed
          this.isSucceed = false
          this.isFailed = true
          this.isLoading = false
          this.feedbackMessage = "Error Occurred!"
          this.showSnackBar(this.feedbackMessage, "Close")
        }
      )
    this.registrationForm.reset()
  }

  ngOnInit(): void {
  }

  showSnackBar(message: string, action: string): void{
    this.snackBar.open(message, action, {duration: 5000})
  }
  refreshPage(): void{
    window.location.reload()
  }
  get id(){
    return this.registrationForm.get('id')
  }
  get name(){
    return this.registrationForm.get('name')
  }
  get roll(){
    return this.registrationForm.get('roll')
  }
  get reg(){
    return this.registrationForm.get('reg')
  }
  get email(){
    return this.registrationForm.get('email')
  }
  get department(){
    return this.registrationForm.get('department')
  }
  get semester(){
    return this.registrationForm.get('semester')
  }
}
