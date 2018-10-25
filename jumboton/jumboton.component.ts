import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-jumboton',
  templateUrl: './jumboton.component.html',
  styleUrls: ['./jumboton.component.css']
})
export class JumbotonComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }
  place() {
    this.router.navigate(['place']); 
  }
  insertapm() {
    this.router.navigate(['insertapm']); 
  }
  home2() {
    this.router.navigate(['home2']); 
  }
  home3() {
    this.router.navigate(['home3']); 
  }
  department() {
    this.router.navigate(['department']); 
  }
  search() {
    this.router.navigate(['search']); 
  }
}
