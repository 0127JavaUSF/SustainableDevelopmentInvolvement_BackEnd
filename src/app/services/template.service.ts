import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  private baseUrl = 'http://localhost:8080/template';

  constructor(private http: HttpClient) {}

  createTemplate(template: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/create.app`, template);
  }

  getTemplate(listingId: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}.app/?listing_id=${listingId}`);
  }
}
