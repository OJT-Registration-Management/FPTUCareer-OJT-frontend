import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//index
import { HomeComponent } from './components/home/home.component';

//Login + register (pass qua cũng đc)
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserCompanyRegisterComponent } from './components/user-company-register/user-company-register.component';

// layouts
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
import {AdminComponent} from "./components/admin-components/admin/admin.component";
import {AdminDashboardComponent} from "./components/admin-components/admin-dashboard/admin-dashboard.component";
import {AdminTablesComponent} from "./components/admin-components/admin-tables/admin-tables.component";


const routes: Routes = [

  //index page
  {path: "home", component: HomeComponent },

  //login cho cả 3 role & register chỉ dùng cho company account
  {path: "auth/login", component: UserLoginComponent},
  {path: "auth/company/register", component: UserCompanyRegisterComponent},

  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'tables', component: AdminTablesComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  // mấy file chính để ql mấy dạt ở dưới
  { path: "position", component: PositionComponent },
  { path: "resume", component: ResumeComponent },
  { path: "company", component: CompanyComponent },
  { path: "pages", component: PagesComponent },

  //tổng hợp liên quan đến job và chưa chia role
  { path: "job-list", component: JobListComponent },
  { path: "job-detail", component: JobDetailComponent },
  { path: "job-apply", component: JobApplyComponent },
  { path: "job-add", component: JobAddComponent },
  { path: "job-manage", component: JobManageComponent},
  { path: "job-candidates", component: JobCandidatesComponent},

  //cái này về cv, duyệt cv, up cv, rồi manage nói chung á
  { path: "resume-list", component: ResumeListComponent },
  { path: "resume-detail", component: ResumeDetailComponent },
  { path: "resume-add", component: ResumeAddComponent },
  { path: "resume-manage", component: ResumeManageComponent },

  //ab company, manage duyệt company đồ đó đủ hết chưa role
  { path: "company-list", component: CompanyListComponent },
  { path: "company-detail", component: CompanyDetailComponent },
  { path: "company-add", component: CompanyAddComponent },
  { path: "company-manage", component: CompanyManageComponent },

  //page phụ/ phần about us chắc là lấy thông tin của team mình
  { path: "page-blog", component: PageBlogComponent },
  { path: "page-post", component: PagePostComponent },
  { path: "about", component: AboutComponent },
  { path: "faq", component: FaqComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
