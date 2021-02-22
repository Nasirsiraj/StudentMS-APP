import { Component, OnInit } from '@angular/core';
import {Student} from '../../model/student.model';
import {StudentService} from '../../service/student.service';

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.scss']
})
export class AllStudentComponent implements OnInit {

  constructor(
    private studentService: StudentService
  ) { }

  isLoading = true
  students: Student[] = []
  isStudentsEmpty: boolean = (this.students = []) ? true : false
  studentColumns = ["name", "roll", "reg", "department", "semester", "edit", "delete"]
  rippleUnbounded = true
  rippleCentered = false
  rippleRadius = 30

  ngOnInit(): void {
    this.updateStudents()
  }

  updateStudents(): void{
    this
      .studentService
      .getAllStudent()
      .subscribe(
        (response) => {
          this.isLoading = false
          this.students = response
          this.isStudentsEmpty = (this.students = []) ? true : false
        },
        (error) => {
          this.students = []
          this.isStudentsEmpty = (this.students = []) ? true : false
          this.isLoading = false
          console.log('Fetching all students failed')
        }
      )
  }
}
