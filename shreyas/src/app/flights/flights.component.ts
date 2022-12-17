import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  name1:String="";
  source1:String="";
  dest1:String="";
  fare1:String="";
  space:String="";
  public click=false;
  public flights=[
        {
          name:"Belgaum",
          value:1,
          flight:[
            {
              name:"A",
              source:"Belgaum",
              dest:"Hubli",
              fare:"30"
            },
            {
              name:"B",
              source:"Hubli",
              dest:"Belgaum",
              fare:"40"
            }
          ]
        },
        {
          name:"Hubli",
          value:2,
          flight:[
            {
              name:"C",
              source:"Hubli",
              dest:"Belgaum",
              fare:"50"
            },
            {
              name:"D",
              source:"Belgaum",
              dest:"Hubli",
              fare:"60"
            }
          ]
        }
  ]

  public results: string[]=[
 
  ]
  constructor() { }
  ngOnInit(): void {
  }
  shreyas(value:any){
     this.results=[
    ]
    var x=0;
 
    this.click=true;
    this.name1='';
    this.source1='';
    this.fare1='';
    this.dest1='';
   for(var i=0;i<this.flights.length;i++)
   {
    if(value===this.flights[i].value)
    {
      console.log(this.flights[i].flight.length);
      for(var j=0;j<this.flights[i].flight.length;j++)
      {
              this.name1+=this.flights[i].flight[j].name;
              this.source1+=this.flights[i].flight[j].source;
              this.dest1+=this.flights[i].flight[j].dest;
              this.fare1+=this.flights[i].flight[j].fare;
              let str={
                name2:this.name1,
                source2:this.source1,
                dest2:this.dest1,
                fare2:this.fare1
              }
              this.name1+="<br/>"
              //but this is not working bro 
      }
    }
   }
  }
}
