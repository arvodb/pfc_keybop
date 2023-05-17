import { Component, Input } from '@angular/core';
import { ProductListInterface } from 'src/app/interfaces/ProductListInterface';

@Component({
  selector: 'app-card-sidebar',
  templateUrl: './card-sidebar.component.html',
  styleUrls: ['./card-sidebar.component.css']
})
export class CardSidebarComponent {
  constructor() {}
  ngOnInit() {}

  @Input() product : ProductListInterface = {
    id:          0,
    title:      '',
    image:      '',
    url:        '',
    rating:     '',
    price:      ''
  };

  public redirect() : void {
    const oldUrl = window.location.href;
    let newUrl = oldUrl.split('/').slice(0,-1);
    console.log(newUrl.join('/').concat('/' + this.product.id.toString()));
    window.location.href = newUrl.join('/').concat('/' + this.product.id.toString());
  }
}
/*


  */
