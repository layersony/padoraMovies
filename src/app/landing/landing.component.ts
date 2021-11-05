import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../api/services.service'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  movies: any =[]

  constructor(private service:ServicesService) { }

  ngOnInit(): void {
    this.movies = this.service.allmovies
  }

}
