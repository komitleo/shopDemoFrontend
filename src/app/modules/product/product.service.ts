import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:8080/products");
    // [
    //     {
    //       name: "Product 1",
    //       category: "Kategoria 1",
    //       description: "Opis produktu",
    //       price: 9.99,
    //       currency: "PLN"
    //     },
    //     {
    //       name: "Product 1",
    //       category: "Kategoria 1",
    //       description: "Opis produktu",
    //       price: 9.99,
    //       currency: "PLN"
    //     },
    //     {
    //       name: "Product 1",
    //       category: "Kategoria 1",
    //       description: "Opis produktu",
    //       price: 9.99,
    //       currency: "PLN"
    //     },
    //     {
    //       name: "Product 1",
    //       category: "Kategoria 1",
    //       description: "Opis produktu",
    //       price: 9.99,
    //       currency: "PLN"
    //     },
    //     {
    //       name: "Product 1",
    //       category: "Kategoria 1",
    //       description: "Opis produktu",
    //       price: 9.99,
    //       currency: "PLN"
    //     }
    // ]
  }
}
