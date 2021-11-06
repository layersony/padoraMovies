import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Movie } from '../movie'
import { environment } from '../../environments/environment.prod'
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  // will store all the movies from search 
  allmovies: any = []
  movie: any = []


  constructor(private http:HttpClient) { }

  movieRequest(query:string){
    this.allmovies.splice(0,  this.allmovies.length) // Clear the movie array if it has content
    let promise = new Promise((resolve, reject)=>{
      this.http.get<any>("https://www.omdbapi.com/?s="+ query +"&apikey="+ environment.apikey).toPromise().then(res => {
        this.getallmovies(res)
        resolve('success');
      }, error =>{
        console.error(error)
        return reject()
      })
    })
    return promise
  }

  sleep(ms: number){
    return new Promise(resolve=> setTimeout(resolve, ms))
  }

  // to wait for url to return response for those with slow internet
  async getallmovies(res:any){
    await this.sleep(1000)
    res.Search.forEach((item:any)=>{
      this.movie = new Movie(item.Title, item.Year, item.imdbID, item.Type, item.Poster)
      this.allmovies.push(this.movie)
    })
  }

}
