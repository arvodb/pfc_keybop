import { Injectable } from '@angular/core';
import { ReaderService } from './readerService.service';

import { ProductListInterface } from '../interfaces/ProductListInterface';
import { ProductDetailInterface } from '../interfaces/ProductDetailInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private productService: ReaderService) { }

  public getProductList() : ProductListInterface[]
  {
      let productListFormated : ProductListInterface[] = []
      this.productService.getProductListInfo().subscribe((data : any) => {
        data.map((eachProduct : any) => {
          return productListFormated.push(
            {
              id: parseInt(eachProduct.id),
              title: eachProduct.title,
              image: eachProduct.image,
              url: eachProduct.url,
              rating: eachProduct.rating,
              price: eachProduct.price,
            }
          );
        });
        //console.log(productListFormated);
      });

      return productListFormated;
    }
}
