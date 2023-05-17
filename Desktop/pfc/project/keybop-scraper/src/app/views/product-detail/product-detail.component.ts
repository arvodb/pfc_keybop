import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailInterface } from 'src/app/interfaces/ProductDetailInterface';
import { ProductListInterface } from 'src/app/interfaces/ProductListInterface';
import { ReaderService } from 'src/app/service/readerService.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  constructor(private productRoute: ActivatedRoute, private productService : ReaderService) {}

  ngOnInit() {
    this.productId = parseInt(this.productRoute.snapshot.url[1].path);
    this.getProductDetail();
    this.getProductsFromStorage();
    this.setProductCards();
  }
  public loading : boolean = false;
  public productId : number = 0;
  public productUrl : string = 'www.amazon.es';
  public productPrice : string = '';
  public productDetails : ProductDetailInterface = {
    name:                '',
    price:               '',
    short_description:   '',
    images:              '',
    rating:              '',
    number_of_reviews:   '',
    variants:            '',
    product_description: '',
    sales_rank:          '',
    link_to_all_reviews: '',
    id:                  0
  };
  public productImages : any = [];
  public productList : ProductListInterface[] = []
  public fourProductCards : ProductListInterface[] = [];

  public formatTitle(title : string) : string
  {
    return title.split(' ').filter((value,i) => i < 4).join(' ');
  }

  public formatShortDescription(description : string) : string
  {
    if(description.indexOf('】') < 0) {
      return description.split('.')[0];
    } else {
      let output = description.replaceAll('】','</b><br>').replaceAll('【','<br><b>')
      return output.split('.')[0];
    }
  }
  public formatShortToLongDescription(short : string) : string
  {
    if(short.indexOf('】') > 0) {
      return short.replaceAll('】','】</b><br>').replaceAll('【', '<br><br><b>【');
    } else {
      return short.replaceAll('.','.<br>');
    }
  }

  public getProductDetail() : void
  {
    this.productService.getProductDetailsInfo().subscribe((data : any) => {

      this.productDetails = data[this.productId -1];
      this.productImages = Object.keys(JSON.parse(this.productDetails.images))[0];
      this.productUrl = 'https://www.amazon.es' + this.getProductUrl();
      this.productPrice = this.getProductPrice()

      this.loading = true;
    });
  }

  public setProductCards() : void
  {
    for(let i = 0 ; i < 4 ; i++) {
      const randomIndex = Math.floor(Math.random()*this.productList.length);
      const isAlready = this.fourProductCards.some((product : ProductListInterface) => product.id === this.productList[randomIndex].id)
      if(!isAlready) {
        this.fourProductCards.push(this.productList[randomIndex]);
      } else {
        i--;
      }
    }
    console.log(this.fourProductCards);
  }

  public getProductsFromStorage() : void
  {
    const data = localStorage.getItem('allProducts');
    this.productList = data ? JSON.parse(data) : [];
  }

  public getProductUrl() : string
  {
    const data : any = localStorage.getItem('productDetail');
    if(data){
      return JSON.parse(data).url;
    } else {
      return ''
    }
  }

  public getProductPrice() : string
  {
    const data : any = localStorage.getItem('productDetail');
    if(data){
      return JSON.parse(data).price;
    } else {
      return ''
    }
  }
  public goToAmazon() : void
  {
    window.location.href = this.productUrl;
  }

  public copyAmazonLink() : void
  {
    const elementoTemporal = document.createElement('textarea');
    elementoTemporal.value = this.productUrl;

    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    elementoTemporal.setSelectionRange(0, 99999); // Para dispositivos móviles

    document.execCommand('copy');
    document.body.removeChild(elementoTemporal);
    alert("¡Texto copiado al portapapeles!");
  }


}
