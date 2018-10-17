export class Friends {

names: string;
age: number;
email: string;
bestFriend: boolean;

constructor(n:string,a:number,e:string,b:boolean) {
    this.names = n;
    this.age = a;
    this.email = e;
    this.bestFriend = b;

    }

    about(): any {
        return `name: ${this.names}, age: ${this.age}, email: ${this.email}, bestFriend: ${this.bestFriend}`;

    }
}

