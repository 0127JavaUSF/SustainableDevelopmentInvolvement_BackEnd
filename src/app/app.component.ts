import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fontToDisplay:string;

changeFont(){  
  let bodyElement=document.getElementById("body");
  bodyElement.style.setProperty("font-family",this.fontToDisplay,"important");
  }

}
 