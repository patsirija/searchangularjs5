import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router) {}


  ngOnInit() {
  }
  place() {
    this.router.navigate(['place']); 
  }
  eapm() {
    this.router.navigate(['eapm']); 
  }

  department() {
    this.router.navigate(['department']); 
  }
}
