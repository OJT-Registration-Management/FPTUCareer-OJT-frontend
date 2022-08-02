import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//index
import { HomeComponent } from './components/home/home.component';

//Login + register (pass qua cũng đc)
import { UserLoginComponent } from './components/user-components/user-login/user-login.component';
import { UserCompanyRegisterComponent } from './components/user-components/user-company-register/user-company-register.component';

// layouts
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
import { CompanyDashboardComponent } from "./components/company-components/company-dashboard/company-dashboard.component";

// pages
import { PageBlogComponent } from './components/page-components/page-blog/page-blog.component';
import { PagePostComponent } from './components/page-components/page-post/page-post.component';
import { AboutComponent } from './components/about/about.component';
import { FaqComponent } from './components/faq/faq.component';

// admin
import { AdminComponent } from "./components/admin-components/admin/admin.component";
import { AdminDashboardComponent } from "./components/admin-components/admin-dashboard/admin-dashboard.component";
import { AdminTablesComponent } from "./components/admin-components/admin-tables/admin-tables.component";
import { AdminSemestersComponent } from './components/admin-components/admin-semesters/admin-semesters.component';
import { AddSemestersComponent } from './components/admin-components/admin-semesters/add-semesters/add-semesters.component';

// student
import { UserStudentComponent } from "./components/user-components/user-student/user-student.component";
import { UserProfileComponent } from "./components/user-components/user-profile/user-profile.component";
import { UserJobAppliedComponent } from "./components/user-components/user-job-applied/user-job-applied.component";

const routes: Routes = [

  //login cho cả 3 role
  { path: "login", component: UserLoginComponent },

  //admin role
  {
    path: 'admin',
    component: AdminComponent,
    children: [


    ],
  },

  //student role
  {
    path: 'student',
    component: UserStudentComponent,
    children: [
    ],
  },
  //company role
  {
    path: "company",
    component: CompanyComponent,
    children: [


    ],
  },


  //admin component


  //gỡ rout tạm thời
  { path: "job-apply", component: JobApplyComponent },
  { path: "user-job-applied", component: UserJobAppliedComponent },
  { path: "user-profile", component: UserProfileComponent },
  { path: "job-manage", component: JobManageComponent },
  { path: "job-add", component: JobAddComponent },
  { path: "resume-manage", component: ResumeManageComponent },
  { path: 'tables', component: AdminTablesComponent },
  { path: "company-dashboard", component: CompanyDashboardComponent },
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: "company-manage", component: CompanyManageComponent },
  { path: "company-add", component: CompanyAddComponent },
  { path: "semester-list", component: AdminSemestersComponent },
  { path: "add-semester", component: AddSemestersComponent },


  // mấy file chính để ql mấy dạt ở dưới
  { path: "position", component: PositionComponent },
  { path: "resume", component: ResumeComponent },
  { path: "company", component: CompanyComponent },
  { path: "pages", component: PagesComponent },

  // non-auth page
  { path: "company-list", component: CompanyListComponent },
  { path: "company-detail", component: CompanyDetailComponent },
  { path: "job-list", component: JobListComponent },
  { path: "job-detail", component: JobDetailComponent },
  { path: "resume-list", component: ResumeListComponent },
  { path: "resume-detail", component: ResumeDetailComponent },
  { path: "resume-add", component: ResumeAddComponent },
  { path: "page-blog", component: PageBlogComponent },
  { path: "page-post", component: PagePostComponent },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "faq", component: FaqComponent },

  // Last choice !
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
