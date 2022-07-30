import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//index
import { HomeComponent } from './components/home/home.component';

//Login + register (pass qua cũng đc)
import { UsersComponent } from './components/users/users.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserCompanyRegisterComponent } from './components/user-company-register/user-company-register.component';

//layout
import { PositionComponent } from './components/position/position.component';
import { ResumeComponent } from './components/resume/resume.component';
import { CompanyComponent } from './components/company/company.component';
import { PagesComponent } from './components/pages/pages.component';


// position 
import { JobListComponent } from './components/job-list/job-list.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { JobApplyComponent } from './components/job-apply/job-apply.component';
import { JobAddComponent } from './components/job-add/job-add.component';
import { JobManageComponent } from './components/job-manage/job-manage.component';
import { JobCandidatesComponent } from './components/job-candidates/job-candidates.component';

// resume 
import { ResumeListComponent } from './components/resume-list/resume-list.component';
import { ResumeDetailComponent } from './components/resume-detail/resume-detail.component';
import { ResumeAddComponent } from './components/resume-add/resume-add.component';
import { ResumeManageComponent } from './components/resume-manage/resume-manage.component';

// company 
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { CompanyAddComponent } from './components/company-add/company-add.component';
import { CompanyManageComponent } from './components/company-manage/company-manage.component';

// pages 
import { PageBlogComponent } from './components/page-blog/page-blog.component';
import { PagePostComponent } from './components/page-post/page-post.component';
import { AboutComponent } from './components/about/about.component';
import { FaqComponent } from './components/faq/faq.component';

//nav, footer
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PositionComponent,
    ResumeComponent,
    CompanyComponent,
    PagesComponent,
    UsersComponent,
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
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
