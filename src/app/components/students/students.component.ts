import { Component, OnInit } from '@angular/core';

import studentsData from '../../jsonFiles/allStudents.json';

interface Student {
  id : Number;
  name : String;
  email : String;
  gender : String;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students : Student[];
  constructor() { }

  ngOnInit() {
    this.students = studentsData;
  }

}