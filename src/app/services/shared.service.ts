import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public colors: string[] = ["unknown", "red", "orange", "yellow", "green", "blue", "purple", "white", "black", "brown", "tan", "spotted", "striped"];
  public sexes: string[] = ["unknown", "male", "female"];
  public types: string[] = ["unknown", "dog", "cat", "bird", "rodent", "fish", "reptile", "amphibian", "other"];
  public fixed: string[] = ["unknown", "true", "false"];
  public status: string[] = ["not viewed", "viewed"];

  createAppListingId : number = 1;
  listingId : number = 1;
  newTemplateId: number = 1;
  reviewAppsListingId: number = 1;
  withCred: boolean = false;

  //JL
  public dogColors = [
    {
      name: 'Black',
      description: 'Potential enhancement'
    },
    {
        name: 'Brindle',
        description: 'Potential enhancement'
    },
    {
        name: 'Brown/Chocolate',
        description: 'Potential enhancement'
    },
    {
        name: 'Gray/Blue/Silver/Salt & Pepper',
        description: 'Potential enhancement'
    },
    {
        name: 'Merle',
        description: 'Potential enhancement'
    },
    {
        name: 'Red/Golden/Orange/Chestnut',
        description: 'Potential enhancement'
    },
    {
        name: 'Silver & Tan (Yorkie colors)',
        description: 'Potential enhancement'
    },
    {
        name: 'Tan/Yellow/Fawn',
        description: 'Potential enhancement'
    },
    {
        name: 'Tricolor (Tan/Brown & Black & White)',
        description: 'Potential enhancement'
    },
    {
        name: 'White',
        description: 'Potential enhancement'
    }
  ];

public catColors = [
    {
      name: 'Black',
      description: 'Potential enhancement'
    },
    {
        name: 'Black & White or Tuxedo',
        description: 'Potential enhancement'
    },
    {
        name: 'Brown or Chocolate',
        description: 'Potential enhancement'
    },
    {
        name: 'Brown Tabby',
        description: 'Potential enhancement'
    },
    {
        name: 'Calico or Dilute Calico',
        description: 'Potential enhancement'
    },
    {
        name: 'Cream or Ivory',
        description: 'Potential enhancement'
    },
    {
        name: 'Gray, Blue or Silver Tabby',
        description: 'Potential enhancement'
    },
    {
        name: 'Gray or Blue',
        description: 'Potential enhancement'
    },
    {
        name: 'Orange or Red',
        description: 'Potential enhancement'
    },
    {
        name: 'Orange or Red Tabby',
        description: 'Potential enhancement'
    }
    ,
    {
        name: 'Spotted Tabby/Leopard Spotted',
        description: 'Potential enhancement'
    }
    ,
    {
        name: 'Tabby',
        description: 'Potential enhancement'
    }
    ,
    {
        name: 'Tan or Fawn',
        description: 'Potential enhancement'
    }
    ,
    {
        name: 'Tan or Fawn Tabby',
        description: 'Potential enhancement'
    }
    ,
    {
        name: 'Tiger Striped',
        description: 'Potential enhancement'
    }
    ,
    {
        name: 'Tortoiseshell',
        description: 'Potential enhancement'
    }
    ,
    {
        name: 'White',
        description: 'Potential enhancement'
    }
  ];

  constructor() { }

  public colorToNumber(color: string): number {

    for (let i = 0; i < this.colors.length; i++) {

      if (color === this.colors[i]) {
        return i + 1;
      }
    }
    //return unknown
    return 1;
  }

  public fixedToNumber(fixed: string): number {

    for (let i = 0; i < this.fixed.length; i++) {

      if (fixed === this.fixed[i]) {
        return i + 1;
      }
    }
    //return unknown
    return 1;
  }

  public sexToNumber(sex: string): number {

    for (let i = 0; i < this.sexes.length; i++) {

      if (sex === this.sexes[i]) {
        return i + 1;
      }
    }
    //return unknown
    return 1;
  }

  //this converts the type String to the Number value used in Java
  public typeToNumber(type: string): number {

    for (let i = 0; i < this.types.length; i++) {

      if (type === this.types[i]) {
        return i + 1;
      }
    }
    //return unknown
    return 1;
  }
}
