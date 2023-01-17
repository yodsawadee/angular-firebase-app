import { Product } from './../models/product';
import { DBService } from './../services/db.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  products:Product[]=[]

 constructor(private db:DBService) {
    this.db.getProducts().subscribe((data)=>{
      console.log(data);
      this.products=data;
    })
 }
 
 deleteProduct(productid:any) {
   this.db.deleteProduct(productid)
   .then(()=>{
    console.log('deleted: ', productid);
   })
   .catch((err)=>{
    
   })
 }

}
