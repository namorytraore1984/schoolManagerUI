import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentRegistrationService {

  constructor(private httpClien: HttpClient) {}


  addStrudent(student: any) {
    let options = {
      headers: {}
    };
    this.httpClien.post("url", "bdy", options);
  }

  getStrudent(student: any): Observable<Student>{
    let options = {
      headers: {}
    };
    return this.httpClien.get("url");
  }

  getStrudents(student: any): Observable<Student[]> {
    let options = {
      headers: {}
    };
    return this.httpClien.get<Student[]>("url");
  }
}
