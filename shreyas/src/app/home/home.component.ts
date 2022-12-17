import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  units:any;
  price:any;
  result:any;
  msg:any;
  msg1:any;
  constructor() { }

  ngOnInit(): void {
  }
  calc(){
    if(this.units>30 && this.units<40)
    {
      this.result=this.units*10;
    }
    else{
      this.result=this.units*20;
    }
  }
  pay(){
    this.msg="Paid"
  }
  no(){
    this.msg1="Ok As your wish"
  }
}
