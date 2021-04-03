import { Component } from '@angular/core';
import { TestService } from './test.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contenterra-Task';


  TestData : any = {};
  TotalData:any;
  constructor (public ts:TestService){}

  ngOnInit(): void {
    this.ts.getData().subscribe(
      (data)=>{
        this.TestData=data;
        this.TotalData =  this.TestData.data.children;

        // console.log("json data is displaying....................",  this.TotalData);  
      
     },
      (err)=>{
        console.log(err)
      }
    )
    }



}
