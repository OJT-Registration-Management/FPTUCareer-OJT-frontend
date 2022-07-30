import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//index
import { HomeComponent } from './components/home/home.component';

//Login + register (pass qua cũng đc)
import { UserLoginComponent } from './components/user-components/user-login/user-login.component';
import { UserCompanyRegisterComponent } from './components/user-components/user-company-register/user-company-register.component';

//layout
import { PositionComponent } from './components/position/position.component';
import { ResumeComponent } from './components/resume-components/resume/resume.component';
import { CompanyComponent } from './components/company-components/company/company.component';
import { PagesComponent } from './components/page-components/pages/pages.component';

// position
import { JobListComponent } from './components/job-components/job-list/job-list.component';
import { JobDetailComponent } from './components/job-components/job-detail/job-detail.component';
import { JobApplyComponent } from './components/job-components/job-apply/job-apply.component';
import { JobAddComponent } from './components/job-components/job-add/job-add.component';
import { JobManageComponent } from './components/job-components/job-manage/job-manage.component';
import { JobCandidatesComponent } from './components/job-components/job-candidates/job-candidates.component';

// resume
import { ResumeListComponent } from './components/resume-components/resume-list/resume-list.component';
import { ResumeDetailComponent } from './components/resume-components/resume-detail/resume-detail.component';
import { ResumeAddComponent } from './components/resume-components/resume-add/resume-add.component';
import { ResumeManageComponent } from './components/resume-components/resume-manage/resume-manage.component';

// company
import { CompanyListComponent } from './components/company-components/company-list/company-list.component';
import { CompanyDetailComponent } from './components/company-components/company-detail/company-detail.component';
import { CompanyAddComponent } from './components/company-components/company-add/company-add.component';
import { CompanyManageComponent } from './components/company-components/company-manage/company-manage.component';

// pages
import { PageBlogComponent } from './components/page-components/page-blog/page-blog.component';
import { PagePostComponent } from './components/page-components/page-post/page-post.component';
import { AboutComponent } from './components/about/about.component';
import { FaqComponent } from './components/faq/faq.component';

// student
import { UserStudentComponent } from './components/user-components/user-student/user-student.component';

//nav, footer
import { FooterComponent } from './components/footer/footer.component'

//admin
import { AdminComponent } from './components/admin-components/admin/admin.component';
import { AdminDashboardComponent } from './components/admin-components/admin-dashboard/admin-dashboard.component';
import { AdminTablesComponent } from './components/admin-components/admin-tables/admin-tables.component';
import { CompanyDashboardComponent } from './components/company-components/company-dashboard/company-dashboard.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { NavAdminComponent } from './nav/nav-admin/nav-admin.component';
import { NavCompanyComponent } from './nav/nav-company/nav-company.component';
import { NavCommonComponent } from './nav/nav-common/nav-common.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PositionComponent,
    ResumeComponent,
    CompanyComponent,
    PagesComponent,
    JobListComponent,
    JobDetailComponent,
    JobApplyComponent,
    JobAddComponent,
    JobManageComponent,
    ResumeListComponent,
    ResumeDetailComponent,
    ResumeAddComponent,
    ResumeManageComponent,
    CompanyListComponent,
    CompanyDetailComponent,
    CompanyAddComponent,
    CompanyManageComponent,
    PageBlogComponent,
    PagePostComponent,
    AboutComponent,
    FaqComponent,
    UserLoginComponent,
    UserCompanyRegisterComponent,
    JobCandidatesComponent,
    FooterComponent,
    AdminComponent,
    AdminDashboardComponent,
    AdminTablesComponent,
    CompanyDashboardComponent,
    UserStudentComponent,
    NavAdminComponent,
    NavCompanyComponent,
    NavCommonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
