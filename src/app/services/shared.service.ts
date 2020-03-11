import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public types : String[] = ["Cat", "Dog", "Fish", "Rodent", "Reptile", "Amphibian"];
  public sexes : String[] = ["Male", "Female","Unknown"];

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
