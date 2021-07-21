import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get("/wow/api/category")
  }

  getSubTypes(category): Observable<any> {
    return this.http.get("/wow/api/sub-filters", {params:{category: category}});
  }

}
