
export class Listing {

     private _id: Number;
     public get id(): Number {
          return this._id;
     }
     public set id(value: Number) {
          this._id = value;
     }
     private _userId: Number;
     public get userId(): Number {
         return this._userId;
     }
     public set userId(value: Number) {
         this._userId = value;
     }
     private _about: String;
     public get about(): String {
          return this._about;
     }
     public set about(value: String) {
          this._about = value;
     }
     private _age: Number;
     public get age(): Number {
          return this._age;
     }
     public set age(value: Number) {
          this._age = value;
     }
     private _city: String;
     public get city(): String {
          return this._city;
     }
     public set city(value: String) {
          this._city = value;
     }
     private _color: Number;
     public get color(): Number {
          return this._color;
     }
     public set color(value: Number) {
          this._color = value;
     }
     private _fixed: Number;
     public get fixed(): Number {
          return this._fixed;
     }
     public set fixed(value: Number) {
          this._fixed = value;
     }
     private _imageUrls: String[];
     public get imageUrls(): String[] {
          return this._imageUrls;
     }
     public set imageUrls(value: String[]) {
          this._imageUrls = value;
     }
     private _name: String;
     public get name(): String {
          return this._name;
     }
     public set name(value: String) {
          this._name = value;
     }
     private _sex: Number;
     public get sex(): Number {
          return this._sex;
     }
     public set sex(value: Number) {
          this._sex = value;
     }
     private _species: String;
     public get species(): String {
          return this._species;
     }
     public set species(value: String) {
          this._species = value;
     }
     private _address: String;
     public get address(): String {
          return this._address;
     }
     public set address(value: String) {
          this._address = value;
     }
     private _state: String;
     public get state(): String {
          return this._state;
     }
     public set state(value: String) {
          this._state = value;
     }
     private _type: Number;
     public get type(): Number {
          return this._type;
     }
     public set type(value: Number) {
          this._type = value;
     }
     private _videoUrls: String[];
     public get videoUrls(): String[] {
          return this._videoUrls;
     }
     public set videoUrls(value: String[]) {
          this._videoUrls = value;
     }

     private _weight: Number;
     public get weight(): Number {
          return this._weight;
     }
     public set weight(value: Number) {
          this._weight = value;
     }

     private _zipCode: String;
     public get zipCode(): String {
          return this._zipCode;
     }
     public set zipCode(value: String) {
          this._zipCode = value;
     }
}