import { Component,Input } from '@angular/core';
import { ProductListInterface } from 'src/app/interfaces/ProductListInterface';

@Component({
  selector: 'app-card-landing',
  templateUrl: './card-landing.component.html',
  styleUrls: ['./card-landing.component.css']
})
export class CardLandingComponent {

  @Input() productOnList : ProductListInterface = {id:0,title:'',image:'',url:'',price:'',rating:''};

  ngOnInit() { }

  public formatCardTitle(title : string)
  {
    if( title.split('').find((isDash : string) => isDash === '-')
        && title.length < 25) {

      return title.split('-')[0];
    } else {
      return title.split('').splice(0,25).join('')+' ...';
    }
  }


}
