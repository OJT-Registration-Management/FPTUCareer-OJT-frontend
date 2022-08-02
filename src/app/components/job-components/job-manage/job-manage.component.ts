import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-job-manage',
  templateUrl: './job-manage.component.html',
})
export class JobManageComponent implements OnInit {

  constructor(private service: AdminService) { }

  JobList: any = [];

  ngOnInit(): void {
    this.refreshJobList();
  }

  refreshJobList() {
    this.service.getJobList().subscribe(data => {
      this.JobList = data;
    });
  }

}
