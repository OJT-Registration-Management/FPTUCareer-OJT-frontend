import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  readonly APIUrl = "https://localhost:5001/api";

  constructor(private http: HttpClient) { }

  // ---- Company -----
  getCompanyList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Company/GetCompanyList');
  }

  addCompany(val: any) {
    return this.http.post(this.APIUrl + '/Company/AddCompany', val);
  }

  // update có thêm 1 tham số id ở cuối url
  updateCompany(val: any) {
    return this.http.put(this.APIUrl + '/Company/UpdateCompany/', val);
  }

  // chưa có API
  deleteCompany(val: any) {
    return this.http.delete(this.APIUrl + '' + val);
  }


  // ---- Job -----
  getJobList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Job/GetJobList');
  }

  addJob(val: any) {
    return this.http.post(this.APIUrl + 'Job/PostNewJob/register', val);
  }

  // update có thêm 1 tham số id ở cuối url
  updateJob(val: any) {
    return this.http.put(this.APIUrl + '/Job/UpdateJob/', val);
  }

  // chưa có API
  deleteJob(val: any) {
    return this.http.delete(this.APIUrl + '' + val);
  }

  // ---- Semester -----
  getSemesterList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Semester/GetSemesterList');
  }

  addSemester(val: any) {
    return this.http.post(this.APIUrl + '/Semester/AddNewSemester/add', val);
  }

  // update có thêm 1 tham số id ở cuối url
  updateSemester(val: any) {
    return this.http.put(this.APIUrl + '/Semester/UpdateSemester/', val);
  }

  // delete có thêm 1 tham số id ở cuối url
  deleteSemester(val: any) {
    return this.http.delete(this.APIUrl + '/Semester/DeleteSemester/' + val);
  }


}
