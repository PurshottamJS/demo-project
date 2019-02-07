import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-p-table',
  templateUrl: './p-table.component.html',
  styleUrls: ['./p-table.component.css']
})
export class PTableComponent implements OnInit {
 
  constructor( ) { }

  ngOnInit() {
    //this.getCarsSmall().then(cars => this.cars = cars);
  }
  cars:Array<object>=[
    { 
      vin:{
          head:"Targaryen",
          content:"sample content"
      },
  year:'1213',
  brand:'1233',
  color:'red'
},
{ 
  vin:{
      head:"Targaryen",
      content:"sample content"
  },
year:'1213',
brand:'1233',
color:'red'
},
{ 
  vin:{
      head:"Targaryen",
      content:"sample content"
  },
year:'1213',
brand:'1233',
color:'red'
},
{ 
  vin:{
      head:"Targaryen",
      content:"sample content"
  },
year:'1213',
brand:'1233',
color:'red'
},
{ 
  vin:{
      head:"Targaryen",
      content:"sample content"
  },
year:'1213',
brand:'1233',
color:'red'
},
{ 
  vin:{
      head:"Targaryen",
      content:"sample content"
  },
year:'1213',
brand:'1233',
color:'red'
},
{ 
  vin:{
      head:"Targaryen",
      content:"sample content"
  },
year:'1213',
brand:'1233',
color:'red'
},
{ 
  vin:{
      head:"Targaryen",
      content:"sample content"
  },
year:'1213',
brand:'1233',
color:'red'
},
{ 
  vin:{
      head:"Targaryen",
      content:"sample content"
  },
year:'1213',
brand:'1233',
color:'red'
}
  ];
  paginatorleft= 1;
  //this.getCarsSmall().then(cars => this.cars = cars);

        // this.cols = [
        //     { field: 'vin', header: 'Vin' },
        //     {field: 'year', header: 'Year' },
        //     { field: 'brand', header: 'Brand' },
        //     { field: 'color', header: 'Color' }
        // ];
        // getCarsSmall() {
        //   return this.http.get<any>('assets/cars-small.json')
        //     .toPromise()
        //     .then(res => <Car[]>res.data)
        //     .then(data => { return data; });
        //   }
}
