import { ApiService } from './../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CartService } from "../../services/cart.service";
import { FilterPipe } from './../../shared/filter.pipe';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productData:any= [];
  searchKey:string="";
  constructor(private route:ActivatedRoute, private service:ApiService, private cartservice:CartService) { }

  ngOnInit(): void {
    this.service.getProduct()
    .subscribe(res=>{

      this.productData=res;
      this.productData['quantity'] = 1
      this.productData['total']= this.productData.price;
    });
  this.cartservice.search.subscribe((val:any)=>{
    this.searchKey=val;
  })

  }
  // addtocart(){
  //   if(this.productData){
  //     this.productData.quantity=this.productData;
  //     if(!localStorage.getItem('user')){

  //       this.cartservice.localAddCart(this.productData);

  //     }
  //   }
  //   //this.cartservice.addroCart(item);
  // }

}

 /* inc(d:any){
    //console.log(d.qnt);
    if(d.qnt!=5){
    d.qnt ++;
    }
  }
  dec(d:any){
    if(d.qnt!=1){
      d.qnt --;
      }
  }
  itemCard:any=[];
  addCart(Category:any){
    //console.log(Category);
    let cartDataNull = localStorage.getItem('localCart');
    if(cartDataNull== null){
      let storeDataGet=[];
      storeDataGet.push(Category);
      localStorage.setItem('localCart', JSON.stringify(storeDataGet));
    }
    else{
      var ID=Category.id;
      let index: number= -1;
      this.itemCard = JSON.parse(localStorage.getItem('localCart')|| '{}');


    }
    localStorage.setItem('localCart', JSON.stringify(Category));
    }*/
