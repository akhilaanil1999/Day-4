import { Component } from '@angular/core';
import {HerotService} from 'src/app/herot.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {
     disdetails:any 
     constructor(private D:HerotService){}
     ngOnInit(){
        let idd:any=localStorage.getItem('id')
              let arrd= this.D.getData();
      this.disdetails=arrd.filter(e=>e.name===idd)
}
}
  

  

  

