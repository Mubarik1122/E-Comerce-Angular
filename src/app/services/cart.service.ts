import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from "rxjs";

import { ProductComponent } from '../site/product/product.component';
@Injectable({
  providedIn: 'root'
})
export class CartService {
public cartItemList:any=[]
public productList = new BehaviorSubject<any>([]);
public search = new BehaviorSubject<any>([]);
cartData = new EventEmitter<any[]| []>();
constructor(private http:HttpClient) { }
// getProducts(){
//   return this.productList.asObservable();
// }
// setProducts(product:any){

//   this.cartItemList.push(...product);
//   this.productList.next(product);
// }
// addroCart(product:any){
//   this.cartItemList.push (product);
//   this.productList.next(this.cartItemList);
//   this.getTotalPrice();
//   console.log(this.cartItemList);
// }


localAddCart(data:any){
  let cartData =[]
  let local = localStorage.getItem('local');
  if (!local) {
    localStorage.setItem('local',JSON.stringify([data]));
  }
  else{
    cartData=JSON.parse(local);
    cartData.push(data);
    localStorage.setItem('local',JSON.stringify(cartData));
  }
  this.cartData.emit(cartData);
}
// currentCart(){
//   let userStore=localStorage.getItem('local');
//   let userData = userStore && JSON.parse(userStore);
//   return this.http.get('local');
//  }
//  getTotalPrice() : number{
//   let grandTotal=0;
//   this.cartItemList.map((a:any)=>{
//     grandTotal += a.total;
//   })
//   return grandTotal;
// }

// removeCartItem(Id: number){
//   let cartData = localStorage.getItem('local');
//   if(cartData){
//     let items=Id=JSON.parse(cartData);
//     items=items.filter((item:any)=>Id!=item.id);
//     localStorage.setItem('local',JSON.stringify(items));
//     this.cartData.emit(items);
//   }
//  }
//  removeAllCart(){
//   this.cartItemList=[]
//   this.productList.next(this.cartItemList);
// }
 cartSubject = new Subject<any>();
}
