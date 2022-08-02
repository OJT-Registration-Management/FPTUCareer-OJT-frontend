import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-admin-semesters',
  templateUrl: './admin-semesters.component.html',
})
export class AdminSemestersComponent implements OnInit {

  constructor(private service: AdminService) { }

  SemesterList: any = [];

  ngOnInit(): void {
    this.refreshSemesterList();
  }

  refreshSemesterList() {
    this.service.getSemesterList().subscribe(data => {
      this.SemesterList = data;
    });
  }

}
