// import { ApiService } from './../../services/api.service';
import { CartService } from './../../services/cart.service';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
   public totalItem : number=0;
   public searchTerm : string='';
   cartItemp=0;
  constructor(private cartservice:CartService,) { }

  ngOnInit(): void {

    let cartData =localStorage.getItem('local');
    if (cartData) {
      this.cartItemp=JSON.parse(cartData).length
    }
    this.cartservice.cartData.subscribe((items)=>{
      this.cartItemp=items.length
    })
}
search(event:any){
  this.searchTerm=(event.target as HTMLInputElement).value;
  console.log(this.searchTerm);
  this.cartservice.search.next(this.searchTerm);
}


}
