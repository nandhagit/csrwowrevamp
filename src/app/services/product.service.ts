import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  saveProduct(product): Observable<any> {
    return this.http.post('/wow/saveproduct', product);
  }

  getProducts(): Observable<any> {
    return this.http.get('/wow/getproducts');
  }

  getProduct(productId): Observable<any> {
    return this.http.get('/wow/product/', {params: {id: productId}});
  }

  updateProduct(id, product): Observable<any> {
    return this.http.put('/wow/products/' + id, product);
  }

  deleteProduct(id): Observable<any> {
    return this.http.delete('/wow/products/' + id);
  }

  minMaxPrice(): Observable<any> {
    return this.http.get('/wow/minAndMax');
  }

  uploadProduct(data): Observable<any> {
    return this.http.post('/wow/uploadfile', data);
  }
}
