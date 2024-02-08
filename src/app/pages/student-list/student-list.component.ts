import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  private http;

  public studentList: any;

  public selectedStudent: any;



  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }


  ngOnInit(): void {
    this.loadStudentList();
  }


  loadStudentList() {
    this.http.get("http://localhost:8080/student/get-all")
      .subscribe((data) => {
        this.studentList = data;
      });
  }


  removeStudent() {
    this.http.delete(`http://localhost:8080/student/delete/${this.selectedStudent.id}`)
      .subscribe((data) => {
        this.loadStudentList();
        this.selectedStudent = null;
      });
  }


  updateStudentInfo() {
    this.http.patch("http://localhost:8080/student/update", this.selectedStudent)
      .subscribe((data) => {
        this.loadStudentList();
        this.selectedStudent = null;
      });
  }


  setSelectedStudent(student: any) {
    this.selectedStudent = student;
  }
}
