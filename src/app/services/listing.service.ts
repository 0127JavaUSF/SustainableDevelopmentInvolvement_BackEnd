import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  private baseURL = 'http://localhost:8080/Project2/api/v1/newlisting'
  constructor(private http: HttpClient) { }

  createListing(listing: Object):Observable<Object>{
    return this.http.post('${this.baseUrl}', listing);

  }



}
