import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-company-manage',
  templateUrl: './company-manage.component.html',

})
export class CompanyManageComponent implements OnInit {

  constructor(private service: AdminService) { }

  CompanyList: any = [];

  ngOnInit(): void {
    this.refreshCompanyList();
  }

  refreshCompanyList() {
    this.service.getCompanyList().subscribe(data => {
      this.CompanyList = data;
    });
  }

}
