import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  counter1 = 0;
  counter2 = 0;
  counter3 = 0;
  target1 = 1.5;
  target2 = 100;
  target3 = 48;
  interValid : any;
  interValid2 : any;
  interValid3 : any;

  ngOnInit(): void {
      this.startCounter1();
      this.startCount2();
      this.startCounter3();
  }


  startCounter1(){
    this.interValid = setInterval(() => {
      this.counter1 += 0.5;
      if(this.counter1 >= this.target1){
        clearInterval(this.interValid);
        }
        }, 500);
  }

  startCount2(){
    this.interValid2 = setInterval(() => {
      this.counter2 += 10;
      if (this.counter2 >= this.target2) {
        clearInterval(this.interValid2);
      }
    }, 100)
  }

  startCounter3(){
    this.interValid3 = setInterval(() => {
      this.counter3 += 2;
      if (this.counter3 >= this.target3) {
        clearInterval(this.interValid3);
        }
        }, 10);
  }
}
