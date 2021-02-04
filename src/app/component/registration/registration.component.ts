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

  registrationForm = this.formBuilder.group({
    id: [null,],
    name: ['', [Validators.required]],
    roll: [null, [Validators.required]],
    reg: [null, [Validators.required]],
    email: ['', [Validators.required]],
    department: ['', [Validators.required]],
    semester: ['', [Validators.required]]
  });
  onSubmit(student: Student): void{
    console.log(student)
    // if(student === null){
    //   this.studentService.postOneStudent(student).subscribe(
    //     (response => {
    //       console.log(response)
    //     }),
    //     (error => {
    //       console.log(error as Error)
    //     })
    //   )
    // }
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
