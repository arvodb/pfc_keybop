import { Component } from '@angular/core';
import { ProductListInterface } from 'src/app/interfaces/ProductListInterface';
import { ProductService } from 'src/app/service/product-service.service';
import { ReaderService } from 'src/app/service/readerService.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent {

  constructor(private productService : ReaderService) {}
  ngOnInit() {
    this.getProductList();
  }
  public loading : boolean = false;
  public productList : ProductListInterface[] = [];
  public paginationNum : number = 1;
  public minView : number = 0;
  public maxView : number = 8;

  public fourProductCards : ProductListInterface[] = []


  public pagination(bool : boolean) : void {

      if(bool && this.paginationNum < 8){
          this.minView += 8;
          this.maxView += 8;
          this.paginationNum ++;
      } else if(this.minView !== 0 && !bool) {
        this.minView -= 8;
        this.maxView -= 8;
        this.paginationNum --;
      }

  }

  public getProductList() : void
  {
    this.productService.getProductListInfo().subscribe((data : any) => {
      data.map((eachProduct : any) => {
        return this.productList.push(
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
      this.loading = true;
    });
  }
  public useThisFilter() : void
  {

  }




  public getProductsFromStorage() : void
  {
    const data = localStorage.getItem('allProducts');
    this.productList = data ? JSON.parse(data) : [];
    console.log(this.productList);
  }
}
