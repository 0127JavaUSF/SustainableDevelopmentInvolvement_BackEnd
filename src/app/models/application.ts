
export class Application {

    private _id: Number;
    public get id(): Number {
        return this._id;
    }
    public set id(value: Number) {
        this._id = value;
    }
    private _date: Date;
    public get date(): Date {
        return this.date;
    }
    public set date(value: Date) {
        this.date = value;
    }
    private _userId: Number;
    public get userId(): Number {
        return this._userId;
    }
    public set userId(value: Number) {
        this._userId = value;
    }
    private _qa: Object[]; //an array of custom questions and answers
    public get qa(): Object[] {
        return this._qa;
    }
    public set qa(value: Object[]) {
        this._qa = value;
    }
    private _firstName: String;
    public get firstName(): String {
        return this._firstName;
    }
    public set firstName(value: String) {
        this._firstName = value;
    }
    private _lastName: String;
    public get lastName(): String {
        return this._lastName;
    }
    public set lastName(value: String) {
        this._lastName = value;
    }
    private _email: String;
    public get email(): String {
        return this._email;
    }
    public set email(value: String) {
        this._email = value;
    }
    private _phone: String;
    public get phone(): String {
        return this._phone;
    }
    public set phone(value: String) {
        this._phone = value;
    }
    private _address: String;
    public get address(): String {
        return this._address;
    }
    public set address(value: String) {
        this._address = value;
    }
    private _city: String;
    public get city(): String {
        return this._city;
    }
    public set city(value: String) {
        this._city = value;
    }
    private _state: String;
    public get state(): String {
        return this._state;
    }
    public set state(value: String) {
        this._state = value;
    }
    private _status: Number;
    public get status(): Number {
        return this._status;
    }
    public set status(value: Number) {
        this._status = value;
    }
    private _zipcode: String;
    public get zipcode(): String {
        return this._zipcode;
    }
    public set zipcode(value: String) {
        this._zipcode = value;
    }  
}