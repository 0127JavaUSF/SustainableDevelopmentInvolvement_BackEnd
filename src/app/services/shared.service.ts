import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public types : String[] = ["Dog", "Cat", "Bird", "Rodent", "Fish", "Reptile", "Amphibian"];
  public sexes : String[] = ["Unknown", "Male", "Female"];

  constructor() { }

  //this converts the type String to the Number value used in Java
  public typeToNumber(type : String) : Number {

    for(let i = 0; i < this.types.length; i++) {

      if(type === this.types[i]) {
        return i + 1;
      }
    }
    return 0;
  }
}
