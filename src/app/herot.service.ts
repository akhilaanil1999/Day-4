import { Injectable } from '@angular/core';
import { disdatabase } from 'src/assets/data/data';

@Injectable({
  providedIn: 'root'
})
export class HerotService {

  constructor() { }
  getData(){
    return disdatabase
  }
}
