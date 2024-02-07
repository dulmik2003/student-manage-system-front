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

  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }

  ngOnInit(): void {
    this.loadStudent();
  }

  loadStudent() {
    this.http.get("http://localhost:8080/student/get-all")
      .subscribe((data) => {
        this.studentList = data;
        console.log(this.studentList);
      });
  }

  removeStudent(id: BigInteger) {
    this.http.delete(`http://localhost:8080/student/delete/${id}`)
      .subscribe((data) => {
        console.log(data);
        this.loadStudent();
      });
  }
}
