import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HerotService } from 'src/app/herot.service';

@Component({
  selector: 'app-districts',
  templateUrl: './districts.component.html',
  styleUrls: ['./districts.component.css']
})
export class DistrictsComponent {
  constructor(private D:HerotService,private R:Router){}
  distdatabase=this.D.getData();
  gotodistpage(id:any)
  {
    localStorage.setItem('id',id)
    this.R.navigate(['/single'])
  }

}
