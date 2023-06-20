import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  //string interpolation
  title = 'own_project';
  city:string = "chennai";
  path:string = '../assets/chennai.jpg';
  name="Chidanand";
  cname:string ="special pecial";
  d:string = new Date().toLocaleDateString();
  timerid =setInterval(()=>{
    this.d=new Date().toLocaleTimeString();
  });
  
  //property binding
  isdisabled:boolean=true;
  ishidden:boolean=true;

  //class binding
  isactive:boolean=false;
  applyc1:boolean=true;

  //style binding
  cvar:string='blue';
  mystyle:object={
    color:'pink',
    background:'grey',
    border:'5px solid blue'
  };
  haserror:boolean=true;

  //event binding


}
