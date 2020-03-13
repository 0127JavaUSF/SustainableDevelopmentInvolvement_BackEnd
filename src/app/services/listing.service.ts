import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  private baseUrl = 'http://localhost:8080/listing';

  constructor(private http: HttpClient) {}

  getListing(id: Number): Observable<Object> {
      return this.http.get(`${this.baseUrl}.app/?id=${id}`, { withCredentials: true });
  }

  search(page: Number, type: Number, city: String): Observable<Object> {
    return this.http.get(`${this.baseUrl}/search.app/?page=${page}&type=${type}&city=${city}`, { withCredentials: true });
  }

  getPastListing(): Observable<Object> {
    return this.http.get(`${this.baseUrl}/find-by-user.app`, { withCredentials: true });
}

  createListing(listing: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, listing, { withCredentials: true });
  }

  // getAllListings(): Observable<any> {
  //     return this.http.get(`${this.baseUrl}`);
  // }
}
