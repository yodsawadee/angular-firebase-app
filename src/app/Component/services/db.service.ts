import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { collection, collectionData, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { addDoc, deleteDoc, doc } from '@firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DBService {

  constructor(private firestore:Firestore) { 
  }

  addProduct(product:Product) {
    let $productsRef=collection(this.firestore,"products");
    return addDoc($productsRef,product);
  }

  getProducts() {
    let $productsRef=collection(this.firestore,"products");
    return collectionData($productsRef,{idField:"id"}) as Observable<Product[]>;
  }

  deleteProduct(id:string) {
    let $productRef=doc(this.firestore,"products/"+id);
    return deleteDoc($productRef);
  }

  getProduct(id:string) {
    let $productRef=doc(this.firestore,"products/"+id);
    return docData($productRef,{idField:"id"}) as Observable<Product>;
  }

  updateProduct(id:string,product:Product) {
    let $productRef=doc(this.firestore,"products/"+id);
    return setDoc($productRef,product);
  }

}
