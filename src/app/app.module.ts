import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSidenavModule,
  MatToolbarModule,
   MatListModule,
    MatButtonModule,
     MatIconModule,
     MatDividerModule,
     MatNativeDateModule,
      MatDatepickerModule,
     MatFormFieldModule,
    MatFormFieldControl } from '@angular/material';

import { ToastrModule } from 'ngx-toastr';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { RouterModule } from '@angular/router';
// import { DataTablesModule } from 'angular-datatables';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LoginService } from './login/services/login.service';



import { DefaultComponent } from './layout/default/default.component';
import { NavBarComponent } from './layout/common/nav-bar/nav-bar.component';
import { SideBarComponent } from './layout/common/side-bar/side-bar.component';
import { FooterComponent } from './layout/common/footer/footer.component';
import { DashboardComponent } from './layout/component/dashboard/dashboard.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AuthService } from './service/auth.service';
import { AuthGuardService } from './service/auth-guard.service';
import { TokenizedInterceptor } from './TokenizedInterceptor/Tokenized-Interceptor';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { PageNotFoundComponent } from './layout/component/page-not-found/page-not-found.component';
import { CustomToastrService } from './service/customToastr.service';
import { ErrorHandlingService } from './service/error-handling.service';
import { GraphComponent } from './layout/component/dashboard/components/graph/graph.component';
import { SubdashboardComponent } from './layout/component/dashboard/components/subdashboard/subdashboard.component';
import { PopoverModule } from 'ngx-smart-popover';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DefaultComponent,
    NavBarComponent,
    SideBarComponent,
    FooterComponent,
    DashboardComponent,
    PageNotFoundComponent,
    GraphComponent,
    SubdashboardComponent,

  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    // DataTablesModule,
    MatSelectModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatDividerModule,
    // FlexLayoutModule,
    PopoverModule,

    HttpClientModule,

    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    CKEditorModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {
        autoDismiss: true

      }

    )


  ],
  entryComponents:[],

  providers: [
      {provide: LocationStrategy, useClass: HashLocationStrategy},
    LoginService,
    AuthGuardService,
    AuthService,
    CustomToastrService,
    ErrorHandlingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }