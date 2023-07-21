import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HelloService } from 'src/app/services/hello.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private helloService: HelloService
  ){}

  hideHello: boolean = true;
  hideBye: boolean = true;

  error: boolean = false;

  username: string = '';
  password: string = '';

  userIp: any;
  userHello: any;

  userInfo: any;
  userHelloInfo: any;

  ngOnInit(): void {
    this.getIp()
  }

  getIp(){
    this.helloService.getIp().subscribe(info => {
      this.userInfo = info;
      this.userIp = this.userInfo.query
      this.getHello()
    })
  }

  getHello(){
    this.helloService.getHello(this.userIp).subscribe(hello => {
      this.userHelloInfo = hello
      this.userHello = this.userHelloInfo.hello
    })

  }

  showHelloMessage(){
    if(this.username === '' || this.password === ''){
      this.error = true
    }else{
      this.hideHello = false
      this.error = false
    }
  }

  showByeMessage(){
    if(!this.hideHello){
      this.hideBye = false
      this.hideHello = true
      this.error = false
      this.password = ''
      setTimeout(() => {
        this.username = ''
        this.hideBye = true
      }, 2500)
    }
  }

}
