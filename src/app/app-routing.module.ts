import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { LoginComponent } from './login/login/login.component';
import { NavBarComponent } from './layout/common/nav-bar/nav-bar.component';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './layout/component/dashboard/dashboard.component';
import { PageNotFoundComponent } from './layout/component/page-not-found/page-not-found.component';
import { AuthGuardService } from './service/auth-guard.service';
import { SubdashboardComponent } from './layout/component/dashboard/components/subdashboard/subdashboard.component';
import { Role } from './models/role';
import { AddTicketComponent } from './layout/component/ticket/component/add-ticket/add-ticket.component';
import { ViewTicketComponent } from './layout/component/ticket/component/view-ticket/view-ticket.component';
import { AddEmployeeComponent } from './layout/component/employee/component/add-employee/add-employee.component';
import { EmployeeListComponent } from './layout/component/employee/component/employee-list/employee-list.component';
import { AddBoardComponent } from './layout/component/board/component/add-board/add-board.component';
import { BoardListComponent } from './layout/component/board/component/board-list/board-list.component';
import { CreateCompanyComponent } from './layout/component/admin/component/create-company/create-company.component';
import { CompanyListComponent } from './layout/component/admin/component/company-list/company-list.component';
import { EditTicketComponent } from './layout/component/ticket/component/edit-ticket/edit-ticket.component';

const routes: Routes = [

  {path: '', redirectTo: 'company/2', pathMatch: 'full'},
  // {path: 'pagenotfound' , component: PageNotFoundComponent},
  {path: 'login', component: LoginComponent},

  {path: 'navbar', component: NavBarComponent},
  // {path: 'subdashboard' , component: SubdashboardComponent},



  {
    path: 'company/:companyId', component: DefaultComponent,
      //canActivate: [AuthGuardService],
      // data: { roles: [
      //   Role.Admin,
      //   Role.HR,
      //   Role.Manager,
      //   Role.User
      // ] },

    children: [
      {
        path: 'dashboard', component: DashboardComponent,
        //canActivate: [AuthGuardService]
      },


      {
        path: 'board/:boardId', component: DashboardComponent,
        //canActivate: [AuthGuardService]
      },

      {
        path: 'create/board', component: AddBoardComponent
        //canActivate: [AuthGuardService]
      },

      {
        path: 'list/board', component: BoardListComponent
        //canActivate: [AuthGuardService]
      },

      {
        path: 'create/company', component: CreateCompanyComponent
        //canActivate: [AuthGuardService]
      },

      {
        path: 'company/list', component: CompanyListComponent
        //canActivate: [AuthGuardService]
      },
     
      
      // {
      //   path: 'use/attendance/:id/:name', component: MyAttendanceComponent,
      //   canActivate: [AuthGuardService],
      //   data: { roles: [
      //     Role.Admin,
      //     Role.HR,
      //     //Role.Manager,
      //     //Role.User
      //   ]}
      // },

      {path: '', redirectTo: 'pagenotfound', pathMatch: 'full'},
      
      {
        path: 'pagenotfound' , component: PageNotFoundComponent,
        // canActivate: [AuthGuardService],
        // data: { roles: [
        //   Role.Admin,
        //   Role.HR,
        //   Role.Manager,
        //   Role.User
        // ]}
      },

      {
        path: 'board/:boardId/ticket/create' , component: AddTicketComponent,
        // canActivate: [AuthGuardService],
        // data: { roles: [
        //   Role.Admin,
        //   Role.HR,
        //   Role.Manager,
        //   Role.User
        // ]}
      },

      {
        path: 'board/:boardId/ticket/edit/:ticketId' , component: EditTicketComponent
        // canActivate: [AuthGuardService],
        // data: { roles: [
        //   Role.Admin,
        //   Role.HR,
        //   Role.Manager,
        //   Role.User
        // ]}
      },


      {
        path: 'board/:boardId/ticket/view/:ticketId' , component: ViewTicketComponent,
        // canActivate: [AuthGuardService],
        // data: { roles: [
        //   Role.Admin,
        //   Role.HR,
        //   Role.Manager,
        //   Role.User
        // ]}
      },

      {
        path: 'Add/Employee' , component: AddEmployeeComponent
        // canActivate: [AuthGuardService],
        // data: { roles: [
        //   Role.Admin,
        //   Role.HR,
        //   Role.Manager,
        //   Role.User
        // ]}
      },

      {
        path: 'Employee/List' , component: EmployeeListComponent 
        // canActivate: [AuthGuardService],
        // data: { roles: [
        //   Role.Admin,
        //   Role.HR,
        //   Role.Manager,
        //   Role.User
        // ]}
      },

      // {
      //   path: 'employer/list', component: EmployerListComponent,
      //   canActivate: [AuthGuardService],
      //   data: { roles: [
      //     Role.Admin,
      //     //Role.HR,
      //     //Role.Manager,
      //     //Role.User
      //   ]}
      // },
      {
        path: 'subdashboard' , component: SubdashboardComponent,
        // canActivate: [AuthGuardService],
        // data: { roles: [
        //   Role.Admin,
        //   Role.HR,
        //   Role.Manager,
        //   Role.User
        // ]}
      }
    ],
  },

  ];




//   /comp/:compId/board/:boardId/ticket/:ticketId
// /comp/:compId/board/:boardId/ticket/create
// /comp/:compId/dashboard
// /comp/:comp/board/:boardId

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ToastrModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
