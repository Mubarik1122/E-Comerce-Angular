import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public product :any=[];
  public grandTotal !: number;
  constructor(private cartservice : CartService){}
  ngOnInit(): void {
    // this.cartservice.getProducts()
    // .subscribe((res)=>{
    //   this.product=res;
    //   // console.log(this.product)
    //   // this.grandTotal = this.cartservice.getTotalPrice();
    // })
   this.addProductToCart();
   this.loadCart();
  }
  getCartDetails:any=[];
  addProductToCart() {
           if(localStorage.getItem('local')){
              this.getCartDetails = JSON.parse(localStorage.getItem('local')||'{}');
              // console.log(this.getCartDetails)
           }
  }
total:number=0;
 loadCart(){
  if(localStorage.getItem('local')){
    this.getCartDetails = JSON.parse(localStorage.getItem('local')||'{}');
   this.total= this.getCartDetails.reduce(function(acc:any,val:any){
     return acc + (val.price * val.quantity);

    },0)
 }
 }
 removeItem(getCartDetails:any){
  //console.log(getCartDetails)
  if(localStorage.getItem('local')){
    this.getCartDetails = JSON.parse(localStorage.getItem('local')||'{}');
  for(let i=0; i<this.getCartDetails.length;i++){
    if (this.getCartDetails[i].id=== getCartDetails) {
      this.getCartDetails.splice(i,1);
      localStorage.setItem('local',JSON.stringify(this.getCartDetails));
      this.loadCart();
      this.cartNumberFunc();
    }
  }
  }
  // localStorage.removeItem('local');
 }
  emptycart(){
    localStorage.removeItem('local');
    this.getCartDetails = [];
    this.total=0;
    this.cartNumber=0;
    this.cartservice.cartSubject.next(this.cartNumber);
}
cartNumber:number=0;
cartNumberFunc(){
  var cartValue = JSON.parse(localStorage.getItem('local')||'{}')
  this.cartNumber=cartValue.length;
  this.cartservice.cartSubject.next(this.cartNumber);
}

}
