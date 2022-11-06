import { Injectable } from '@angular/core';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[]{
    return[
        {
          name: "Product 1",
          category: "Kategoria 1",
          description: "Opis produktu",
          price: 9.99,
          currency: "PLN"
        },
        {
          name: "Product 1",
          category: "Kategoria 1",
          description: "Opis produktu",
          price: 9.99,
          currency: "PLN"
        },
        {
          name: "Product 1",
          category: "Kategoria 1",
          description: "Opis produktu",
          price: 9.99,
          currency: "PLN"
        },
        {
          name: "Product 1",
          category: "Kategoria 1",
          description: "Opis produktu",
          price: 9.99,
          currency: "PLN"
        },
        {
          name: "Product 1",
          category: "Kategoria 1",
          description: "Opis produktu",
          price: 9.99,
          currency: "PLN"
        }
    ]
  }
}
