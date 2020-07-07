import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {SD_StringExternalisation} from 'src/app/models/StringExternalisation';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {  

  constructor(private http:HttpClient) { }

  private  stringExternalisation  = new SD_StringExternalisation();
  private base_url = this.stringExternalisation.base_url; 
  
  createProjectReference(project:Object): Observable<Object>{
    return this.http.post(`${this.base_url}/projects`, project );
  }

  getAllProjects():Observable<any>{
    return this.http.get(`${this.base_url}/projects`);
  }

}
