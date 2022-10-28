import { CartService } from './../../services/cart.service';
import { ApiService } from './../../services/api.service';

import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

   productData:any=[];
   quantity:any=1;

  constructor(private route:ActivatedRoute, private service:ApiService,private cartservice:CartService) {}


  ngOnInit(): void {
    let productId=this.route.snapshot.paramMap.get('productId');
    productId && this.service.getSingleProduct(productId).subscribe((result)=>{
      this.productData=result;
      this.productData['quantity'] = 1
      this.productData['total']= this.productData.price;
      // this.productData.push({quantity:'1'})


    })

  }
  handleQuantity(val:string)
  {
    if(this.quantity<5 && val==='plus'){
      this.quantity++;
    }else if(this.quantity>1 && val==='min'){
      this.quantity--;

    }
  }
  // inc(d:any){
  //   //console.log(d.qnt);
  //   if(d.qnt!=5){
  //   d.qnt ++;
  //   }
  // }
  // dec(d:any){
  //   if(d.qnt!=1){
  //     d.qnt --;
  //     }
  // }

  addtocart(){
    if(this.productData){
      this.productData.quantity=this.quantity;
      if(!localStorage.getItem('user')){

        this.cartservice.localAddCart(this.productData);

      }
    }
    //this.cartservice.addroCart(item);
  }

}
 /* changeImage(image:any)
  {
    this.currentImage = image
  }


*/
