import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public colors: String[] = ["red", "orange", "yellow", "green", "blue", "purple", "white", "black", "brown", "tan", "spotted", "striped"];
  public sexes: String[] = ["unknown", "male", "female"];
  public types: String[] = ["dog", "cat", "bird", "rodent", "fish", "reptile", "amphibian"];
  public fixed: String[] = ["true", "false", "unknown"];
  public status: String[] = ["not viewed", "viewed"];

  constructor() { }

  //this converts the type String to the Number value used in Java
  public typeToNumber(type: String): Number {

    for (let i = 0; i < this.types.length; i++) {

      if (type === this.types[i]) {
        return i + 1;
      }
    }
    //return 0 if empty string or invalid
    return 0;
  }
}
