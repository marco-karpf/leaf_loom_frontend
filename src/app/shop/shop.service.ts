import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Pagination} from "../shared/models/pagination";
import {Product} from "../shared/models/products";
import {Type} from "../shared/models/type";
import {Pot} from "../shared/models/pot";
import {Observable} from "rxjs";
import {ShopParams} from "../shared/models/shopParams";
import {Review} from "../shared/models/reviews";

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseurl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) {
  }

  getProducts(shopParams: ShopParams): Observable<Pagination<Product[]>> {
    let params = new HttpParams()
    if (shopParams.typeId > 0) {
      params = params.append('productTypeId', shopParams.typeId)
    }
    params = params.append('sort', shopParams.sort);
    params = params.append('pageIndex', shopParams.pageNumber);
    params = params.append('pageSize', shopParams.pageSize);

    if (shopParams.search) {
      params = params.append('search', shopParams.search)
    }
    return this.http.get<Pagination<Product[]>>(this.baseurl + 'products', {params});
  }
  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.baseurl + 'products/product/' + id);
  }

  getProductTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(this.baseurl + 'products/types');
  }

  getPots(): Observable<Pot[]> {
    return this.http.get<Pot[]>(this.baseurl + 'products/pots');
  }
  getReviewsByProductsId(id: number): Observable<Pagination<Review[]>> {
    return this.http.get<Pagination<Review[]>>(this.baseurl + 'products/reviews?productId=' + id);
  }

  postReview(review: Review): Observable<Review> {
    return this.http.post<Review>(this.baseurl + 'products/reviews', review);
  }

}
