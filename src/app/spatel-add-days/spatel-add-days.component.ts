import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spatel-add-days',
  templateUrl: './spatel-add-days.component.html',
  styleUrls: ['./spatel-add-days.component.css']
})
export class SpatelAddDaysComponent implements OnInit {


  constructor() {
 }

  ngOnInit(): void {
      const newDate = new Date();
      console.log(newDate);


  }
  get todaysDate() {
      return (new Date());
  }

}
