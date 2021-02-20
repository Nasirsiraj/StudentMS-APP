import { Component, OnInit } from '@angular/core';
import {Student} from '../../model/student.model';

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.scss']
})
export class AllStudentComponent implements OnInit {

  constructor() { }

  students: Student[] = [
    {id: 1, name: "Nasir", roll: 349074, reg: 251645, email: "mdnasir74725@gmail.com", department: "computer", semester: "eight"},
    {id: 2, name: "Nasir", roll: 349074, reg: 251645, email: "mdnasir74725@gmail.com", department: "computer", semester: "eight"},
    {id: 3, name: "Nasir", roll: 349074, reg: 251645, email: "mdnasir74725@gmail.com", department: "computer", semester: "eight"},
    {id: 4, name: "Nasir", roll: 349074, reg: 251645, email: "mdnasir74725@gmail.com", department: "computer", semester: "eight"},
    {id: 5, name: "Nasir", roll: 349074, reg: 251645, email: "mdnasir74725@gmail.com", department: "computer", semester: "eight"},
    {id: 6, name: "Nasir", roll: 349074, reg: 251645, email: "mdnasir74725@gmail.com", department: "computer", semester: "eight"},
    {id: 7, name: "Nasir", roll: 349074, reg: 251645, email: "mdnasir74725@gmail.com", department: "computer", semester: "eight"},
    {id: 8, name: "Nasir", roll: 349074, reg: 251645, email: "mdnasir74725@gmail.com", department: "computer", semester: "eight"},
    {id: 9, name: "Nasir", roll: 349074, reg: 251645, email: "mdnasir74725@gmail.com", department: "computer", semester: "eight"},
    {id: 1, name: "Nasir", roll: 349074, reg: 251645, email: "mdnasir74725@gmail.com", department: "computer", semester: "eight"},
    {id: 2, name: "Nasir", roll: 349074, reg: 251645, email: "mdnasir74725@gmail.com", department: "computer", semester: "eight"},
    {id: 3, name: "Nasir", roll: 349074, reg: 251645, email: "mdnasir74725@gmail.com", department: "computer", semester: "eight"},
    {id: 4, name: "Nasir", roll: 349074, reg: 251645, email: "mdnasir74725@gmail.com", department: "computer", semester: "eight"},
    {id: 5, name: "Nasir", roll: 349074, reg: 251645, email: "mdnasir74725@gmail.com", department: "computer", semester: "eight"},
    {id: 6, name: "Nasir", roll: 349074, reg: 251645, email: "mdnasir74725@gmail.com", department: "computer", semester: "eight"},
    {id: 7, name: "Nasir", roll: 349074, reg: 251645, email: "mdnasir74725@gmail.com", department: "computer", semester: "eight"},
    {id: 8, name: "Nasir", roll: 349074, reg: 251645, email: "mdnasir74725@gmail.com", department: "computer", semester: "eight"},
    {id: 9, name: "Nasir", roll: 349074, reg: 251645, email: "mdnasir74725@gmail.com", department: "computer", semester: "eight"},
    {id: 1, name: "Nasir", roll: 349074, reg: 251645, email: "mdnasir74725@gmail.com", department: "computer", semester: "eight"},
    {id: 2, name: "Nasir", roll: 349074, reg: 251645, email: "mdnasir74725@gmail.com", department: "computer", semester: "eight"},
    {id: 3, name: "Nasir", roll: 349074, reg: 251645, email: "mdnasir74725@gmail.com", department: "computer", semester: "eight"},
    {id: 4, name: "Nasir", roll: 349074, reg: 251645, email: "mdnasir74725@gmail.com", department: "computer", semester: "eight"},
    {id: 5, name: "Nasir", roll: 349074, reg: 251645, email: "mdnasir74725@gmail.com", department: "computer", semester: "eight"},
    {id: 6, name: "Nasir", roll: 349074, reg: 251645, email: "mdnasir74725@gmail.com", department: "computer", semester: "eight"},
    {id: 7, name: "Nasir", roll: 349074, reg: 251645, email: "mdnasir74725@gmail.com", department: "computer", semester: "eight"},
    {id: 8, name: "Nasir", roll: 349074, reg: 251645, email: "mdnasir74725@gmail.com", department: "computer", semester: "eight"},
    {id: 9, name: "Nasir", roll: 349074, reg: 251645, email: "mdnasir74725@gmail.com", department: "computer", semester: "eight"},
    {id: 1, name: "Nasir", roll: 349074, reg: 251645, email: "mdnasir74725@gmail.com", department: "computer", semester: "eight"},
    {id: 2, name: "Nasir", roll: 349074, reg: 251645, email: "mdnasir74725@gmail.com", department: "computer", semester: "eight"},
    {id: 3, name: "Nasir", roll: 349074, reg: 251645, email: "mdnasir74725@gmail.com", department: "computer", semester: "eight"},
    {id: 4, name: "Nasir", roll: 349074, reg: 251645, email: "mdnasir74725@gmail.com", department: "computer", semester: "eight"},
    {id: 5, name: "Nasir", roll: 349074, reg: 251645, email: "mdnasir74725@gmail.com", department: "computer", semester: "eight"},
    {id: 6, name: "Nasir", roll: 349074, reg: 251645, email: "mdnasir74725@gmail.com", department: "computer", semester: "eight"},
    {id: 7, name: "Nasir", roll: 349074, reg: 251645, email: "mdnasir74725@gmail.com", department: "computer", semester: "eight"},
    {id: 8, name: "Nasir", roll: 349074, reg: 251645, email: "mdnasir74725@gmail.com", department: "computer", semester: "eight"},
    {id: 9, name: "Nasir", roll: 349074, reg: 251645, email: "mdnasir74725@gmail.com", department: "computer", semester: "eight"},
  ]

  studentColumns = ["name", "roll", "reg", "department", "semester", "edit", "delete"]
  rippleUnbounded = true
  rippleCentered = false
  rippleRadius = 30

  ngOnInit(): void {
  }

}
