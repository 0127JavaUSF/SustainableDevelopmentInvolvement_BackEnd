import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public colors: string[] = ["red", "orange", "yellow", "green", "blue", "purple", "white", "black", "brown", "tan", "spotted", "striped"];
  public sexes: string[] = ["unknown", "male", "female"];
  public types: string[] = ["dog", "cat", "bird", "rodent", "fish", "reptile", "amphibian"];
  public fixed: string[] = ["true", "false", "unknown"];
  public status: string[] = ["not viewed", "viewed"];

  listingId : number = 1;
  newListingId: number = 1;
  reviewAppsListingId: number = 1;

  constructor() { }

  //this converts the type String to the Number value used in Java
  public typeToNumber(type: string): number {

    for (let i = 0; i < this.types.length; i++) {

      if (type === this.types[i]) {
        return i + 1;
      }
    }
    //return 0 if empty string or invalid
    return 0;
  }
}
