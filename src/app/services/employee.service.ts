import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {SD_StringExternalisation} from 'src/app/models/StringExternalisation';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  constructor(private http:HttpClient ) { }

  private  stringExternalisation  = new SD_StringExternalisation();
  private base_url=this.stringExternalisation.base_url;

  createEmployeeInvolvement(employeeProfile:Object):Observable<Object>{
      return this.http.post(`${this.base_url}/employees`,employeeProfile);
  }
}
