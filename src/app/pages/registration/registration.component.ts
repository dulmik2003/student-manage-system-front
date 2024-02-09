import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  private http;

  public recentSavedStudent: any;

  public student = {
    firstName: null,
    lastName: null,
    contactNumber: null
  };

  

  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }


  saveStudent() {
    this.recentSavedStudent = null;
    this.http.post("http://localhost:8080/student/add", this.student)
      .subscribe((data) => {
        this.recentSavedStudent = data;

        this.student = {
          firstName: null,
          lastName: null,
          contactNumber: null
        };
      });
  }
}
