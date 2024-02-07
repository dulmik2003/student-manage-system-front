import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  private http;

  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }

  public student = {
    "firstName": null,
    "lastName": null,
    "contactNumber": null
  }

  createStudent() {
    this.http.post("http://localhost:8080/student/add", this.student)
      .subscribe((data) => {
        console.log(data);
      })
  }
}
