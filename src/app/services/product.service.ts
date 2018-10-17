import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  saveProduct(product): Observable<any> {
    return this.http.post("/wow/saveproduct", product);
  }

  getProducts(): Observable<any> {
    return this.http.get("/wow/getproducts");
  }

  getProduct(id): Observable<any> {
    return this.http.get("/products/" + id);
  }

  updateProduct(id, product): Observable<any> {
    return this.http.put("/products/" + id, product);
  }

  deleteProduct(id): Observable<any> {
    return this.http.delete("/products/" + id);
  }

  minMaxPrice(): Observable<any> {
    return this.http.get("/wow/minAndMax");
  }
}
