import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor(
    private http: HttpClient
  ) { }

  private ipUrl: string = 'http://ip-api.com/json/'

  getIp(){
    return this.http.get(this.ipUrl);
  }

  getHello(ip: string){
    return this.http.get(`https://hellosalut.stefanbohacek.dev/?ip=${ip}`)
  }
}
