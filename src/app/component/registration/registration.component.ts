import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Student} from '../../model/student.model';
import {StudentService} from '../../service/student.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService
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
    console.log(student)
  }

  ngOnInit(): void {
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
