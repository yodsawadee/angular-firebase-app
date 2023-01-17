import { NgForm } from '@angular/forms';
import { Product } from './../models/product';
import { DBService } from './../services/db.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent{

  productId:any;
  product:Product={};
  constructor(private db:DBService, private aR:ActivatedRoute,private router:Router) {
    this.productId=this.aR.snapshot.params["id"];
    this.db.getProduct(this.productId)
    .subscribe((data)=>{
      this.product=data;
    })
  }

  onSubmit(form:NgForm) {
      this.db.updateProduct(this.productId,form.value)
      .then
      ((data)=>{
        this.router.navigate(['/']);
      })
      .catch((err)=>{
        
      })
  }

  onCancel() {
    this.router.navigate(['/']);
  }

  
}
