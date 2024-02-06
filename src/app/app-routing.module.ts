import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { StudentListComponent } from './pages/student-list/student-list.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "registration",
    component: RegistrationComponent
  },
  {
    path: "student-list",
    component: StudentListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
