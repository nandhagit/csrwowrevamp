import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  saveProduct(product): Observable<any>{
    return this.http.post("http://localhost:8080/wow/saveproduct", product);
  }

  getProducts(): Observable<any> {
    return this.http.get("http://localhost:8080/wow/getproducts");
  }

  getProduct(id): Observable<any> {
    return this.http.get("http://localhost:8080/products/"+id);
  }

  updateProduct(id, product): Observable<any> {
    return this.http.put("http://localhost:8080/products/"+id, product);
  }

  deleteProduct(id):Observable<any>{
    return this.http.delete("http://localhost:8080/products/"+id);
  }

  minMaxPrice():Observable<any>{
    return this.http.get("http://localhost:8080/wow/minAndMax");
  }
}
