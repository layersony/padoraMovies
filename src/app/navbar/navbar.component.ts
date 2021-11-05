import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../api/services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  search:string=''
  error:string='Search Query letters Should be more than 2'


  constructor(private service:ServicesService) { }

  ngOnInit(): void {
    this.service.movieRequest('action') // running movie request function
  }

  submitquery(){
    this.service.movieRequest(this.search)
  }
}
