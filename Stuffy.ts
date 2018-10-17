import  { Friends } from "./Friends";

    private _name: string;
    private type: string;
    private color: string;

    constructor(n: string, t: string, c: string) {
        this._name = n;
        this.type = t;
        this.color = c;
    }

    get name(): string {
        return this._name;
    }
    about(): string {
        return `name: ${this._name}, type: ${this.type}, color: ${this.color}`;
    }
}