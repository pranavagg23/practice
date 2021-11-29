import { Component, OnInit } from '@angular/core';
import { Course } from '../model/Course';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  courseList: Course[];
  constructor() {
    console.log('constructor');
    this.courseList = [
      { code: 1, name: 'Angular', desc: 'Angular Course', price: 10000 },
      { code: 2, name: 'React', desc: 'React Course', price: 12000 },
      { code: 3, name: 'J2EE', desc: 'Java Enterprise Edition', price: 15000 },
    ];
  }
  ngOnInit(): void {
    console.log('ngOnInit');
  }
}
