interface Person {
  FirstName: string;
  LastName: string;
  FullName: string;
  Say(message: string): void;
  Greet(message: string): void;
}

export class Friend implements Person {
    FirstName: string;
    LastName: string;
    get FullName(): string {
        return `${this.LastName},${this.FirstName}`;
    }
    Say(message: string): void{
        console.log(message);
    }
    Greet = (message: string): void => console.log(message);
}



