import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  saveProduct(product): Observable<any> {
    return this.http.post('/wow/api/products', product);
  }

  getProducts(): Observable<any> {
    return this.http.get('/wow/api/products');
  }

  getProduct(productId): Observable<any> {
    return this.http.get('/wow/api/products/one/', {params: {id: productId}});
  }

  updateProduct(id, product): Observable<any> {
    return this.http.put('/wow/api/products/', product);
  }

  deleteProduct(id): Observable<any> {
    return this.http.delete('/wow/api/products/' + id);
  }

  minMaxPrice(): Observable<any> {
    return this.http.get('/wow/api/minAndMax');
  }

  uploadProduct(data): Observable<any> {
    return this.http.post('/wow/api/uploadfile', data);
  }
}
