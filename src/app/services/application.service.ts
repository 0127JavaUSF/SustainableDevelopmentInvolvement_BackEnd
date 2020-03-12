import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private baseUrl = 'http://localhost:8080/application';

  constructor(private http: HttpClient) {}

  createApplication(application: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/create.app`, application);
  }

  getApplication(listingId: Number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/by-listing.app/?listing_id=${listingId}`);
  }

  getPastApplication(): Observable<Object> {
    return this.http.get(`${this.baseUrl}/by-user.app`);
}
}
