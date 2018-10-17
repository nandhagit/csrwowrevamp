import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get("/wow/getcategory")
  }

  getSubTypes(category): Observable<any> {
    return this.http.get("/wow/getSubFilters", {params:{category: category}});
  }

}
