import { Injectable } from '@angular/core';
import { Firestore, collectionData,collection,addDoc, doc, deleteDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private fs: Firestore) { }

  getBikes(){
    let bikesCollection = collection(this.fs, 'bikes');
    return collectionData(bikesCollection,{idField:'id'});
  }

  addBikes(desc: string){
    let data = {description: desc};
    let bikesCollection = collection(this.fs, 'bikes');
    return addDoc(bikesCollection, data);
  }

  deleteBikes(id: string){
    let docRef=doc(this.fs, `bikes/${id}`);
    return deleteDoc(docRef);
  }
}