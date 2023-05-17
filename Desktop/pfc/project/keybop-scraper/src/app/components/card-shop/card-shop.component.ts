import { Component,Input } from '@angular/core';
import { ProductListInterface } from 'src/app/interfaces/ProductListInterface';

@Component({
  selector: 'app-card-shop',
  templateUrl: './card-shop.component.html',
  styleUrls: ['./card-shop.component.css']
})
export class CardShopComponent {
  @Input() productOnList : ProductListInterface = {id:0,title:'',image:'',url:'',price:'',rating:''};

  public formatTitle(title : string) : string
  {
    return title.split(' ').filter((value,i) => i < 4).join(' ');
  }
  public saveProductInfo() : void
  {
    localStorage.setItem('productDetail', JSON.stringify(this.productOnList));
  }

}
