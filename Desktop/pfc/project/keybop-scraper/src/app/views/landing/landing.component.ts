import { Component } from '@angular/core';
import { ProductListInterface } from 'src/app/interfaces/ProductListInterface';
import { ReaderService } from 'src/app/service/readerService.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {


  public loading : boolean = false;
  public productList : ProductListInterface[] = [];
  public productIdsPrinted : ProductListInterface[] = [];
  public lastIndex: number = 4;
  public initIndex: number = 0;
  public firstSectionFourProducts : ProductListInterface[] = [];
  public secondSectionFourProducts : ProductListInterface[] = [];

  constructor(private productService : ReaderService) {

  }

  ngOnInit() {
    this.getProductList()
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
      this.saveAllProducts();
      this.asignArrays();
      console.log(this.loading);
    });
  }

  private asignArrays() : void
  {
    this.firstSectionFourProducts = this.giveMeProducts(4);
    this.secondSectionFourProducts = this.giveMeProducts(4);
  }

  public giveMeProducts(num : number) : ProductListInterface[]
  {
    const toBePrintedProducts : ProductListInterface[] = this.productList.splice(this.initIndex,num);
    this.productIdsPrinted = this.productIdsPrinted.concat(toBePrintedProducts);
    console.log("impresos =>", toBePrintedProducts);
    console.log("guardados => ", this.productIdsPrinted);
    this.initIndex += num-1;
    return toBePrintedProducts;
  }

  public saveAllProducts() : void
  {
    localStorage.setItem('allProducts', JSON.stringify(this.productList));
  }


}
