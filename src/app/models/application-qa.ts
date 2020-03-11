export class ApplicationQA {

    private _id: Number;
    public get id(): Number {
        return this._id;
    }
    public set id(value: Number) {
        this._id = value;
    }
    private _question: String;
    public get question(): String {
        return this._question;
    }
    public set question(value: String) {
        this._question = value;
    }
    private _answer: String;
    public get answer(): String {
        return this._answer;
    }
    public set answer(value: String) {
        this._answer = value;
    }
}