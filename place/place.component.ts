import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }
  place() {
    this.router.navigate(['place']); 
  }
  eapm() {
    this.router.navigate(['eapm']); 
  }
  home3() {
    this.router.navigate(['home3']); 
  }
  department() {
    this.router.navigate(['department']); 
  }
  eprofile() {
    this.router.navigate(['eprofile']); 
  }
  search() {
    this.router.navigate(['search']); 
  }
}

